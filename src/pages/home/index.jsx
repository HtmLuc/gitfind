import { useState } from 'react';
import './styles.css';
import { Header } from '../../components/header';
import ItemList from '../../components/itemList';
import githubIcon from '../../assets/icone-github.png';

const anchorProfile = 'https://github.com/HtmLuc';

function App() {
  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name) {
      const {avatar_url, bio, login, name} = newUser;
      setCurrentUser({avatar_url, bio, name, login});

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`);
      const newRepos = await reposData.json();

      if(newRepos.length) {
        setRepos(newRepos);
      }
    }
  }

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
            <input
              name="usuariro"
              placeholder="@userName"
              onChange={event => setUser(event.target.value)}
            />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ?
            <>
              <div className="profile">
                <img
                  src={currentUser.avatar_url}
                  className="userImage"
                  alt="Imagem do usuário"
                />
                <div>
                  <h3>{currentUser.name}</h3>
                  <a href={anchorProfile} target="_blank">@{currentUser.login}</a>
                  <p>{currentUser.bio}</p>
                </div>
              </div>
              <hr/>
            </>
          : null}
          {repos?.length ?
            <div className="repository">
              <h4>Repositórios</h4>
              {repos.map(repo => (
                <ItemList
                  title={repo.name}
                  description={repo.description ? repo.description : "Não há descrição"}
                />
              ))}
            </div>
          : null}
        </div>
      </div>
    </div>
  )
}

export default App;
