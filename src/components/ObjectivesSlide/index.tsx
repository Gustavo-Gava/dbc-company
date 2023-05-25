import Image from "next/image";
import { SlideWrapper } from "../ui/SlideWrapper";

interface ObjectivesSlideProps {
  paragraphs: string[];
}

export const ObjectivesSlide = ({ paragraphs }: ObjectivesSlideProps) => {
  return (
    <SlideWrapper>
      <div className="flex flex-1">
        <Image src="./goals.svg" width={1920} height={1080} alt="goals" />
      </div>

      <div className="flex flex-1 flex-col text-left">
        <h3 className="font-semibold text-primary lg:text-xl">
          Quais são meus objetivos?
        </h3>

        <div className="text-sm lg:text-base">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </SlideWrapper>
  );
};
