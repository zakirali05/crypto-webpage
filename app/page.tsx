import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";

export default function Home() {

  return(
    <section className="flex flex-col gap-20">
      <Hero/>
      <Carousel/>
    </section>
  )
}
