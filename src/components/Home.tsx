
import { Header } from "./Header"
import { Header2 } from "./Header2"
import { HeroSection } from "./HeroSection"
import { Last } from "./Last"
import { Middle } from "./Middle"
import { Navbar } from "./Navbar"
import { ResumeBuilderWalkthrough } from "./StepsFast"

export const Home = () => {

    return (
        <div>
            <Navbar />
            <HeroSection />
            <Middle />
            <ResumeBuilderWalkthrough />
            <Last />
            <Header2 />
            <Header />
        </div>
    )
}