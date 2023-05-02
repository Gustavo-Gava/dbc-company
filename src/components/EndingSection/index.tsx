import Image from "next/image";

export const EndingSection = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4 lg:flex-row lg:p-12">
      <div className="">
        <p className="font-semibold text-primary">
          Espero que você que tenha gostado do meu currículo!
        </p>

        <p>
          Caso não for o candidato ideal para a Datum, espero que tenha sido uma
          experiência diferente e agradável para você!
        </p>

        <div>
          E claro, estou totalmente a disposição para conversar e demonstrar o
          que posso acrescentar na empresa.
        </div>

        <div>
          <p>Meus contatos:</p>

          <ul>
            <li>
              <a
                className="underline"
                href="mailto:gustavogavadev@gmail.com"
                target="_blank"
              >
                gustavogavadev@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gustavo-gava/"
                target="_blank"
                className="underline"
              >
                gustavo-gava
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex h-full items-center justify-center">
        <Image
          src="/firework.svg"
          alt="firework"
          width={1920}
          height={1080}
          className="h-auto w-full"
        />
      </div>
    </div>
  );
};
