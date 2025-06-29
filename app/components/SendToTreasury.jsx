"use client"

import { useState, useEffect, useCallback } from "react"
import { SiSolana } from "react-icons/si"
import { IoMdSend } from "react-icons/io";
import { CiMoneyBill } from "react-icons/ci";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export default function SendToTreasury() {
  const [tokenAddress, setTokenAddress] = useState("")
  const [amount, setAmount] = useState("")
  const treasuryAddress = process.env.NEXT_PUBLIC_TREASURY_ADDRESS;
  const [tokenDetails, setTokenDetails] = useState({
    name: "",
    symbol: "",
    contractAddress: "",
    logo: "/usdc.png",
  });
  const [showTokenDetails, setShowTokenDetails] = useState(false);
  const [error, setError] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  // Fetch token details when tokenAddress changes
  useEffect(() => {
    if (!tokenAddress) {
      setShowTokenDetails(false);
      setError("");
      setTokenDetails({
        name: "",
        symbol: "",
        contractAddress: "",
        logo: "/usdc.png",
      });
      return;
    }

    const fetchTokenDetails = async () => {
      try {
        setError("");
        const res = await fetch("/api/tokens?tokenId=" + tokenAddress, {
          method: "POST",
        });
        const data = await res.json();
        if (data.success === true) {
          setTokenDetails({
            name: data.name,
            symbol: data.symbol,
            contractAddress: data.contractAddress,
            logo: data.logo || "/usdc.png",
          });
          setShowTokenDetails(true);
          setError("");
        } else {
          setTokenDetails({
            name: "",
            symbol: "",
            contractAddress: "",
            logo: "/usdc.png",
          });
          setShowTokenDetails(false);
          setError("Token not found or invalid address.");
        }
      } catch (err) {
        setTokenDetails({
          name: "",
          symbol: "",
          contractAddress: "",
          logo: "/usdc.png",
        });
        setShowTokenDetails(false);
        setError("Error fetching token details.");
      }
    };

    fetchTokenDetails();
  }, [tokenAddress]);

  // Submit handler for sending SOL to treasury
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    if (!publicKey) {
      alert("Please connect your wallet first.");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (!treasuryAddress) {
      alert("Treasury address is not set.");
      return;
    }

    try {
      // Convert amount in SOL to lamports
      const lamports = Math.floor(Number(amount) * 1e9);

      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey(treasuryAddress),
          lamports,
        })
      );

      const { blockhash, lastValidBlockHeight } = await connection.getLatestBlockhash();

      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature });

      alert("Transaction sent! Signature: " + signature);
      setAmount("");
    } catch (err) {
      if (err instanceof WalletNotConnectedError) {
        alert("Wallet not connected!");
      } else {
        alert("Transaction failed: " + (err.message || err));
      }
    }
  }, [publicKey, amount, treasuryAddress, connection, sendTransaction]);

  const tokens = [
    {
      name: "SOL",
      icon: SiSolana,
      color: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      name: "USDC",
      icon: () => (
        <Image src="/usdc.png" alt="USDC Token" width={100} height={100} className="rounded-full" />
      ),
      color: "bg-zinc-600",
    },
    {
      name: "$MOONBAG",
      icon: () => (
        <Image src="/moonbag.jpg" alt="Moon Bag Token" width={100} height={100} className="rounded-full" />
      ),
      color: "bg-zinc-600",
    },
  ];

  return (
    <div className="my-12 bg-[#1a1a1a] border border-zinc-700 rounded-lg p-4 mx-auto">
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <IoMdSend className="w-5 h-5 text-white" />
        <h2 className="text-white text-xl font-semibold">Send to Treasury</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Desktop Layout - Side by side inputs */}
        <div className="sm:grid sm:grid-cols-1 lg:grid-cols-2 md:gap-6">
          <div>
            <input
              type="text"
              placeholder="Token Address"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-600 rounded-lg px-4 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-[#4A3085] transition-colors"
            />
            <p className="text-zinc-300 text-sm my-2">Paste a token address to auto-fetch token info</p>
            {error && (
              <div className="text-red-500 text-sm mt-2">{error}</div>
            )}
          </div>

          {/* token details. Only show if success */}
          {showTokenDetails && (
            <div>
              <div className="flex gap-3 justify-start items-center w-full py-2 md:py-0 mb-2">
                {/* Only show image if success */}
                {tokenDetails.name && (
                  <img
                    src={tokenDetails.logo}
                    alt={tokenDetails.name || "Token Logo"}
                    width={100}
                    height={100}
                    className="rounded-full w-10 h-10"
                    onError={(e) => { e.target.src = "/usdc.png"; }}
                  />
                )}
                <div className="">
                  <span className="py-3 text-white text-lg uppercase">
                    {tokenDetails.name}
                    {/* Only show (symbol) if symbol exists */}
                    {tokenDetails.symbol && (
                      <span className="ml-2 uppercase">({tokenDetails.symbol})</span>
                    )}
                    <div className="text-xs pt-1 text-zinc-300">{tokenDetails.contractAddress} </div>
                  </span>
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <div className=" text-red-500 rounded-sm"> <CiMoneyBill /></div>
              </div>
              <input
                type="text"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-600 rounded-lg px-10 py-3 text-white placeholder-zinc-400 focus:outline-none focus:border-[#4A3085] transition-colors"
              />
            </div>
            <p className="text-zinc-400 text-sm mt-2">Enter the amount you want to send</p>
          </div>
        </div>

        {/* Send Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#3D2A78] to-[#4A3085] hover:from-[#4A3085] hover:to-[#3D2A78] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          <IoMdSend className="w-4 h-4" />
          <span>SEND TO TREASURY</span>
        </button>

        {/* Token Selection */}
        <div className="flex items-center justify-center space-x-8 pt-4">
          {tokens.map((token, index) => {
            const IconComponent = token.icon
            return (
              <button
                key={index}
                type="button"
                className="flex flex-col items-center space-y-2 group hover:scale-105 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-full ${token.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}
                >
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <span className="text-zinc-300 text-sm font-medium">{token.name}</span>
              </button>
            )
          })}
        </div>
        <div className="flex items-center justify-center space-x-2 text-zinc-400 text-sm mt-4">
          {/* disclaimer */}
          <FaInfoCircle size={22} />
          <span>Connect your wallet to send tokens to the treasury. </span>
          <button className="text-[#8958fd] hover:underline">Connect Wallet</button>
        </div>
      </form>
    </div>
  )
}
