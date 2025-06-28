"use client"

import { FiCopy } from "react-icons/fi"

export default function TreasuryHero() {
  const treasuryAddress = "5KemPqD1SMqxKKdSmEJMCNtXTVUZcdSu4eYJ57YUqEZJ"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(treasuryAddress)
  }

  return (
    <section className=" py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold [#383838] mb-6">
          Treasury <span className="text-[#E91E63]">Assets</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 text-lg sm:text-xl mb-16">DAO treasury holdings and token management</p>

        {/* Treasury Info Card */}
        <div className="bg-gradient-to-br from-[#1a1a1a] to-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-lg p-6 sm:p-8 mx-auto">
          <div className="space-y-6">
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between">
              <div className="text-left">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Treasury Address</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300 font-mono text-sm">{treasuryAddress}</span>
                  <button onClick={copyToClipboard} className="text-gray-400 hover:[#383838] transition-colors">
                    <FiCopy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <h3 className="text-gray-400 text-sm font-medium mb-2">Total Value</h3>
                <span className="text-[#E91E63] text-2xl font-bold">$2,938,697.37</span>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="md:hidden space-y-6">
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-2">Treasury Address</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-300 font-mono text-sm break-all">{treasuryAddress}</span>
                  <button
                    onClick={copyToClipboard}
                    className="text-gray-400 hover:[#383838] transition-colors flex-shrink-0"
                  >
                    <FiCopy className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-2">Total Value</h3>
                <span className="text-[#E91E63] text-2xl font-bold">$2,938,697.37</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
