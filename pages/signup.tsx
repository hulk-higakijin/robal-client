import { FormEvent, useState } from "react";
import Layout from "../components/Layout/Layout";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = {
      email,
      password,
      password_confirmation: passwordConfirmation,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth`, params)
      .then((res) => {
        toast.success("Welocome! Login agin.");
        router.push("/login");
      })
      .catch((error) => {
        const message = error.response.data.errors.full_messages[0] + ".";
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
                  <p className="font-sm text-brand-2">Register </p>
                  <h2 className="mt-10 mb-5 text-brand-1">
                    Start for free Today
                  </h2>
                  <p className="font-sm text-muted mb-30">
                    Access to all features. No credit card required.
                  </p>
                  {/* <button className="btn social-login hover-up mb-20">
                    <img
                      src="assets/imgs/template/icons/icon-google.svg"
                      alt="jobbox"
                    />
                    <strong>Sign up with Google</strong>
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
                  {/* <div className="form-group">
                    <label className="form-label" htmlFor="input-1">
                      Full Name *
                    </label>
                    <input
                      className="form-control"
                      id="input-1"
                      type="text"
                      required
                      name="fullname"
                      placeholder="Steven Job"
                    />
                  </div> */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Email *
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      required
                      name="emailaddress"
                      placeholder="example@gmail.com"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* <div className="form-group">
                    <label className="form-label" htmlFor="input-3">
                      Username *
                    </label>
                    <input
                      className="form-control"
                      id="input-3"
                      type="text"
                      required
                      name="username"
                      placeholder="stevenjob"
                    />
                  </div> */}
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
                  <div className="form-group">
                    <label className="form-label" htmlFor="passwordConfirmation">
                      Re-Password *
                    </label>
                    <input
                      className="form-control"
                      id="passwordConfirmation"
                      type="password"
                      required
                      name="re-password"
                      placeholder="************"
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between">
                    {/* <label className="cb-container">
                      <input type="checkbox" />
                      <span className="text-small">
                        Agree our terms and policy
                      </span>
                      <span className="checkmark" />
                    </label> */}
                    <Link legacyBehavior href="/about">
                      <a className="text-muted">Lean more</a>
                    </Link>
                  </div>
                  <div className="form-group">
                    <button
                      className="btn btn-brand-1 hover-up w-100"
                      type="submit"
                      name="login"
                      id="submitButton"
                    >
                      Submit &amp; Register
                    </button>
                  </div>
                  <div className="text-muted text-center">
                    Already have an account?
                    <Link legacyBehavior href="/login">
                      <a>Sign in</a>
                    </Link>
                  </div>
                </form>
              </div>
              <div className="img-1 d-none d-lg-block">
                <img
                  className="shape-1"
                  src="assets/imgs/page/login-register/img-1.svg"
                  alt="JobBox"
                />
              </div>
              <div className="img-2">
                <img
                  src="assets/imgs/page/login-register/img-2.svg"
                  alt="JobBox"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
