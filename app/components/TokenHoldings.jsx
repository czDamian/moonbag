"use client"

import { useState, useEffect } from "react"
import { FiSearch, FiChevronLeft, FiChevronRight, FiLock } from "react-icons/fi"
import { FaReddit, FaGlobe, FaComments } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

export default function TokenHoldings() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("ALL TOKENS")

  // Add this state for toggling the featured background
  const [featuredBgToggle, setFeaturedBgToggle] = useState(false);

  const filters = [
    { label: "ALL TOKENS", icon: null },
    { label: "BONDED", icon: FiLock },
    { label: "UNBONDED", icon: FiLock },
    { label: "COMMENTS", icon: FaComments },
  ]

  const tokens = [
    {
      id: 1,
      name: "The MOOCH",
      ticker: "MOOCH",
      icon: "🌙",
      balance: "1,502,000,129.7148",
      price: "$0.00002",
      value: "$30,236.16",
      socials: ["reddit", "globe", "twitter"],
      locked: true,
      featured: true,
    },
    {
      id: 2,
      name: "LAMBO",
      ticker: "LAMBO",
      icon: "🏎️",
      balance: "500,005,390",
      price: "$0.003391",
      value: "$1,695,554.90",
      socials: ["reddit", "globe", "twitter"],
      locked: true,
    },
    {
      id: 3,
      name: "Integrity DAO",
      ticker: "ID",
      icon: "🦊",
      balance: "310,914,790.6039",
      price: "$0.000987",
      value: "$306,778.72",
      socials: ["twitter", "globe"],
      locked: true,
    },
    {
      id: 4,
      name: "WOLFI",
      ticker: "WOLFI",
      icon: "🐺",
      balance: "300,000,000",
      price: "$0.00064",
      value: "$192,091.37",
      socials: ["reddit", "globe", "twitter"],
      locked: true,
    },
    {
      id: 5,
      name: "MEOW",
      ticker: "MEOW",
      icon: "😺",
      balance: "352,623,915.721",
      price: "$0.000493",
      value: "$173,702.02",
      socials: ["reddit", "twitter"],
      locked: true,
    },
    {
      id: 6,
      name: "BABY JUBJUB",
      ticker: "BJUB",
      icon: "👶",
      balance: "500,000,000",
      price: "$0.000248",
      value: "$123,784.45",
      socials: ["reddit", "twitter"],
      locked: true,
    },
    {
      id: 7,
      name: "Emini Spaghettini",
      ticker: "EMINI",
      icon: "🍝",
      balance: "750,001,114.3627",
      price: "$0.000111",
      value: "$83,222.29",
      socials: ["twitter"],
      locked: true,
    },
  ]

  const totalPages = 32
  const itemsPerPage = 10

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedBgToggle((prev) => !prev);
    }, 2500); // 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const getSocialIcon = (social) => {
    switch (social) {
      case "reddit":
        return <FaReddit className="w-4 h-4 text-[#FF4081] hover:text-[#FF4081]" />
      case "twitter":
        return <FaXTwitter className="w-4 h-4 text-[#1DA1F2] hover:text-[#1A91DA]" />
      case "globe":
        return <FaGlobe className="w-4 h-4 text-gray-400 hover:text-gray-300" />
      default:
        return null
    }
  }

  const renderPagination = () => {
    const pages = []
    const maxVisiblePages = 3

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronLeft className="w-4 h-4" />
      </button>,
    )

    // Page numbers
    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-4 py-2 rounded-full ${currentPage === i ? "bg-[#121212] rounded-full text-white" : "text-gray-400 hover:text-white hover:bg-zinc-800"
            }`}
        >
          {i}
        </button>,
      )
    }

    // Ellipsis and last page
    if (totalPages > maxVisiblePages) {
      pages.push(
        <span key="ellipsis" className="px-3 py-2 text-gray-400">
          ...
        </span>,
      )
      pages.push(
        <button
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className={`px-3 py-2 rounded-full ${currentPage === totalPages ? "bg-[#121212] text-white" : "text-gray-400 hover:text-white hover:bg-zinc-800"
            }`}
        >
          {totalPages}
        </button>,
      )
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FiChevronRight className="w-4 h-4" />
      </button>,
    )

    return pages
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#121212] rounded-lg p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <h2 className="text-white text-2xl font-bold">Token Holdings</h2>
          <span className="text-[#FF4081] text-sm font-medium">1564 tokens</span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#121212] border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF4081] w-full md:w-64"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => {
          const Icon = filter.icon
          return (
            <button
              key={filter.label}
              onClick={() => setActiveFilter(filter.label)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeFilter === filter.label
                ? "bg-[#FF4081] text-white"
                : "bg-[#121212] text-gray-300 hover:bg-gray-600"
                }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{filter.label}</span>
            </button>
          )
        })}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#121212]">
              <th className="text-left text-gray-400 font-medium py-3">Asset</th>
              <th className="text-right text-gray-400 font-medium py-3">Balance</th>
              <th className="text-right text-gray-400 font-medium py-3">Price</th>
              <th className="text-right text-gray-400 font-medium py-3">Value</th>
            </tr>
          </thead>
          <tbody>
            {tokens.map((token) => {
              
              return (
                <tr
                  key={token.id}
                  className={`text-sm border-b border-[#121212] hover:bg-[#121212]/50`}
                >
                  <td className="py-4 ">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-[#121212] rounded-full flex items-center justify-center text-lg">
                          {token.icon}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-white font-medium">{token.name}</span>
                            {token.locked && <FiLock className="w-3 h-3 text-yellow-500" />}
                          </div>
                          <span className="text-gray-400 text-sm">{token.ticker}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 ml-4">
                        {token.socials.map((social, index) => (
                          <button key={index} className="hover:scale-110 transition-transform">
                            {getSocialIcon(social)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </td>
                  <td className="text-right text-white py-4">{token.balance}</td>
                  <td className="text-right text-white py-4">{token.price}</td>
                  <td className="text-right text-green-400 font-medium py-4">{token.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {tokens.map((token) => (
          <div
            key={token.id}
            className={`rounded-lg p-4 ${
              token.featured
                ? featuredBgToggle
                  ? "bg-pink-900/40 border-l-4 border-pink-700"
                : "bg-[#4A3085]/50 border-l-4 border-[#4A3085]"
                : "bg-[#121212]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg">
                  {token.icon}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">{token.name}</span>
                    {token.locked && <FiLock className="w-3 h-3 text-yellow-500" />}
                  </div>
                  <span className="text-gray-400 text-sm">{token.ticker}</span>
                </div>
              </div>
              <span className="text-green-400 font-medium">{token.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 mt-8">{renderPagination()}</div>
    </div>
  )
}
