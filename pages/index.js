import React, { useEffect, useState } from "react";
import supabase from "@/utils/supabase";
import { useRouter } from "next/router";
import Blowing from "../public/Blowing.gif";
import Link from "next/link";

// import Image from "next/image"
import { Head } from "next/head";
// import { Page } from 'next/page';

function Home() {
  const [premium, setPremium] = useState(false);
  const router = useRouter();
  function signOut() {
    supabase.auth.signOut();
    router.push("/login");
  }

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const { data: user, error: authError } = await supabase.auth.getUser();

      if (authError) {
        router.push("/login");
        throw "Please login!";
      }

      const { data, error: profileError } = await supabase
        .from("profiles")
        .select(`membership`)
        .eq("id", user.user.id)
        .single();

      if (profileError) {
        throw new Error("Error Fetching Data");
      }

      setPremium(data.membership);
    } catch (error) {
      alert(error);
    }
  }

  async function updateProfile() {
    try {
      setPremium(true);

      const { data: user, error: authError } = await supabase.auth.getUser();
      if (authError) {
        throw new Error(authError.message);
      }
      if (!user) {
        throw new Error("User is not authenticated");
      }

      const updates = {
        id: user.user.id,
        updated_at: new Date(),
        email: user.user.email,
        membership: true,
      };

      let { error } = await supabase
        .from("profiles")
        .upsert(updates, { returning: "minimal" });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function handleClick() {
    router.push("/dash");
  }

  function handleClick2() {
    router.push("/dash2");
  }

  return (
    <div>
      <main
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${Blowing.src})` }}
      >
        <title>Bubbles</title>
        <div>
          <div className="flex justify-center items-center py-10">
            <div className="w-4/5">
              <img src={"/blogo.png"} alt="Next.js Logo" />
            </div>
          </div>
          <center>
            <div className="grid grid-cols-3">
              <div className="text-center">
                <button
                  className="w-44 h-11 rounded-full text-gray-50 bg-blue-600 hover:bg-blue-700"
                  onClick={handleClick}
                >
                  View Insights
                </button>
              </div>

              <div className="text-center">
                {!premium ? (
                  <button
                    className="w-44 h-11 rounded-full text-gray-50 bg-blue-600 hover:bg-blue-700"
                    onClick={updateProfile}
                  >
                    <p>Get Premium</p>
                  </button>
                ) : (
                  <button
                    className="w-44 h-11 rounded-full text-gray-50 bg-amber-500 hover:bg-amber-600"
                    onClick={handleClick2}
                  >
                    <p>Treasure</p>
                  </button>
                )}
              </div>

              <div className="text-center">
                <button
                  className="w-44 h-11 rounded-full text-gray-50 bg-blue-600 hover:bg-blue-700"
                  onClick={signOut}
                >
                  Sign Out
                </button>
              </div>
            </div>
          </center>
        </div>
      </main>
    </div>
  );
}

export default Home;
