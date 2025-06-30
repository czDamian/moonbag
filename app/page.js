
import SendToTreasury from "./components/SendToTreasury";
import TokenHoldings from "./components/TokenHoldings";
import TreasuryHero from "./components/TreasuryHero";

export default function Home() {
  return (
    <>
      <TreasuryHero />
      <TokenHoldings />
      <SendToTreasury />
    </>
  );
}
