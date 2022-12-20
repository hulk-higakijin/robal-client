import axios from "axios";
import { toast } from "react-toastify";
import currentUserHashId from "util/currentUserHashId";
import headers from "util/headers";

type paramsType = {
  name?: string;
  email?: string;
  bio?: string;
  web_url?: string;
  country?: string;
  city?: string;
};

const updateUser = (params: paramsType) => {
  axios({
    method: "PUT",
    url: `${process.env.NEXT_PUBLIC_API_URL}/users/${currentUserHashId}`,
    headers,
    data: params,
  }).then((res) => {
    toast.success('Your Profile has updated!')
  }).catch((error) => {
    toast.error("oops! Failed to delete User!")
  });
};

export default updateUser;
