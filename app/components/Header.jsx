"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { FaDollarSign, FaChartBar, FaVoteYea, FaShoppingCart } from "react-icons/fa"
import { MdAccountBalanceWallet } from "react-icons/md"
import { RiNftFill } from "react-icons/ri"
import { GiDustCloud } from "react-icons/gi"
import Sidebar from "./Sidebar"
import Image from "next/image"
import Link from "next/link"
import ConnectWallet from "./ConnectWallet"
import { GrPlan } from "react-icons/gr";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [solBalance, setSolBalance] = useState(0.00)

  const navigationItems = [
    { icon: FaDollarSign, label: "TREASURY", link: "/treasury" },
    // { icon: RiNftFill, label: "NFTS", link: "/nfts" },
    // { icon: FaChartBar, label: "LEADERBOARD", link: "#leaderboard" },
    { icon: FaVoteYea, label: "VOTING", link: "/voting" }, 
    { icon: GrPlan, label: "ROADMAP", link: "/roadmap" },
    // { icon: GiDustCloud, label: "DUST", link: "/dust" },
    { icon: FaShoppingCart, label: "BUY $MOONBAG", link: "https://dexscreener.com/solana/5zh2jbhmzaeef8ymcndabylv9obz1em2qhnxda7xt55u", external: true, active: true },
  ]

  return (
    <>
      <header className="bg-[#1e1e1e] border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Section - Menu + Logo */}
            <div className="flex items-center space-x-4">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-300 hover: hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Image src="/moonbag2.jpg" alt="Moon BAG" width={32} height={32} className="rounded-lg" />
                <span className=" font-semibold text-lg">$MOONBAG</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => {
                const Icon = item.icon
                if (item.external) {
                  return (
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors text-[#FE66F7] hover:bg-[#fe66f61c]`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </a>
                  )
                }
                return (
                  <Link
                    key={index}
                    href={item.link}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors  ${item.active
                      ? "text-[#FE66F7] bg-[#fe66f61c]"
                      : "text-gray-300 hover:text-[#FE66F7] hover:bg-[#fe66f61c]"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Right Section - Wallet Info + Connect Button */}
            <div className="flex items-center space-x-3">
              {/* Desktop Wallet Info */}
              <div className="hidden md:flex items-center space-x-3">
                <div className="flex items-center space-x-2 bg-[#fe66f65b]  px-3 py-2 rounded-md">
                  <MdAccountBalanceWallet className="w-4 h-4 " />
                  <span className=" text-sm font-medium">{solBalance ?? 0.00} SOL</span>
                </div>
              </div>

              {/* Connect Wallet Button - Visible on all devices */}
              <div className="text-[#FE66F7] uppercase">
                <ConnectWallet onBalanceChange={(bal) => setSolBalance(bal ?? 0.00)} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
