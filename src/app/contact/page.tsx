import ContactSection from "@/components/Contact-Section";
import Faq from "@/components/Faq";
import HeadingLinkContact from "@/components/Heading-Link-Contact";
import LogoSlider from "@/components/Logo-Slider";

function Contact(){
    return(
        <div>
            <HeadingLinkContact/>
            <ContactSection/>
            <Faq/>
            <LogoSlider/>

        </div>
    )
}

export default Contact