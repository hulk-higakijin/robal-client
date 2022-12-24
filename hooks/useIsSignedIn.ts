import { parseCookies } from "nookies";
import { useEffect, useState } from "react";

const useIsSignedIn = () => {
  const [value, setValue] = useState<boolean>(false);
  const cookies = parseCookies();

  useEffect(() => {
    setValue(!!(cookies.uid && cookies.accessToken && cookies.client));
  }, [cookies]);

  return value;
};

export default useIsSignedIn;
