import Image from "next/image";
import FramerContainer from "./framer-container";

export const AboutUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-3 py-8 flex lg:flex-row flex-col items-center justify-center gap-y-6 lg:space-x-8">
      <div className="flex flex-col gap-y-6">
        <h3 className="font-semibold text-3xl">Not Just A ME Thing 😬</h3>
        <p>
          So I wanted to Ignore this section but seems like everyone is doing an
          about so I will write mine too.. If you’d be one of US**” Making money
          online is easy but you need 2 basic thing – The right Information so
          you don’t miss road – A Guide to help you navigate faster. So you see
          it’s not hard afterall. But it requires WORK. I’m happy to guide you
          after that.
        </p>
        <p>
          That picture right there wasn’t meant to be there, still wondering why
          I put it actually. Anyway it’s an after picture of ME feeling bossy in
          them suit and acting so professional “**I am a professional actually
          👨‍🏫**”
        </p>
        <p>
          I have walked all around the internet space for 5years now🌐 “**Trust
          me, I’m a bag of brains yet to be fully unleashed**”, Not wandering
          but with FOCUS and DETERMINATION to make the most out of the simple
          tools and strategies I can use. I MASTERED THE GAME I have
          successfully done this for myself and helped 10,000 more “**seems like
          a whole lot but I want to do more,
        </p>
      </div>
      <FramerContainer
        initial={{
          y: 200,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative flex-shrink-0 w-[30rem] h-[36rem] lg:mt-10"
      >
        <Image
          src="/franklin-image1.png"
          alt="about image"
          fill
          className="object-cover"
        />
      </FramerContainer>
    </div>
  );
};
