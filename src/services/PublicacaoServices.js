import { Api } from "../helpers/Api";

const parseResponse = (response) => response.json();

export const PublicacaoService = {
  getLista: () =>
    fetch(Api.publicacaoLista(), { method: "GET" }).then(parseResponse),
  getById: (id) =>
    fetch(Api.publicacaoById(id), { method: "GET" }).then(parseResponse),
  create: () =>
    fetch(Api.createpublicacao(), { method: "POST" }).then(parseResponse),
  updtateById: (id) =>
    fetch(Api.updatepublicacaoById(id), { method: "PUT" }).then(parseResponse),
  deleteById: (id) =>
    fetch(Api.deletepublicacaoById(id), { method: "DELETE" }).then(
      parseResponse
    ),
};
