import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SiteRuntime from "@/components/SiteRuntime";
import Hero from "@/components/sections/Hero";
import SuiOverview from "@/components/sections/SuiOverview";
import DesignShowcase from "@/components/sections/DesignShowcase";
import MobileDesign from "@/components/sections/MobileDesign";
import HardwareDetails from "@/components/sections/HardwareDetails";
import Security from "@/components/sections/Security";
import MobileSecurity from "@/components/sections/MobileSecurity";
import Features from "@/components/sections/Features";
import Bitcoin from "@/components/sections/Bitcoin";
import MobileBitcoin from "@/components/sections/MobileBitcoin";
import SectionSpacer from "@/components/sections/SectionSpacer";
import Wearable from "@/components/sections/Wearable";
import NftCompanion from "@/components/sections/NftCompanion";
import Preorder from "@/components/sections/Preorder";
export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        <Navigation />
        <main className="main-wrapper">
          <Hero />
          <SuiOverview />
          <DesignShowcase />
          <MobileDesign />
          <HardwareDetails />
          <Security />
          <MobileSecurity />
          <Features />
          <Bitcoin />
          <MobileBitcoin />
          <SectionSpacer />
          <Wearable />
          <NftCompanion />
          <Preorder />
        </main>
        <Footer />
      </div>
      <SiteRuntime />
    </>
  );
}
