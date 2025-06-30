import { NextResponse } from 'next/server';

const API_KEY = process.env.MORALIS_API_KEY;

// Simple in-memory cache (for demonstration; use Redis or a persistent cache for production)
const tokenCache = new Map();
const CACHE_DURATION_MS = 12 * 60 * 60 * 1000; // 12 hours

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const tokenId = searchParams.get("tokenId");

  if (!tokenId) {
    return NextResponse.json({
      msg: "Missing tokenId parameter"
    }, { status: 400 });
  }

  // Check cache
  const cached = tokenCache.get(tokenId);
  const now = Date.now();
  if (cached && (now - cached.timestamp < CACHE_DURATION_MS)) {
    console.log(`Returning cached data for tokenId: ${tokenId}`);
    return NextResponse.json(cached.data);
  }

  const url = `https://solana-gateway.moralis.io/token/mainnet/${tokenId}/metadata`;
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

    if (!data.name || data.name == "") {
      return NextResponse.json({ success: false });
    }

    // Extract only the required fields
    const result = {
      name: data?.name ?? "",
      contractAddress: data?.mint ?? "",
      description: data?.description ?? "",
      symbol: data?.symbol ?? "",
      logo: data?.logo ?? "",
      decimals: data?.decimals ?? "",
      totalSupply: data?.totalSupply ?? "",
      totalSupplyFormatted: data?.totalSupplyFormatted ?? "",
      links: data?.links ?? {},
      success: true
    };

    // Store in cache
    tokenCache.set(tokenId, { data: result, timestamp: now });

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      msg: "Error fetching token metadata",
      error: err.message
    }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ msg: "Hello World" })
}