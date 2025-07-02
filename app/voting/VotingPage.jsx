"use client"

import { FiCheck, FiShoppingCart, FiLock, FiInfo } from "react-icons/fi"
import { FaFire } from "react-icons/fa"
import { FaBell } from "react-icons/fa6";
import { IoCreate } from "react-icons/io5";
import { DiGoogleAnalytics } from "react-icons/di";
import { motion } from "framer-motion";

export default function VotingPage() {
  const votingMethods = [
    {
      icon: FiCheck,
      title: "Vote YES/NO",
      subtitle: "Support or oppose proposals",
      description: "Simple YES/NO voting on all DAO and treasury decisions",
      color: "text-gray-300",
      bgColor: "bg-gray-300/10",
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
      title: "Buy with SOL for 2x",
      subtitle: "Purchase MOONBAG tokens with SOL",
      description: "Buy MOONBAG at market rate and lock for 2x voting weight",
      color: "text-gray-300",
      bgColor: "bg-gray-300/10",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.7, rotate: 0 }}
            animate={{ scale: 1, rotate: 45 }}
            transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#3D2A78] to-[#4A3085] rounded-lg flex items-center justify-center transform">
              <div className="w-8 h-8 bg-zinc-900 rounded-sm transform -rotate-45"></div>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            DAO Governance & Treasury Management
          </h1>

          {/* Subtitle */}
          <p className="text-zinc-400 text-lg sm:text-xl max-w-4xl mx-auto mb-8">
            Vote on community proposals and treasury allocation decisions with weighted voting power
          </p>

          {/* How It Works Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="inline-flex items-center space-x-2 bg-[#4A3085] hover:bg-[#3D2A78] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <FiInfo className="w-4 h-4" />
            <span>HOW IT WORKS</span>
          </motion.button>
        </motion.div>

        {/* Voting Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {votingMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
                className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${method.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-semibold mb-2">{method.title}</h3>

                {/* Subtitle */}
                <p className="text-zinc-300 text-sm font-medium mb-3">{method.subtitle}</p>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed">{method.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Coming Soon Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center py-16 border-t border-zinc-800"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Coming Soon</h2>

            <p className="text-zinc-400 text-lg mb-8">
              Advanced governance features and proposal creation tools are currently in development. Stay tuned for
              updates on enhanced voting mechanisms and community-driven decision making.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                Get Notified
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="border border-zinc-600 hover:border-zinc-500 text-zinc-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Learn More
              </motion.button>
            </div>

            {/* Feature Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4 lg:p-8"
              >
                <DiGoogleAnalytics className="inline text-center text-purple-400 text-3xl mb-2" />
                <h4 className="text-white font-medium mb-1 lg:text-xl lg:mb-2">Analytics Dashboard</h4>
                <p className="text-zinc-400 text-sm lg:text-base">Real-time voting statistics and governance metrics</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4"
              >
                <IoCreate className="inline text-center text-pink-400 text-3xl mb-2" />
                <h4 className="text-white font-medium mb-1 lg:text-xl lg:mb-2">Proposal Creation</h4>
                <p className="text-zinc-400 text-sm lg:text-base">Submit and manage community proposals easily</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-4"
              >
                <FaBell className="inline text-center text-blue-400 text-3xl mb-2" />
                <h4 className="text-white font-medium mb-1 lg:text-xl lg:mb-2">Smart Notifications</h4>
                <p className="text-zinc-400 text-sm lg:text-base">Get alerts for new proposals and voting deadlines</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
