import HeroImage from "@/components/HeroImage";
import WeddingInfo from "@/components/WeddingInfo";
import Palacete from "@/components/Palacete";
import WeddingPlan from "@/components/WeddingPlan";
import Foto from "@/components/Foto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="">
        <HeroImage/>
        <WeddingInfo lang='hz'/>
        <Palacete/>
        <WeddingPlan lang='hz'/>
        <Foto />
        <Footer lang='hz'/>
    </main>
  );
}
