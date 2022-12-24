/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FormEvent, useState } from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { setCookie } from "nookies";
import { useRouter } from "next/router";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      email,
      password,
    };

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign_in`, params)
      .then((res) => {
        if (
          res.headers["uid"] &&
          res.headers["access-token"] &&
          res.headers["client"] &&
          res.data.data.hash_id
        ) {
          setCookie(null, "uid", res.headers["uid"], {
            maxAge: 24 * 60 * 60,
            path: "/",
          });
          setCookie(null, "accessToken", res.headers["access-token"], {
            maxAge: 24 * 60 * 60,
            path: "/",
          });
          setCookie(null, "client", res.headers["client"], {
            maxAge: 24 * 60 * 60,
            path: "/",
          });
          setCookie(null, "hash_id", res.data.data.hash_id, {
            maxAge: 24 * 60 * 60,
            path: "/",
          });
          toast.success("Login success!");
          router.push("/jobs");
        } else {
          toast.error("Sorry! Failed to error!");
        }
      })
      .catch((error) => {
        const message = error.response.data.errors[0];
        toast.error(message);
      });
  };

  return (
    <>
      <Layout>
        <section className="pt-100 login-register">
          <div className="container">
            <div className="row login-register-cover">
              <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Welcome back! </p>
                  <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                  <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p>
                  {/* <button className="btn social-login hover-up mb-20">
                    <img
                      src="assets/imgs/template/icons/icon-google.svg"
                      alt="jobbox"
                    />
                    <strong>Sign in with Google</strong>
                  </button>
                  <div className="divider-text-center">
                    <span>Or continue with</span>
                  </div> */}
                </div>
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  className="login-register text-start mt-20"
                  action="#"
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email address *
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      required
                      name="email"
                      placeholder="example@mail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="password">
                      Password *
                    </label>
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      required
                      name="password"
                      placeholder="************"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between">
                    {/* <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">Remenber me</span>
                      <span className="checkmark" />
                    </label> */}
                    <Link legacyBehavior href="/reset-password">
                      <a className="text-muted">Forgot Password</a>
                    </Link>
                  </div>
                  <div className="form-group">
                    <button
                      id="submitButton"
                      className="btn btn-brand-1 hover-up w-100"
                      type="submit"
                      name="login"
                    >
                      Login
                    </button>
                  </div>
                  <div className="text-muted text-center">
                    Don't have an Account?
                    <Link legacyBehavior href="/signup">
                      <a>Sign up</a>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="img-1 d-none d-lg-block">
                <img
                  className="shape-1"
                  src="assets/imgs/page/login-register/img-4.svg"
                  alt="JobBox"
                />
              </div>
              <div className="img-2">
                <img
                  src="assets/imgs/page/login-register/img-3.svg"
                  alt="JobBox"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
