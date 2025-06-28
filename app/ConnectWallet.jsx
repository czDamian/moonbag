"use client";
import React, { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

function ConnectWallet() {
  const {
    wallet,
    wallets,
    select,
    connect,
    disconnect,
    publicKey,
    connecting,
    disconnecting,
  } = useWallet();

  const [showWalletList, setShowWalletList] = useState(false);

  const handleClick = async () => {
    if (wallet && publicKey) {
      await disconnect();
    } else if (!wallet) {
      setShowWalletList(true);
    } else {
      try {
        await connect();
      } catch (err) {
        console.error("Wallet connection error:", err);
      }
    }
  };

  const label = (() => {
    if (disconnecting) return "Disconnecting...";
    if (connecting) return "Connecting...";
    if (wallet && publicKey) return "Disconnect Wallet";
    if (wallet) return "Connect Wallet";
    return "Select Wallet";
  })();

  return (
    <div>
      <button
        className="px-6 py-2 rounded-lg font-semibold transition-colors
          bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={connecting || disconnecting}
        onClick={handleClick}
      >
        {label}
      </button>

      {showWalletList && (
        <div className="mt-4 flex flex-col gap-2">
          {wallets.map((w) => (
            <button
              key={w.adapter.name}
              className="px-4 py-2 rounded bg-gray-100 hover:bg-gray-200 text-gray-800"
              onClick={async () => {
                select(w.adapter.name);
                setShowWalletList(false);
                try {
                  await connect();
                } catch (err) {
                  console.error("Error connecting to selected wallet", err);
                }
              }}
            >
              {w.adapter.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ConnectWallet;
