import Header from "../components/Header"
import VotingPage from "./VotingPage"


export const metadata = {
  title: "Voting || Moon Bag",
  description: "Moon Bag Treasury",
};

const page = () => {
  return (
    <div>
      <Header />
      <VotingPage />
    </div>
  )
}

export default page