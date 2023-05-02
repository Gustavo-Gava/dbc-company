import Image from "next/image";

export const GlassdoorSlide = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-slate-50 lg:flex-row">
      <div className="flex w-full flex-1 flex-row flex-col items-center justify-center p-4">
        <h3 className="font-semibold text-primary">Um momento, por favor...</h3>

        <p>
          Gostaria de interromper minha apresentação para parabenizar a empresa
          pelas ótimas avaliações e respostas no Glassdoor.
        </p>

        <p className="font-semibold text-primary">Awesome!!</p>
      </div>

      <div className="flex flex-1">
        <Image
          src="/datum_glassdoor_laptop.png"
          alt="datum"
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};
