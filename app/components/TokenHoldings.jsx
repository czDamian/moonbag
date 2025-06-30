"use client"

import { useState, useEffect } from "react"
import { FiSearch, FiChevronLeft, FiChevronRight, FiLock, FiCopy } from "react-icons/fi"
import { FaComments } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { IoMdSend } from "react-icons/io";

export default function TokenHoldings() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("ALL TOKENS")
  const [tokens, setTokens] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [totalTokens, setTotalTokens] = useState(0)
  const [loading, setLoading] = useState(false)
  const [copiedIdx, setCopiedIdx] = useState(null)

  // Add this state for toggling the featured background
  const [featuredBgToggle, setFeaturedBgToggle] = useState(false);

  const filters = [
    { label: "ALL TOKENS", icon: null },
    { label: "BONDED", icon: FiLock },
    { label: "UNBONDED", icon: FiLock },
    { label: "COMMENTS", icon: FaComments },
  ]

  const itemsPerPage = 10

  useEffect(() => {
    setLoading(true)
    fetch(`/api/tokens?page=${currentPage}`)
      .then(res => res.json())
      .then(data => {
        setTokens(data.tokens || [])
        setTotalPages(data.totalPages || 1)
        setTotalTokens(data.total || 0)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [currentPage])

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedBgToggle((prev) => !prev);
    }, 2500); // 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  const getSocialIcon = (social, url) => {
    switch (social) {
      case "reddit":
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <IoMdSend className="w-4 h-4 text-[#FE66F7] hover:text-[#FE66F7]" />
          </a>
        );
      case "twitter":
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="w-4 h-4 text-blue-500 hover:text-blue-500" />
          </a>
        );
      case "globe":
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <CiGlobe className="w-4 h-4 text-[#FE66F7] hover:text-[#FE66F7]" />
          </a>
        );
      default:
        return null
    }
  }

  const handleCopy = (address, idx) => {
    navigator.clipboard.writeText(address);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1200);
  };

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
    let startPage = Math.max(1, currentPage - 1)
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }
    for (let i = startPage; i <= endPage; i++) {
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
    if (endPage < totalPages) {
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

  // Filter and search tokens (client-side)
  const filteredTokens = tokens.filter(token => {
    const search = searchTerm.toLowerCase();
    return (
      token.name?.toLowerCase().includes(search) ||
      token.symbol?.toLowerCase().includes(search)
    );
  });

  // Helper to render socials
  const renderSocials = (links = {}) => {
    const socials = []
    if (links.twitter) socials.push(getSocialIcon("twitter", links.twitter))
    if (links.reddit) socials.push(getSocialIcon("reddit", links.reddit))
    if (links.website) socials.push(getSocialIcon("globe", links.website))
    if (links.globe) socials.push(getSocialIcon("globe", links.globe))
    return (
      <span className="flex items-center gap-2 ml-2">
        {socials}
      </span>
    )
  }

  return (
    <div className="bg-[#1a1a1a] border border-[#121212] rounded-lg p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-3">
          <h2 className="text-white text-2xl font-bold">Token Holdings</h2>
          <span className="text-[#FE66F7] text-sm font-medium">{totalTokens} tokens</span>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#121212] border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FE66F7] w-full md:w-64"
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
                ? "bg-[#FE66F7] text-white"
                : "bg-[#121212] text-gray-300 hover:bg-gray-600"
                }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{filter.label}</span>
            </button>
          )
        })}
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center text-gray-400 py-8">Loading tokens...</div>
      )}

      {/* Desktop Table */}
      {!loading && (
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#121212]">
                <th className="text-left text-gray-400 font-medium py-3">Asset</th>
                <th className="text-right text-gray-400 font-medium py-3">Price (USD)</th>
                <th className="text-right text-gray-400 font-medium py-3">Liquidity</th>
                <th className="text-right text-gray-400 font-medium py-3">FDV</th>
              </tr>
            </thead>
            <tbody>
              {filteredTokens.slice(0, itemsPerPage).map((token, idx) => (
                <tr
                  key={token.contractAddress}
                  className={`text-sm border-b border-[#121212] hover:bg-[#121212]/50`}
                >
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={token.logo}
                        alt={token.name}
                        className="w-10 h-10 rounded-full bg-[#121212] object-cover"
                        onError={e => { e.target.src = "/usdc.png" }}
                      />
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-white font-medium">{token.name}</span>
                          <span className="text-gray-400 text-xs uppercase">({token.symbol})</span>
                          {renderSocials(token.links)}
                        </div>
                        <button
                          className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#FE66F7] mt-1"
                          onClick={() => handleCopy(token.contractAddress, idx)}
                          title="Copy address"
                        >
                          <FiCopy className="w-4 h-4" />
                          {copiedIdx === idx ? "Copied!" : " "}
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="text-right text-white py-4">${token.priceUsd ?? "-"}</td>
                  <td className="text-right text-white py-4">{token.liquidity ?? "-"}</td>
                  <td className="text-right text-white py-4">{token.fullyDilutedValuation ?? "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Mobile Cards */}
      {!loading && (
        <div className="md:hidden space-y-4">
          {filteredTokens.slice(0, itemsPerPage).map((token, idx) => (
            <div
              key={token.contractAddress}
              className="rounded-lg flex  justify-between items-center p-4 bg-[#121212]"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={token.logo}
                  alt={token.name}
                  className="w-10 h-10 rounded-full bg-[#121212] object-cover"
                  onError={e => { e.target.src = "/usdc.png" }}
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">{token.name}</span>
                    <span className="text-gray-400 text-xs uppercase">({token.symbol})</span>
                    {renderSocials(token.links)}
                  </div>
                  <button
                    className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#FE66F7] mt-1"
                    onClick={() => handleCopy(token.contractAddress, idx)}
                    title="Copy address"
                  >
                    <FiCopy className="w-4 h-4" />
                    {copiedIdx === idx ? "Copied!" : " "}
                  </button>
                </div>
              </div>
              <div className="text-xs">
                <div>
                  <span className="text-white">${token.priceUsd ?? "-"}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 mt-8">{renderPagination()}</div>
    </div>
  )
}
