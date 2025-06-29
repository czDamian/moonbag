"use client";
// import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import dynamic from "next/dynamic";
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect } from "react";

// Dynamically import the WalletMultiButton to avoid SSR issues
const WalletMultiButton = dynamic(() => import("@solana/wallet-adapter-react-ui").then(mod => mod.WalletMultiButton), {
  ssr: false,
});

const ConnectWallet = () => {
  const { wallet } = useWallet();

  useEffect(() => {
    if (wallet?.publicKey) {
      console.log("wallet connected", wallet.publicKey.toString());
      console.log("wallet connected", wallet);
    }
  }, [wallet?.publicKey, wallet]);

  return (
    <div>
      <WalletMultiButton />
    </div>
  )
}

export default ConnectWallet