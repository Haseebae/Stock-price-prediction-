import "@/styles/globals.css";
import supabase from "@/utils/supabase";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import dynamic from "next/dynamic";

function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    );
  }
  return <Component {...pageProps} />;
}

export default dynamic(() => Promise.resolve(App), { ssr: false });
