import "../public/assets/css/style.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
