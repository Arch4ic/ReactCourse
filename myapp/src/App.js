import React, {useEffect, useState} from 'react';
import './App.css';

const urll ='https://api.github.com/search/repositories?q=react'
function App() {
  const [repos, setRepos] = useState([])

  useEffect(() =>{
    fetch(urll,{
      method: 'GET'
    })
    .then(response => response.json())
    .then((data) => setRepos(data.items))
  }, []);
  return (
    <div className="App">
      <table>
        <h1>Repositories</h1>
        <tbody>
          <tr>
            <td style={{fontWeight: 'bold'}}>Name</td>
            <td style={{fontWeight: 'bold'}}>Url</td>
          </tr>
        {
          repos.map((item) =>
           <tr>
             <td>{item.full_name}</td>
             <td>{item.url}</td>
           </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
