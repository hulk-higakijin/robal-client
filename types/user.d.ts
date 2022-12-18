type User = {
  id: string;
  uid: string;
  email: string;
  provider: string;
  image?: string;
  name?: string;
  nickname?: string;
  role: "ghost" | "candidate" | "employer";
  twitter_url?: string;
  web_url?: string;
  position?: string;
  bio?: string;
  country?: string;
  city?: string;
};
