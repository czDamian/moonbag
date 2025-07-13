"use client"

import { FiCopy } from "react-icons/fi"
import Image from "next/image"
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const walletAddress = "5KemPq...YUqEZJ"

  const copyToClipboard = () => {
    navigator.clipboard.writeText("5KemPqD1SMqxKKdSmEJMCNtXTVUZcdSu4eYJ57YUqEZJ")
  }

  return (
    <footer
      className="bg-[#1a1a1a] py-16"
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-3">
            <Image src="/moonbag2.jpg" alt="Moon BAG" width={32} height={32} className="rounded-lg" />
            <div>
              <h3 className="text-white font-bold text-lg">$MOONBAG</h3>
              <p className="text-zinc-400 text-sm">Where integrity meets community</p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://x.com/moonbaglabs" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center transition-colors">
              <Image src="/moonbaglabs.jpg" alt="Moon BAG" width={100} height={100} className="rounded-full w-12" />
            </a>
            <a href="https://x.com/MoonBagOG" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-zinc-700 hover:bg-zinc-600 rounded-full flex items-center justify-center transition-colors">
              <FaXTwitter className="w-5 h-5 text-zinc-300 hover:text-white" />
            </a>
            <a href="https://moonshot.com/?ref=YTPaYyBhYd" target="_blank" rel="noopener noreferrer" className=" hover:bg-zinc-600 rounded-full flex items-center justify-center transition-colors">
              <Image src="/moonshot.jpg" alt="Moon BAG" width={100} height={100} className="rounded-full w-12" />
            </a>

          </div>

          {/* Wallet Address */}
          <div className="flex items-center space-x-2 bg-zinc-800 px-4 py-2 rounded-lg">
            <span className="text-zinc-300 font-mono text-sm">{walletAddress}</span>
            <button onClick={copyToClipboard} className="text-zinc-400 hover:text-white transition-colors">
              <FiCopy className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-zinc-800">
          <p className="text-center text-zinc-400 text-sm">© 2025 Moon Bag. All rights reserved.</p>
        </div>
      </div>

      {/* Chat Widget (Bottom Right) */}
      <div className="fixed bottom-4 right-4 z-50">
        <button className="w-12 h-12 bg-[#4A3085] hover:bg-[#3D2A78] rounded-lg shadow-lg flex items-center justify-center transition-colors">
          <span className="text-white text-lg">💬</span>
        </button>
      </div>
    </footer>
  )
}
