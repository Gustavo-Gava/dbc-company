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

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>RD | Gustavo Gava</title>
        <meta name="description" content="Generated by create-t3-app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
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
            <ObjectivesSlide />
          </SwiperSlide>

          <SwiperSlide>
            <ContributionSlide />
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
