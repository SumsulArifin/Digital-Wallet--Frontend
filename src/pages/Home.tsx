import { HeroSection } from "@/components/modules/HomePages/HeroSection"
import { PricingSection } from "@/components/modules/HomePages/PricingSectuion"

function HomePage() {
    return (
        <>
            <div className="m-10">
                <HeroSection />
                <br />

                <PricingSection />
            </div>
        </>

    )
}

export default HomePage
