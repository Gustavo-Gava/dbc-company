import { type AppType } from "next/dist/shared/lib/utils";

import "~/styles/globals.css";
import "~/styles/index.css";
import "swiper/css";

import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
};

export default MyApp;
