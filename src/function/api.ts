import axios from "axios";

export const apiAxios = axios.create({
  method: "POST",
  baseURL: "https://api.pagar.me/core/v5/orders",
  headers: {
    Authorization:
      "Basic " +
      Buffer.from("sk_cd4319f002d84358856f9dfa411d0492").toString("base64"),
    "Content-Type": "application/json",
  },
});
