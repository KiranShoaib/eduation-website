import AboutHero from "@/components/About-Hero";
import HeadingLinkAbout from "@/components/Heading-Link-About";
import Teachers from "@/components/Teachers";
import Reviews from "@/components/Reviews";

function About(){
    return(
        <div>
            <HeadingLinkAbout/>
            <AboutHero/>
            <Teachers/>
            <Reviews/>

        </div>
    )
}

export default About