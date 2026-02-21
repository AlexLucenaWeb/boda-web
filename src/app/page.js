import HeroImage from "@/components/HeroImage";
import WeddingInfo from "@/components/WeddingInfo";
import Palacete from "@/components/Palacete";
import WeddingPlan from "@/components/WeddingPlan";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
        <HeroImage/>
        <WeddingInfo/>
        <Palacete/>
        <WeddingPlan/>
        <Footer />
    </main>
  );
}
