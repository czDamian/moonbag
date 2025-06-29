"use client"

import { FiCheck, FiShoppingCart, FiLock, FiInfo } from "react-icons/fi"
import { FaFire } from "react-icons/fa"

export default function VotingPage() {
  const votingMethods = [
    {
      icon: FiCheck,
      title: "Vote YES/NO",
      subtitle: "Support or oppose proposals",
      description: "Simple YES/NO voting on all DAO and treasury decisions",
      color: "text-[#3D2A78]",
      bgColor: "bg-[#3D2A78]/10",
    },
    {
      icon: FaFire,
      title: "Burn for 5x Power",
      subtitle: "Maximum voting influence",
      description: "Permanently burn ID tokens for 5x voting weight",
      color: "text-[#E91E63]",
      bgColor: "bg-orange-400/10",
    },
    {
      icon: FiShoppingCart,
      title: "Buy with AVAX for 2x",
      subtitle: "Purchase ID tokens with AVAX",
      description: "Buy ID at market rate and lock for 2x voting weight",
      color: "text-[#3D2A78]",
      bgColor: "bg-[#3D2A78]/10",
    },
    {
      icon: FiLock,
      title: "Lock for 1x Power",
      subtitle: "Basic voting participation",
      description: "Lock tokens until voting ends for 1x weight",
      color: "text-[#E91E63]",
      bgColor: "bg-orange-400/10",
    },
  ]

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#E91E63] to-red-500 rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-8 h-8 bg-zinc-900 rounded-sm transform -rotate-45"></div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            DAO Governance & Treasury Management
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-lg sm:text-xl max-w-4xl mx-auto mb-8">
            Vote on community proposals and treasury allocation decisions with weighted voting power
          </p>

          {/* How It Works Button */}
          <button className="inline-flex items-center space-x-2 bg-[#E91E63] hover:bg-[#FF4081] text-white px-6 py-3 rounded-lg font-medium transition-colors">
            <FiInfo className="w-4 h-4" />
            <span>HOW IT WORKS</span>
          </button>
        </div>

        {/* Voting Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {votingMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div
                key={index}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${method.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold mb-2">{method.title}</h3>

                {/* Subtitle */}
                <p className="text-[#E91E63] text-sm font-medium mb-3">{method.subtitle}</p>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">{method.description}</p>
              </div>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center py-16 border-t border-zinc-800">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
              <span className="text-3xl">🚀</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Coming Soon</h2>

            <p className="text-zinc-400 text-lg mb-8">
              Advanced governance features and proposal creation tools are currently in development. Stay tuned for
              updates on enhanced voting mechanisms and community-driven decision making.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200">
                Get Notified
              </button>
              <button className="border border-zinc-600 hover:border-zinc-500 text-zinc-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>

            {/* Feature Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                <div className="text-purple-400 text-2xl mb-2">📊</div>
                <h4 className="text-white font-medium mb-1">Analytics Dashboard</h4>
                <p className="text-zinc-400 text-sm">Real-time voting statistics and governance metrics</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                <div className="text-pink-400 text-2xl mb-2">✍️</div>
                <h4 className="text-white font-medium mb-1">Proposal Creation</h4>
                <p className="text-zinc-400 text-sm">Submit and manage community proposals easily</p>
              </div>

              <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4">
                <div className="text-blue-400 text-2xl mb-2">🔔</div>
                <h4 className="text-white font-medium mb-1">Smart Notifications</h4>
                <p className="text-zinc-400 text-sm">Get alerts for new proposals and voting deadlines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
