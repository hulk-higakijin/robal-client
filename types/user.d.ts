type User = {
  id: string;
  hash_id: string; // 一意のid。idの代わりに識別で使う
  uid: string; // 実質メールアドレスと同じ
  email: string;
  provider: string;
  image?: string;
  name?: string;
  nickname?: string;
  role: "ghost" | "candidate" | "employer";
  twitterUrl?: string;
  web_url?: string;
  position?: string;
  bio?: string;
  country?: string;
  city?: string;
};
