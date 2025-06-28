
import Footer from "./components/Footer";
import Header from "./components/Header";
import SendToTreasury from "./components/SendToTreasury";
import TokenHoldings from "./components/TokenHoldings";
import TreasuryHero from "./components/TreasuryHero";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-12 md:px-16 font-(family-name:--font-roboto)">
        <TreasuryHero />
        <TokenHoldings />
        <SendToTreasury />
      </div>
      <Footer />
    </div>
  );
}
