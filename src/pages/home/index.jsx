import './styles.css'
import { useState } from 'react'
import { Header } from '../../components/header'
import ItemList from '../../components/itemList'
import githubIcon from '../../assets/icone-github.png'
import profileImage from '../../assets/profile-image.jpg'

const anchorProfile = 'https://github.com/HtmLuc'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img
          src={githubIcon}
          className="githubIcon"
          alt="Logo do GitHub"
        />
        <div className="info">
          <div>
            <input name="usuariro" placeholder="@userName" />
            <button>Buscar</button>
          </div>
          <div className="profile">
            <img
              src={profileImage}
              className="userImage"
              alt="Imagem do usuário"
            />
            <div>
              <h3>Lucas Dantas</h3>
              <a href={anchorProfile} target="_blank">@HtmLuc</a>
              <p>I’m currently undergraduate student of bachelor of information technology at UFRN-IMD.</p>
            </div>
          </div>
          <hr/>
          <div className="repository">
            <h4>Repositórios</h4>
            <ItemList title="Título" description="Descrição"/>
            <ItemList title="Título" description="Descrição"/>
            <ItemList title="Título" description="Descrição"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
