import Image from "next/image";
import { SlideWrapper } from "../ui/SlideWrapper";

export const GlassdoorSlide = () => {
  return (
    <SlideWrapper>
      <div className="flex w-full flex-1 flex-col items-center justify-center p-4 text-sm lg:text-base">
        <h3 className="text-lg font-semibold text-primary lg:text-xl">
          Um momento, por favor...
        </h3>

        <p>
          Gostaria de interromper minha apresentação para parabenizar a empresa
          pelas ótimas avaliações e respostas no Glassdoor.
        </p>

        <p className="font-semibold text-primary">Awesome!!</p>
      </div>

      <div className="flex lg:flex-1">
        <Image
          src="/glassdoor.png"
          alt="RD Station"
          width={1920}
          height={1080}
          className="object-fit h-auto w-full"
        />
      </div>
    </SlideWrapper>
  );
};
