import { NextResponse } from 'next/server';

const API_KEY = process.env.MORALIS_API_KEY;

// Helper to fetch token metadata for a given token address
async function fetchTokenMetadata(tokenAddress) {
  const url = `https://solana-gateway.moralis.io/token/mainnet/${tokenAddress}/metadata`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-Key': API_KEY
    },
  };
  try {
    const res = await fetch(url, options);
    const data = await res.json();
    // Return only if metadata has a name (valid token)
    if (data && data.name) {
      return {
        name: data?.name ?? "",
        contractAddress: data?.mint ?? tokenAddress,
        description: data?.description ?? "",
        symbol: data?.symbol ?? "",
        logo: data?.logo ?? "",
        decimals: data?.decimals ?? "",
        totalSupply: data?.totalSupply ?? "",
        totalSupplyFormatted: data?.totalSupplyFormatted ?? "",
        links: data?.links ?? {},
        success: true
      };
    }
  } catch (err) {
    // Ignore errors for individual tokens, just skip them
  }
  return null;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = 10;

  const url = 'https://solana-gateway.moralis.io/token/mainnet/exchange/pumpfun/graduated?limit=99';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-Key': API_KEY
    },
  };

  try {
    const res = await fetch(url, options);
    const data = await res.json();
    // console.log("Moralis response:", data);

    // Get all tokens
    const allTokens = Array.isArray(data.result) ? data.result : [];

    // Fetch metadata for each token in parallel and merge with price/liquidity data
    const metadatas = await Promise.all(
      allTokens.map(async (token) => {
        if (token.tokenAddress) {
          const meta = await fetchTokenMetadata(token.tokenAddress);
          if (meta) {
            // Merge price/liquidity data from graduated endpoint
            return {
              ...meta,
              priceNative: token.priceNative ?? null,
              priceUsd: token.priceUsd ?? null,
              liquidity: token.liquidity ?? null,
              fullyDilutedValuation: token.fullyDilutedValuation ?? null,
              graduatedAt: token.graduatedAt ?? null,
            };
          }
        }
        return null;
      })
    );

    // Filter out nulls and tokens without a logo BEFORE pagination
    const validMetadatas = metadatas.filter(meta => meta && meta.logo);

    // Paginate the filtered results
    const total = validMetadatas.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedTokens = validMetadatas.slice(start, end);

    return NextResponse.json({
      page,
      pageSize,
      total,
      totalPages,
      tokens: paginatedTokens,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      msg: "Error fetching tokens",
      error: err.message
    }, { status: 500 });
  }
}