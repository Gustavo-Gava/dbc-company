import { TextHighlighted } from "../TextHighlighted";
import { SlideWrapper } from "../ui/SlideWrapper";

import Image from "next/image";

export const ContributionSlide = () => {
  return (
    <SlideWrapper>
      <div className="order-2 flex flex-1 flex-col text-left text-sm lg:text-center lg:text-base">
        <TextHighlighted className="text-lg lg:text-xl">
          Como posso contribuir com a Ícaro Tech?
        </TextHighlighted>

        <div>
          <p>
            Já tive experiência com as tecnologias utilizadas na Ícaro Tech,
            como React, testes, documentação e suporte para outros
            desenvolvedores.
          </p>

          <p>
            Acredito que posso agregar muito nesse estilo de trabalho, pois
            tenho facilidade em me adaptar em diferentes projetos e tecnologias,
            então mesmo que não tenho tido experiência diretamente com alguma
            tecnologia, consigo aprender rapidamente com projetos existentes.
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
