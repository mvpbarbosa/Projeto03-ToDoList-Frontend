import "./PublicacaoListaItem.css";

function PublicacaoListaItem({
  publicacao,
  publicacaoCurtida,
  index,
  onRemove,
  onAdd,
  clickItem,
}) {
  const badgeCounter = (canRender) =>
    Boolean(canRender) && (
      <span className="PublicacaoListaItem__badge">Curtido</span>
    );

  const likeAndUnlike = (index) => {
    if (publicacaoCurtida !== 1) {
      onAdd(index);
    } else if (publicacaoCurtida === 1) {
      onRemove(index);
    }
  };

  return (
    <div
      className="PublicacaoListaItem"
      onClick={() => clickItem(publicacao.id)}
    >
      <div className="PublicacaoListaItem__Header">
        <img src={publicacao.foto} alt="Foto de perfil" />
        <div className="nomeHora">
          <h3>{publicacao.nome}</h3>
          <h4>{publicacao.dataHora}</h4>
        </div>
      </div>

      <div className="PublicacaoListaItem__Main">
        <h4>{publicacao.texto}</h4>
      </div>

      <div className="PublicacaoListaItem__Footer">
        <button onClick={() => likeAndUnlike(index)}>
          <img
            id="Curtir"
            src={require("../../assets/images/curtir-icon.png")}
            alt="Botão de curtir"
          />
        </button>
        {badgeCounter(publicacaoCurtida, index)}
      </div>
    </div>
  );
}

export default PublicacaoListaItem;
