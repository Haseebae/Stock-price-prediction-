import supabase from "@/utils/supabase";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [show, setShow] = useState({ password: false, cpassword: false });
  const [Loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    const email = e.target.email.value;
    const password = e.target.password.value;

    e.preventDefault();

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      e.target.submit();
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Head>
        <title>Register</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Register</h1>
          <p className="w-3/4 mx-auto text-gray-400">Some Text</p>
        </div>

        {Loading ? (
          "Please Verify your Email ..."
        ) : (
          <form
            action="/login"
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
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
                type={`${show.password ? "text" : "password"}`}
                name="password"
                id="password"
                placeholder="password"
                className={styles.input_text}
              />
              <span
                className="icon flex items-center px-4"
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={25} />
              </span>
            </div>

            {/* login buttons */}
            <div className="input-button">
              <button type="submit" className={styles.button}>
                Sign Up
              </button>
            </div>
          </form>
        )}
        <p className="text-center text-gray-400 ">
          Have an account?{" "}
          <Link href={"/login"}>
            <p className="text-blue-700">Sign In</p>
          </Link>
        </p>
      </section>
    </div>
  );
}
Register.getLayout = function PageLayout(page) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};
