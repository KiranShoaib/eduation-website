import Link from "next/link"

function HeadingLinkContact() {
    return(
        <section className="heading-link py-[5rem] px-[10%] max-[1200px]:py-[3rem] max-[1200px]:px-[5%] max-[991px]:py-[3rem] max-[991px]:px-[2rem] text-center bg-[url('/headerbg.png')] bg-no-repeat bg-cover bg-center">
            <h3 className="text-[4rem] text-[#444] capitalize">contact us</h3>
            <p className="text-[2rem] leading-8 text-[#777]"><Link href={"/"} className="text-[#0eb582] hover:underline">home</Link> / contact</p>

        </section>
    )
}

export default HeadingLinkContact