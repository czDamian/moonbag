"use client";
import dynamic from "next/dynamic";
import { useWallet } from '@solana/wallet-adapter-react';
import { useEffect, useState } from "react";
import { Connection, clusterApiUrl } from "@solana/web3.js";

// Dynamically import the WalletMultiButton to avoid SSR issues
const WalletMultiButton = dynamic(
  () => import("@solana/wallet-adapter-react-ui").then(mod => mod.WalletMultiButton),
  { ssr: false }
);

const ConnectWallet = ({ onBalanceChange }) => {
  const { publicKey } = useWallet();
  const [balance, setBalance] = useState(0.00);

  useEffect(() => {
    if (publicKey) {
      const connection = new Connection(clusterApiUrl("devnet"));
      connection.getBalance(publicKey).then((lamports) => {
        const sol = (lamports / 1e9).toFixed(2);
        setBalance(sol);
        if (onBalanceChange) {
          onBalanceChange(sol);
        }
      });
    } else {
      setBalance(0.00);
      if (onBalanceChange) {
        onBalanceChange(0.00);
      }
    }
  }, [publicKey, onBalanceChange]);

  return (
    <div>
      <WalletMultiButton />
    </div>
  );
};

export default ConnectWallet;