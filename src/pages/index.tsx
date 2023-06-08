import { type NextPage } from "next";
import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import { PresentationSlide } from "~/components/PresentationSlide";
import { GlassdoorSlide } from "~/components/GlassdoorSlide";
import { ObjectivesSlide } from "~/components/ObjectivesSlide";
import { EndingSection } from "~/components/EndingSection";
import { ExperienceSlide } from "~/components/ExperienceSlide";
import { ContributionSlide } from "~/components/ContributionSlide";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEnterprise } from "~/context/EnterpriseContext";

const objectivesSlideData = [
  "Meu objetivo no mundo da tecnologia é trabalhar em um local onde posso atuar criando soluções tecnológicas enquanto aprecio o processo.",
  "Acredito que consigo ter uma performance maior quando estou em um ambiente com um propósito claro como a DBC Company de ajudar diversos clientes com soluções tecnológicas para seus problemas.",
  "Além disso, meu objetivo no dia a dia é crescer como profissional, sendo referência técnica na empresa e ajudando a equipe a crescer junto comigo.",
];

const Home: NextPage = () => {
  const { enterpriseName } = useEnterprise();

  const contributionSlideData = {
    firstParagraph:
      "Tenho conhecimento consolidado em desenvolvimento web com React Native com Typescript, sendo capaz de criar aplicações com código limpo, escrever testes e criar componentes reutilizáveis e escaláveis.",
    secondParagraph: `Acredito que posso agregar muito valor para a ${enterpriseName}, pois consigo me adaptar facilmente a novos ambientes, característica importante para trabalhar no desenvolvimento de vários produtos ao longo do tempo.`,
  };

  return (
    <>
      <Head>
        <title>{enterpriseName} | Gustavo Gava</title>
        <meta name="description" content="Generated by create-t3-app" />
      </Head>
      <main className="relative h-screen max-h-screen overflow-hidden bg-slate-800">
        <Swiper
          direction="vertical"
          pagination={{
            type: "progressbar",
          }}
          draggable={false}
          preventClicks={false}
          modules={[Mousewheel, Pagination]}
          mousewheel
        >
          <SwiperSlide>
            <PresentationSlide />
          </SwiperSlide>

          <SwiperSlide>
            <ExperienceSlide />
          </SwiperSlide>

          <SwiperSlide>
            <GlassdoorSlide />
          </SwiperSlide>

          <SwiperSlide>
            <ObjectivesSlide paragraphs={objectivesSlideData} />
          </SwiperSlide>

          <SwiperSlide>
            <ContributionSlide {...contributionSlideData} />
          </SwiperSlide>

          <SwiperSlide>
            <EndingSection />
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
};

export default Home;
