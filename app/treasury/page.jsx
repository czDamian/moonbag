import SendToTreasury from "../components/SendToTreasury";
import TokenHoldings from "../components/TokenHoldings";
import TreasuryHero from "../components/TreasuryHero";

export const metadata = {
  title: "Treasury || Moon Bag",
  description: "Where Integrity Meets Community",
};

export default function Treasury() {
  return (
    <div>
        <TreasuryHero />
        <TokenHoldings />
        <SendToTreasury />
    </div>
  );
}
