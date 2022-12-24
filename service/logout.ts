import axios from "axios";
import router from "next/router";
import { destroyCookie, parseCookies } from "nookies";
import { toast } from "react-toastify";
import headers from "util/headers";

const logout = () => {
  axios({
    method: "DELETE",
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth/sign_out`,
    headers,
  })
    .then((res) => {
      destroyCookie(null, "uid");
      destroyCookie(null, "client");
      destroyCookie(null, "accessToken");
      destroyCookie(null, "hash_id");
      toast.success("See you later!");
      router.push("/");
    })
    .catch((error) => {
      toast.error("Faild to Logout!");
    });
};

export default logout;
