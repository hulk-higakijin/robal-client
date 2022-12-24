import { parseCookies } from "nookies";

const cookie = parseCookies();
const currentUserHashId = cookie.hash_id;

export default currentUserHashId;
