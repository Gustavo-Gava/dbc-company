import { type NextPage } from "next";
import Head from "next/head";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Mousewheel, Pagination } from "swiper";

import { PresentationSlide } from "~/components/PresentationSlide";
import { GlassdoorSlide } from "~/components/GlassdoorSlide";
import { ObjectivesSlide } from "~/components/ObjectivesSlide";
import { EndingSection } from "~/components/EndingSection";
import { ExperienceSlide } from "~/components/ExperienceSlide";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Datum Presentation | Gustavo Gava</title>
        <meta name="description" content="Generated by create-t3-app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className="relative h-screen max-h-screen overflow-hidden bg-slate-800">
        <Swiper
          direction="vertical"
          pagination={{
            type: "progressbar",
            clickable: true,
          }}
          modules={[Mousewheel, Pagination, EffectCreative]}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: [0, "-100%", 0],
            },
            next: {
              translate: [0, "100%", 0],
            },
          }}
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
            <div></div>
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
