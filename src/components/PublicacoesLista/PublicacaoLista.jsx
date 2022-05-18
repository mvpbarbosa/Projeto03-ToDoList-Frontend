import React, { useState, useEffect } from "react";
import PublicacaoListaItem from "../PublicacaoListaItem/PublicacaoListaItem";
import { PublicacaoService } from "../../services/PublicacaoServices";
import PublicacoesDetalhesModal from "../PublicacoesDetalhesModal/PublicacoesDetalhesModal";

function PublicacoesLista() {
  const [publicacoes, setPublicacoes] = useState([]);

  const [publicacaoSelecionada, setPublicacaoSelecionada] = useState({});

  const [publicacaoModal, setPublicacaoModal] = useState(false);

  const addLike = (publicacaoIndex) => {
    const publicacao = {
      [publicacaoIndex]:
        Number(publicacaoSelecionada[publicacaoIndex] || 0) + 1,
    };
    setPublicacaoSelecionada({ ...publicacaoSelecionada, ...publicacao });
  };

  const removeLike = (publicacaoIndex) => {
    const publicacao = {
      [publicacaoIndex]:
        Number(publicacaoSelecionada[publicacaoIndex] || 0) - 1,
    };

    setPublicacaoSelecionada({ ...publicacaoSelecionada, ...publicacao });
  };

  const getLista = async () => {
    const response = await PublicacaoService.getLista();
    setPublicacoes(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <section className="PublicacaoLista">
      {publicacoes.map((publicacao, index) => (
        <PublicacaoListaItem
          key={`PublicacaoListaItem-${index}`}
          publicacao={publicacao}
          publicacaoCurtida={publicacaoSelecionada[index]}
          index={index}
          onRemove={(index) => removeLike(index)}
          onAdd={(index) => addLike(index)}
          clickItem={(publicacaoId) => setPublicacaoModal(publicacao)}
        />
      ))}
      {publicacaoModal && (
        <PublicacoesDetalhesModal
          publicacao={publicacaoModal}
          closeModal={() => setPublicacaoModal(false)}
        />
      )}
    </section>
  );
}

export default PublicacoesLista;
