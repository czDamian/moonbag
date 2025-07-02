"use client"

import { motion } from "framer-motion"

export default function WhitePaper() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  // Section data
  const sections = [
    {
      key: "intro",
      title: "📌 1. Introduction",
      content: (
        <p className="text-zinc-300 mb-2">
          MoonBag is not just a memecoin — it’s a meme-powered, community-driven decentralized treasury protocol that evolves into a smart DeFi AI fund.
        </p>
      ),
    },
    {
      key: "vision",
      title: "🌕 2. Vision & Mission",
      content: (
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Democratize fund management through memes and AI.</li>
          <li>Empower communities to govern treasury allocations transparently.</li>
          <li>Create a DeFi-native fund with intelligent, AI-assisted strategies.</li>
        </ul>
      ),
    },
    {
      key: "treasury",
      title: "💰 3. Treasury Fund – Phase 1",
      content: (
        <>
          <ul className="list-disc list-inside text-zinc-300 space-y-1 mb-2">
            <li>Transparent Fund: Live dashboard showing on-chain wallet assets (~$x.xxxM).</li>
            <li>DAO Voting: Community votes on fund usage.</li>
          </ul>
          <div className="mb-2">
            <span className="font-semibold text-zinc-200">Revenue Flow:</span>
            <span className="text-zinc-300"> Yield → Treasury → Buyback or Reward</span>
          </div>
          <div>
            <span className="font-semibold text-zinc-200">Use Cases:</span>
            <ul className="list-disc list-inside text-zinc-300 ml-5 space-y-1">
              <li>Marketing</li>
              <li>LP incentives</li>
              <li>Strategic partnerships</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      key: "vaults",
      title: "🔄 4. Community Vaults – Phase 2",
      content: (
        <>
          <div className="mb-2">
            <span className="font-semibold text-zinc-200">Multi-Strategy Vaults:</span>
            <ul className="list-disc list-inside text-zinc-300 ml-5 space-y-1">
              <li>LP farming</li>
              <li>Lending</li>
              <li>Diversified memecoin exposure</li>
            </ul>
          </div>
          <ul className="list-disc list-inside text-zinc-300 space-y-1">
            <li>Stake-to-Earn: Users stake $MOONBAG to join vaults.</li>
            <li>Buyback Loop: Profit from vaults buy back $MOONBAG.</li>
          </ul>
        </>
      ),
    },
    {
      key: "ai",
      title: "🤖 5. DeFi AI Fund – Phase 3",
      content: (
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>
            <span className="font-semibold text-zinc-200">AI Allocation Engine:</span> Monitors on-chain and social data. Suggests optimal allocations (trending memecoins, TVL trends).
          </li>
          <li>
            <span className="font-semibold text-zinc-200">Sentiment Analysis:</span> AI scans X/Twitter, Telegram, Discord, Reddit for meme trends.
          </li>
          <li>
            <span className="font-semibold text-zinc-200">Risk Engine:</span> Detects volatility, liquidity traps, depegging risks.
          </li>
        </ul>
      ),
    },
    {
      key: "eco",
      title: "🌐 6. Ecosystem Expansion – Phase 4",
      content: (
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>MoonBag DEX: Meme token DEX with trending metrics.</li>
          <li>MoonStarter: Launchpad for meme projects funded by MoonBag.</li>
          <li>MemeBot Lab: AI-generated meme ideas & templates.</li>
          <li>NFT Utilities: Meme avatars with boosted voting power or vault yield.</li>
        </ul>
      ),
    },
    {
      key: "utility",
      title: "🪙 7. Token Utility ($MOONBAG)",
      content: (
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>DAO Governance</li>
          <li>Staking Rewards</li>
          <li>Fee Reduction</li>
          <li>Whitelist for Launchpad</li>
          <li>Revenue Sharing</li>
          <li>Burn Mechanism + Buyback Loop</li>
        </ul>
      ),
    },
    {
      key: "security",
      title: "🔒 8. Security & Transparency",
      content: (
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Multi-sig wallet for treasury</li>
          <li>Public audits</li>
          <li>On-chain DAO votes</li>
          <li>Live fund explorer</li>
        </ul>
      ),
    },
    {
      key: "roadmap",
      title: "🔭 9. Roadmap (2025+)",
      content: (
        <ul className="list-disc list-inside text-zinc-300 space-y-1">
          <li>Q3 2025 – Community DAO launch, transparent fund explorer</li>
          <li>Q4 2025 – Multi-vault fund activated, sentiment AI prototype</li>
          <li>Q1 2026 – Full DeFi AI integration, launch of MoonDEX</li>
          <li>Q2 2026 – Launchpad + NFT utility system</li>
          <li>Q3+ – Scaling to multi-chain ecosystem</li>
        </ul>
      ),
    },
  ];

  return (
    <div className="py-16 my-16 lg:my-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0.7, rotate: 0 }}
              animate={{ scale: 1, rotate: 45 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              className="w-16 h-16 bg-gradient-to-br from-[#3D2A78] to-[#4A3085] rounded-lg flex items-center justify-center transform"
            >
              <div className="w-8 h-8 bg-zinc-900 rounded-sm transform -rotate-45"></div>
            </motion.div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            MoonBag Whitepaper <span className="text-[#FE66F7]">v1.0</span>
          </h1>
          <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
            Where Integrity Meets Community.
          </p>
        </motion.div>

        {/* Animated Sections */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <motion.section
              key={section.key}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={idx}
              className="bg-zinc-900/60 border border-zinc-700 rounded-lg p-6"
            >
              <h2 className="text-xl font-semibold text-white mb-2">{section.title}</h2>
              {section.content}
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}