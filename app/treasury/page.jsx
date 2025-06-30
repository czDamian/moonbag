import Footer from "../components/Footer";
import Header from "../components/Header";
import SendToTreasury from "../components/SendToTreasury";
import TokenHoldings from "../components/TokenHoldings";
import TreasuryHero from "../components/TreasuryHero";



export const metadata = {
  title: "Treasury || Moon Bag",
  description: "Moon Bag Treasury",
};

export default function Treasury() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="px-12 md:px-16 font-(family-name:--font-roboto)">
        <TreasuryHero />
        <TokenHoldings />
        <SendToTreasury />
      </div>
      <Footer />
    </div>
  );
}
