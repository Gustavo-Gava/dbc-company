import { TextHighlighted } from "../TextHighlighted";
import { SlideWrapper } from "../ui/SlideWrapper";

import { useEnterprise } from "../../context/EnterpriseContext";

import Image from "next/image";

interface ContributionSlideProps {
  firstParagraph: string;
  secondParagraph: string;
}

export const ContributionSlide = ({
  firstParagraph,
  secondParagraph,
}: ContributionSlideProps) => {
  const { enterpriseName } = useEnterprise();

  return (
    <SlideWrapper>
      <div className="order-3 flex flex-1 flex-col text-left text-sm lg:order-1 lg:text-center lg:text-base">
        <TextHighlighted className="text-lg lg:text-xl">
          Como posso contribuir com a {enterpriseName}?
        </TextHighlighted>

        <div className="text-sm lg:text-base">
          <p>{firstParagraph}</p>

          <p>{secondParagraph}</p>
        </div>
      </div>

      <div className="order-2 flex flex-1">
        <Image
          src="/work_together.svg"
          alt="working colleagues"
          width={500}
          height={500}
          className="h-auto w-full"
        />
      </div>
    </SlideWrapper>
  );
};
