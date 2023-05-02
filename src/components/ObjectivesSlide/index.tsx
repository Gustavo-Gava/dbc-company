import Image from "next/image";

export const ObjectivesSlide = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 lg:flex-row lg:px-12">
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
            posso atuar criando soluções tecnológicas.
          </p>

          <p>
            Acredito que isso se encaixe perfeitamente com os objetivos da
            Datum, que acumula uma estrutura e experiência de mercado enorme.
          </p>

          <p>
            Tendo isso em vista, acho que posso contribuir muito com a Datum
            criando soluções inovadoras através da proatividade com foco em
            melhorar o ambiente de trabalho e as entregas
          </p>
        </div>
      </div>
    </div>
  );
};
