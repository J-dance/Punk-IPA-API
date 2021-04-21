import { React, useState, useEffect } from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import CardList from "./components/CardList";
import BeerIntro from "./components/BeerIntro";
import Landing from "./components/Landing";

function App() {

  // set useState to re-render cardlist on search, default is empty
  const [beers, setBeers] = useState([]);
  
  // function fetched data from api using to search criteria
  const fetchData = (searchCriteria) => {
    console.log(searchCriteria);
    searchCriteria.abv === false ? searchCriteria.abv = "0" : searchCriteria.abv = "6"

    // fetch the data with abv and search bar text, then run filter data function for ph 
    if (searchCriteria.beerName === '') {
      setBeers([])
    } else {
      fetch(`https://api.punkapi.com/v2/beers?abv_gt=${searchCriteria.abv}&beer_name=${searchCriteria.beerName}`)
      .then(response => response.json())
      .then(data => setBeers(filterData(data, searchCriteria)))
    }
  }

  // filter search results function: checks whether any search results match or not
  const filterData = (data, searchCriteria) => {
    let result = searchCriteria.isPH === true ? data.filter(beer => beer.ph < 4) : data
    return searchCriteria.isCL === true ? result : result
  }

  // run this on initial page load
  useEffect(() => {
    // get random beer and set as beer
    fetch(`https://api.punkapi.com/v2/beers/random`)
      .then(response => response.json())
      .then(data => {
        // insert element at begining of array 
        data.splice(0, 0, 1)
        setBeers(data)
      })
  }, [])

  return (
    <div className="app-page">
      {/* render landing component */}
      <Landing />

      {/* insert content in here */}
      <div className='parallax'>
        {/* pass fetchdata down */}
        <NavBar searchBeers={fetchData}/>

        {/* show CardList to the right of NavBar */}
        <div id="results">
          {/* if statement for empty data */}
          {
            beers[0] === 1 ? <BeerIntro beer={beers[1]} /> : beers.length === 0 ? <h1 className="noResult">Oops No Results... Please Search Again</h1> : <CardList data={beers}/>
          }
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
