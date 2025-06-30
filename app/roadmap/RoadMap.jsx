"use client";

import { FaPiggyBank, FaCoins, FaTicketAlt, FaUsers } from "react-icons/fa";
import { GiReceiveMoney, GiVote } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
import { SiSolana } from "react-icons/si";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaPiggyBank className="w-8 h-8 text-[#FE66F7]" />,
    title: "1. Raise Treasury Funds",
    desc: "To promote the token community, we are raising funds for the treasury. Deposit $MOONBAG tokens to the treasury to support the project.",
    details: [
      {
        icon: <MdGroups className="w-5 h-5" />,
        text: "Community group for transparency and collaboration.",
      },
      {
        icon: <SiSolana className="w-5 h-5" />,
        text: "With supply running low, treasury funds will enable expansion into staking, NFTs, and lotteries.",
      },
    ],
  },
  {
    icon: <FaCoins className="w-8 h-8 text-[#FE66F7]" />,
    title: "2. Staking",
    desc: "Staking provides benefits for partner projects. Anyone who sends partner project tokens or $MOONBAG to the treasury will receive an APY rate.",
    details: [
      {
        icon: <GiReceiveMoney className="w-5 h-5" />,
        text: "Earn rewards by supporting the treasury with $MOONBAG or other tokens.",
      },
    ],
  },
  {
    icon: <FaUsers className="w-8 h-8 text-[#FE66F7]" />,
    title: "3. NFT Rewards",
    desc: (
      <>
        A fixed total supply of{" "}
        <span className="text-[#FE66F7] font-bold">2,222 NFTs</span> will be
        minted for top holders who send project tokens or anything of value to the
        treasury.
      </>
    ),
    details: [
      {
        icon: <GiVote className="w-5 h-5" />,
        text: "NFT holders will receive rewards in project tokens or $MOONBAG, with the roadmap determined through community voting.",
      },
    ],
  },
  {
    icon: <FaTicketAlt className="w-8 h-8 text-[#FE66F7]" />,
    title: "4. Lottery",
    desc: (
      <>
        Holding{" "}
        <span className="text-[#FE66F7] font-bold">10,000 $MOONBAG</span> gives
        you 1 ticket. The more tokens you hold, the more tickets you get.
      </>
    ),
    details: [
      {
        icon: <FaTicketAlt className="w-5 h-5" />,
        text: "More tickets, more chances to win exclusive rewards!",
      },
    ],
    list: [
      "10,000 $MOONBAG = 1 ticket",
      "100,000 $MOONBAG = 10 tickets",
      "...and so on",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      type: "spring",
      stiffness: 60,
    },
  }),
};

export default function RoadMap() {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8"
        >
          <span className="text-white">Project</span>
          <span
            className="text-[#FE66F7] ml-3"
            style={{
              textShadow: "0 0 2px #FE66F7, 0 0 4px #FE66F7",
            }}
          >
            Roadmap
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-zinc-400 text-lg sm:text-xl text-center mb-16"
        >
          Our roadmap to grow the $MOONBAG community and reward our supporters.
        </motion.p>

        {/* Steps */}
        <div className="space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={containerVariants}
              className="bg-[#18181b] border border-[#383838] rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-5 mb-4">
                {step.icon}
                <h2 className="text-2xl sm:text-3xl font-semibold text-white">
                  {step.title}
                </h2>
              </div>
              <div className="mb-5">
                <p className="text-zinc-300 text-lg">{step.desc}</p>
              </div>
              {step.list && (
                <ul className="list-disc list-inside text-zinc-400 text-base mb-5 space-y-1 pl-2">
                  {step.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="space-y-2">
                {step.details.map((detail, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-base text-zinc-400"
                  >
                    {detail.icon}
                    <span>{detail.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}