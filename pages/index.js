import React, { useEffect } from "react";
import supabase from "@/utils/supabase";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const { data: user, error: authError } = await supabase.auth.getUser();

      if (authError) {
        router.push("/login");
        throw authError;
      }
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div></div>
    </>
  );
}

export default Home;
