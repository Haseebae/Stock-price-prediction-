import "@/styles/globals.css";
import supabase from "@/utils/supabase";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

export default function App({ Component, pageProps }) {
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
