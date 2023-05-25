import { type AppType } from "next/dist/shared/lib/utils";

import { Poppins } from "next/font/google";
import { ThemeContextProvider } from "~/context/ThemeContext";

import "~/styles/globals.css";
import "~/styles/index.css";
import "swiper/css";
import { EnterpriseProvider } from "~/context/EnterpriseContext";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "700"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeContextProvider>
      <EnterpriseProvider>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </EnterpriseProvider>
    </ThemeContextProvider>
  );
};

export default MyApp;
