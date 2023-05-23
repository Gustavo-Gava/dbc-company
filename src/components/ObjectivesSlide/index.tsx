import Image from "next/image";
import { SlideWrapper } from "../ui/SlideWrapper";

export const ObjectivesSlide = () => {
  return (
    <SlideWrapper>
      <div className="flex flex-1">
        <Image src="./goals.svg" width={1920} height={1080} alt="goals" />
      </div>

      <div className="flex flex-1 flex-col text-left">
        <h3 className="font-semibold text-primary">
          Quais são meus objetivos?
        </h3>

        <div className="text-sm lg:text-base">
          <p>
            Meu objetivo no mundo da tecnologia é trabalhar em um local onde
            posso atuar criando soluções tecnológicas enquanto aprecio o
            processo.
          </p>

          <p>
            Acredito que a Pitang é o local ideal para isso, pois é um local que
            terei a oportunidade de estar em contato com diversos clientes,
            solucionando problemas de diversas naturezas, e ainda assim, podendo
            trabalhar com tecnologias modernas e de ponta.
          </p>

          <p>
            Além disso, meu objetivo no dia a dia é crescer como profissional,
            sendo referência técnica na empresa e ajudando a equipe a crescer
            junto comigo.
          </p>
        </div>
      </div>
    </SlideWrapper>
  );
};
