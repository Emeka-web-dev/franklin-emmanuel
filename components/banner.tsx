import { Button } from "./ui/button";

export const Banner = () => {
  return (
    <div className="relative w-full h-[38rem] bg-black/60">
      <div
        className="absolute inset-x-0 w-full h-full bg-cover opacity-90 bg-center z-[-1]"
        style={{
          backgroundImage: `url("/franklin-image1.png")`,
        }}
      />
      <div className="w-full h-full flex flex-col items-center gap-y-2 px-3 justify-center text-white text-center">
        <h2 className="font-semibold text-3xl md:text-5xl mx-auto max-w-3xl">
          Ready To Master How To Setup A 7- Figure Online Business From Scratch?
        </h2>
        <p className="mx-auto max-w-3xl">
          Hi I’m Franklin Emmanuel, I will coach you on how to build a
          successful 7-Figure Online Business even if you are a complete novice.
          So you can ditch your 9-5 and live the life you really want😉
        </p>
        <Button className="text-lg font-semibold text-white bg-red-800 hover:bg-white hover:text-red-800 border-red-800 border-2 mt-14">
          Let&apos;s Get Cracking
        </Button>
      </div>
    </div>
  );
};
