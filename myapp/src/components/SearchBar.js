import React, {useState} from 'react';

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [repos, setRepos] = useState([]);

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleClick = () => {
        fetch(`https://api.github.com/search/repositories?q=${searchInput}`,{
            method: 'GET'
          })
          .then(response => response.json())
          .then((data) => setRepos(data.items))
    };
    return (
        <div style={{padding:'20px'}}>
            <input 
                type="text" 
                placeholde='Search' 
                value={searchInput} 
                onChange={handleChange}
            />
            <button onClick={handleClick}>Search</button>
            <table>
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
    )
};

export default SearchBar;