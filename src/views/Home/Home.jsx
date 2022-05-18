import "./Home.css";
import HeaderContainer from "../../components/Header/HeaderContainer";
import PublicacoesLista from "../../components/PublicacoesLista/PublicacaoLista";

function Home() {
  return (
    <div className="Home__Container">
      <HeaderContainer />

      <div className="Main">
        <PublicacoesLista />
      </div>
    </div>
  );
}

export default Home;
