import { TextHighlighted } from "../TextHighlighted";
import { ScrollDownMouseAnimated } from "../ScrollDownMouseAnimated";

import Image from "next/image";

export const PresentationSlide = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex flex-1 flex-col gap-4 p-12">
        <h3 className="font-semibold text-primary">Olá, Datunianos!</h3>

        <p>
          Me chamo Gustavo Gava, sou{" "}
          <TextHighlighted>desenvolvedor front-end React</TextHighlighted> e
          decidi ser <TextHighlighted>bold</TextHighlighted> e criar esse
          currículo personalizado para a vaga de Desenvolvedor React na Datum
          IT.
        </p>

        <p className="mb-4">
          Abaixo você pode ver um pouco do meu trabalho e também os motivos que
          me levaram a me interessar pela vaga.
        </p>

        <ScrollDownMouseAnimated />
      </div>

      <div className="flex flex-1 flex-col">
        <Image
          src="/developer_hello.svg"
          alt="developer"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};
