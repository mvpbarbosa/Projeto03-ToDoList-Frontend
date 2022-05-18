import "./HeaderContainer.css";

function HeaderContainer() {
  return (
    <div className="Header">
      <div className="LogoTitulo">
        <img
          src={require("../../assets/images/logo-friendszone.jpg")}
          alt="Logo FriendsZone"
          className="Logo"
        />
        <h1>FriendsZone</h1>
      </div>

      <div className="Pesquisar">
        <input
          type="text"
          placeholder="Digite o nome de um usuário"
          className="Input"
        />

        <img
          src={require("../../assets/images/lupa-icon.png")}
          alt="Ícone de lupa"
          className="LupaIcon"
        />
      </div>
    </div>
  );
}

export default HeaderContainer;
