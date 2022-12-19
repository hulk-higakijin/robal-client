import { parseCookies } from "nookies";

const cookie = parseCookies();

const headers = {
  uid: cookie.uid,
  client: cookie.client,
  access_token: cookie.accessToken,
};

export default headers;
