import Image from "next/image";

export const ExperienceSlide = () => {
  return (
    <div className="flex h-full items-center justify-center px-8">
      <div className="flex flex-1 flex-col items-center justify-center p-12">
        <Image
          src="/work_experience.svg"
          width={1920}
          height={1080}
          alt="experience"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 text-left">
        <h2 className="text-2xl font-semibold text-primary">
          Minha experiência
        </h2>
        <div>
          <h3 className="text-xl">
            Codeby{" "}
            <span className="font-semibold text-primary">
              @Desenvolvedor React
            </span>
          </h3>
          <span className="text-xs">Junho 2022 - Maio 2023</span>

          <ul className="text-base">
            <li>
              Desenvolvimento web de e-commerces nacionais e internacionais em
              react e nextjs
            </li>
            <li>
              Desenvolvimento de componentes padronizados e reutilizáveis e
              criação de fluxos de tarefas.
            </li>
            <li>
              Revisão de código para garantia de padrão, suporte para
              desenvolvedores juniors e participação em tomadas de decisões
              técnicas.
            </li>
          </ul>
        </div>

        <div>
          <h3>
            Arkos Digital{" "}
            <span className="font-semibold text-primary">
              @Desenvolvedor React e React Native
            </span>
          </h3>
          <span className="text-xs">Setembro 2022 - Junho 2022</span>

          <ul className="text-base">
            <li>
              Desenvolvimento de aplicativos mobile com React Native, sendo
              responsável desde a configuração do ambiente de desenvolvimento,
              até a postagem do aplicativo para as stores
            </li>
            <li>
              Desenvolvimento de sites com React e Next.js, sendo responsável
              pela criação e deploy de websites.
            </li>
            <li>
              Desenvolvimento do backend com Node.js e Nest.js, sendo
              responsável pela criação e implementação de features.
            </li>
            <li>
              Comunicação e explicação de features do projeto diretamente com o
              cliente e internamente.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
