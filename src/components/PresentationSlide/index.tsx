import { TextHighlighted } from "../TextHighlighted";
import { ScrollDownMouseAnimated } from "../ScrollDownMouseAnimated";

import Image from "next/image";
import { SlideWrapper } from "../ui/SlideWrapper";
import { ThemeSelect } from "../ui/ThemeSelect";

export const PresentationSlide = () => {
  return (
    <SlideWrapper>
      <div className="relative flex flex-1 flex-col justify-center gap-2 p-4 lg:gap-4 lg:p-12">
        <header className="fixed left-0 right-0 top-0 m-auto max-w-[1400px]">
          <div className="m-auto flex max-w-full items-center justify-between p-4">
            <h3></h3>

            <ThemeSelect />
          </div>
        </header>

        <h3 className="font-semibold text-primary">Olá, RDoers!</h3>

        <p>
          Me chamo Gustavo Gava, sou{" "}
          <TextHighlighted>desenvolvedor Front-end React</TextHighlighted> e
          decidi demonstrar meu potencial e criar esse currículo personalizado
          para a vaga de Desenvolvedor Javascript Pleno na RD Station
        </p>

        <p className="mb-4">
          Abaixo você pode ver um pouco do meu trabalho e também os motivos que
          me levaram a me interessar pela vaga.
        </p>

        <ScrollDownMouseAnimated />
      </div>

      <div className="flex flex-1 flex-col justify-center p-4">
        <Image
          src="/developer_hello.svg"
          alt="developer"
          width={1920}
          height={1080}
        />
      </div>
    </SlideWrapper>
  );
};
