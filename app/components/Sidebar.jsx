"use client"

import { FiX } from "react-icons/fi"
import { FaDollarSign, FaChartBar, FaVoteYea, FaShoppingCart } from "react-icons/fa"
import { RiNftFill } from "react-icons/ri"
import { GiDustCloud } from "react-icons/gi"
import { MdAccountBalanceWallet } from "react-icons/md"
import { SiSolana } from "react-icons/si"
import { GrPlan } from "react-icons/gr";
import Image from "next/image"
import Link from "next/link"

export default function Sidebar({ isOpen, onClose }) {
  const navigationItems = [
    { icon: FaDollarSign, label: "Treasury", link: "/treasury", active: true },
    // { icon: RiNftFill, label: "NFTs", link: "/nfts" },
    { icon: FaChartBar, label: "Leaderboard", link: "#leaderboard" },
    { icon: FaVoteYea, label: "Voting", link: "/voting" },
    { icon: GrPlan, label: "Roadmap", link: "/roadmap" },
    // { icon: GiDustCloud, label: "Dust Collector", link: "/dust" },
    { icon: GrPlan, label: "WhitePaper", link: "/whitepaper" },
    { icon: FaShoppingCart, label: "Buy $MOONBAG", link: "https://dexscreener.com/solana/5zh2jbhmzaeef8ymcndabylv9obz1em2qhnxda7xt55u", external: true, special: true },
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
            <Image src="/moonbag2.jpg" alt="Moon BAG" width={32} height={32} className="rounded-lg" />
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
            if (item.external) {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors mt-4 text-[#FE66F7] hover:bg-[#383838] font-medium"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              );
            }
            return (
              <Link
                key={index}
                href={item.link}
                className={`w-full my-2 flex items-center space-x-3 px-6 py-3 text-left transition-colors ${item.active
                  ? "bg-[#383838] text-white border-r-2 border-[#fe66f7a1]"
                  : "text-gray-300 hover:bg-[#383838] hover:text-white"
                  } font-medium`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  )
}
