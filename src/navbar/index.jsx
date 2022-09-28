import { NavBackground } from "./styled";

function NavMenu({ photo, img }) {
  return (
    <NavBackground>
      <nav className="navbar navbar-dark navbar-expand-lg ">
        <a className="navbar-brand" href="./index.html">
          <img src={photo} width="30px" />
          Portuga
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu"
          aria-expanded="false" aria-label="navegação">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="./index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="./portuga.html" className="nav-link">
              <img src={img} width="20px" />
              Desafios Portuga
            </a></li>
            <li className="nav-item"><a href="./ebooks.html" className="nav-link">Ebooks</a></li>
            <li className="nav-item"><a href="./login.html" className="nav-link">Login</a></li>
          </ul>

        </div>

        <form className="d-flex aling-content-rigth">
          <input type="text" className="form-control" id="pesquisa" placeholder="Digite aqui..." />
          <button className="btn btn-success ml-2" type="submit">Pesquisar</button>
        </form>
      </nav>
    </NavBackground >
  )
}

export default NavMenu;