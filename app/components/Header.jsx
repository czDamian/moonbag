"use client"

import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { FaDollarSign, FaChartBar, FaVoteYea, FaShoppingCart } from "react-icons/fa"
import { MdAccountBalanceWallet } from "react-icons/md"
import { RiNftFill } from "react-icons/ri"
import { GiDustCloud } from "react-icons/gi"
import Sidebar from "./Sidebar"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { icon: FaDollarSign, label: "TREASURY", active: true },
    // { icon: RiNftFill, label: "NFTS" },
    { icon: FaChartBar, label: "LEADERBOARD" },
    // { icon: FaVoteYea, label: "VOTING" },
    // { icon: GiDustCloud, label: "DUST" },
    { icon: FaShoppingCart, label: "BUY $ID" },
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
              <div className="flex items-center gap-2">
                <Image src="/moonbag.jpg" alt="Moon BAG" width={32} height={32} className="rounded-lg" />
                <span className=" font-semibold text-lg">Moon BAG</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <button
                    key={index}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors  ${item.active
                      ? "text-[#E91E63] bg-[#e91e621e]"
                      : "text-gray-300 hover:text-[#E91E63] hover:bg-[#e91e621e]"
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </nav>

            {/* Right Section - Wallet Info + Connect Button */}
            <div className="flex items-center space-x-3">
              {/* Desktop Wallet Info */}
              <div className="hidden md:flex items-center space-x-3">
                {/* <div className="flex items-center space-x-2 bg-red-600 px-3 py-1.5 rounded-md">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className=" text-sm font-medium">0.00</span>
                </div> */}
                <div className="flex items-center space-x-2 bg-[#E91E63] px-3 py-1.5 rounded-md">
                  <MdAccountBalanceWallet className="w-4 h-4 " />
                  <span className=" text-sm font-medium">0</span>
                </div>
              </div>

              {/* Connect Wallet Button - Visible on all devices */}
              <button className="text-[#FF4081] uppercase hover:bg-[#e91e621e] px-4 py-1.5 rounded-md  text-sm font-medium transition-colors">
                <span className="hidden sm:inline">5KemP...EZJ</span>
                <span className="sm:hidden">5KemP...EZJ</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  )
}
