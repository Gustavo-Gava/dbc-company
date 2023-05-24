import { TextHighlighted } from "../TextHighlighted";
import { SlideWrapper } from "../ui/SlideWrapper";

import Image from "next/image";

export const ContributionSlide = () => {
  return (
    <SlideWrapper>
      <div className="order-2 flex flex-1 flex-col text-left text-sm lg:text-center lg:text-base">
        <TextHighlighted className="text-lg lg:text-xl">
          Como posso contribuir com a 77Sol?
        </TextHighlighted>

        <div>
          <p>
            Tenho conhecimento consolidado em desenvolvimento web com React,
            criando e integrando apis e seguindo boas práticas de
            desenvolvimento.
          </p>

          <p>
            Acredito que posso agregar muito nesse estilo de trabalho da 77Sol,
            pois sou muito proativo e possuo fácil adaptabilidade em diversas
            situações, tendo em vista que já foi exigido de mim na minha
            experiência profissional. Com isso, acredito que posso contribuir e
            muito com a criação e consolidação de processos, e de entregas com
            ênfase em qualidade.
          </p>
        </div>
      </div>

      <div className="flex flex-1">
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
