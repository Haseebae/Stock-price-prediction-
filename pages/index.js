import React, { useEffect } from "react";
import supabase from "@/utils/supabase";
import { useRouter } from "next/router";

// import Image from "next/image"
import { Head } from 'next/head';
// import { Page } from 'next/page';

function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   getUser();
  // }, []);

  // async function getUser() {
  //   try {
  //     const { data: user, error: authError } = await supabase.auth.getUser();

  //     if (authError) {
  //       router.push("/login");
  //       throw "Please login!";
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // }

 
  return (
    <>
   
     <main class= 'main'>
     
        <title>Bubbles</title>
      <div class="body">
      

      <div class='center'>
        <img
          class= 'logooo'
          src={"/blogo.png"}
          alt="Next.js Logo"
          width={1800}
          height={370}
          priority
        />
      </div>
      <center>

      <div class='grid' >
        <a
          href=""
          class='card'
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            JoshPosh <span>-&gt;</span>
          </h2>
          <p>He lives in a Pineapple under the tree.</p>
        </a>

        <a
          href="/"
          class='card'
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            The Team <span>-&gt;</span>
          </h2>
          <p>Lorem Ipsum!</p>
        </a>

        <a
          href="/"
          class='card'
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            App <span>-&gt;</span>
          </h2>
          <p>Lorem Ipsum</p>
        </a>

        
         
        
      </div>
      </center>
      </div>
    </main>

    </>
  )

}

export default Home;
