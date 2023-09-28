import { format } from "path";
import { apiAxios } from "../function/api";

type Datatransaction = {
  nome: string;
  quantidade: number;
  valor: number;
};

export const criaTransacao = async (data: Datatransaction) => {
  const { nome, quantidade, valor } = data;

  const transaction = {
    amount: valor,
    payment_,
  };
};
