import { TextHighlighted } from "../TextHighlighted";
import { ScrollDownMouseAnimated } from "../ScrollDownMouseAnimated";

import Image from "next/image";
import { SlideWrapper } from "../ui/SlideWrapper";
import { ThemeSelect } from "../ui/ThemeSelect";
import { useEnterprise } from "~/context/EnterpriseContext";

export const PresentationSlide = () => {
  const { enterpriseName } = useEnterprise();

  return (
    <SlideWrapper className="relative">
      <header className="fixed left-0 right-0 top-0 m-auto max-w-[1400px]">
        <div className="m-auto flex max-w-full items-center justify-between p-4">
          <ThemeSelect />
        </div>
      </header>

      <div className="relative order-3 flex flex-1 flex-col gap-2 p-4 text-sm lg:order-1 lg:gap-4 lg:p-12 lg:text-base">
        <h3 className="text-lg font-semibold text-primary lg:text-xl">
          Olá, Equipe da {enterpriseName}!
        </h3>

        <p>
          Me chamo Gustavo Gava, sou{" "}
          <TextHighlighted>
            Desenvolvedor Front-end React e React Native
          </TextHighlighted>{" "}
          e decidi demonstrar meu potencial e criar esse currículo personalizado
          para a vaga de Desenvolvedor Front-end na {enterpriseName}
        </p>

        <p className="mb-4">
          Abaixo você pode ver um pouco do meu trabalho e também os motivos que
          me levaram a me interessar pela vaga.
        </p>

        <ScrollDownMouseAnimated />
      </div>

      <div className="order-2 flex flex-col justify-center p-4">
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
