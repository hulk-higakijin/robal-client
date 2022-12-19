import axios from "axios";
import router from "next/router";
import { destroyCookie } from "nookies";
import { toast } from "react-toastify";
import headers from "util/headers";

const deleteUser = () => {
  axios({
    method: "DELETE",
    url: `${process.env.NEXT_PUBLIC_API_URL}/auth`,
    headers,
  })
    .then((res) => {
      destroyCookie(null, "uid");
      destroyCookie(null, "client");
      destroyCookie(null, "accessToken");
      destroyCookie(null, "hash_id");
      
      router.push('/')
      toast.success("Good bye! See you again!");
    })
    .catch((error) => {
      console.log(error)
      toast.error("oops! Failed to delete User!")
    });
};

export default deleteUser;
