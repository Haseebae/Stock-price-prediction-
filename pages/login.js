import supabase from "@/utils/supabase";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const [Loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    const email = e.target.email.value;
    const password = e.target.password.value;

    e.preventDefault();

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.push("/");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-5">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Sign In</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Check Out Your Latest Insights
          </p>
        </div>

        {Loading ? (
          "Processing ..."
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className={styles.input_group}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className={styles.input_text}
              />
              <span className="icon flex items-center px-4">
                <HiAtSymbol size={25} />
              </span>
            </div>
            <div className={styles.input_group}>
              <input
                type={`${show ? "text" : "password"}`}
                name="password"
                id="password"
                placeholder="password"
                className={styles.input_text}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow(!show)}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>

            {/* login buttons */}
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Login
              </button>
            </div>
          </form>
        )}
        <p className="text-center text-gray-400 ">
          don't have an account yet?{" "}
          <Link href={"/register"}>
            <span className="text-blue-700">Sign Up</span>
          </Link>
        </p>
      </section>
    </div>
  );
}

Login.getLayout = function PageLayout(page) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};
