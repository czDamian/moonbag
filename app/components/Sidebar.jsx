"use client"

import { FiX } from "react-icons/fi"
import { FaDollarSign, FaChartBar, FaVoteYea, FaShoppingCart } from "react-icons/fa"
import { RiNftFill } from "react-icons/ri"
import { GiDustCloud } from "react-icons/gi"
import { MdAccountBalanceWallet } from "react-icons/md"
import { SiSolana } from "react-icons/si"
import Image from "next/image"
import Link from "next/link"

export default function Sidebar({ isOpen, onClose }) {
  const navigationItems = [
    { icon: FaDollarSign, label: "Treasury", active: true },
    // { icon: RiNftFill, label: "NFTs" },
    { icon: FaChartBar, label: "Leaderboard" },
    { icon: FaVoteYea, label: "Voting" },
    // { icon: GiDustCloud, label: "Dust Collector" },
    { icon: FaShoppingCart, label: "Buy $MOONBAG", special: true },
  ]

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-72 bg-[#1e1e1e] border-r border-[#383838] z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#383838]">
          <div className="flex items-center space-x-3">
            <Image src="/moonbag.jpg" alt="Moon BAG" width={32} height={32} className="rounded-lg" />
            <span className="text-white font-semibold text-lg">Moon Bag</span>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-white transition-colors">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 py-4">
          {navigationItems.map((item, index) => {
            const Icon = item.icon;
            // If it's the special "Buy $MOONBAG" button, render as a link
            if (item.special) {
              return (
                <a
                  key={index}
                  href="https://dexscreener.com/solana/5zh2jbhmzaeef8ymcndabylv9obz1em2qhnxda7xt55u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors text-[#FE66F7] hover:bg-[#383838] font-medium"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              );
            }
            // If it's the Voting link, render as an external link
            if (item.label === "Voting") {
              return (
                <Link
                  key={index}
                  href="/voting"
                  className="w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors hover:bg-[#383838] font-medium"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            }
            return (
              <button
                key={index}
                className={`w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors ${item.active
                  ? "bg-[#383838] text-white border-r-2 border-[#fe66f7a1]"
                  : "text-gray-300 hover:bg-[#383838] hover:text-white"
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Wallet Section */}
        <div className="border-t border-[#383838] p-4 space-y-3">
          <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">Wallet</div>

          {/* SOL Balance */}
          <div className="flex items-center space-x-3 p-3 bg-[#383838] rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center">
              <SiSolana className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <div className="text-white font-medium">0.00 SOL</div>
            </div>
          </div>

          {/* View Wallet Details */}
          <button className="w-full flex items-center space-x-3 p-3 text-gray-300 hover:bg-[#383838] hover:text-white rounded-lg transition-colors">
            <MdAccountBalanceWallet className="w-5 h-5" />
            <span className="font-medium">View Wallet Details</span>
          </button>
        </div>
      </div>
    </>
  )
}
