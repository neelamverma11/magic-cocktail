import React, { useState } from "react";
import Drink from "./drink.js";

const Header = () => {

  const [myDrinks, setMyDrinks] = useState([]);
  const [search, setSearch] = useState("");

  async function getDrinks() {
      let response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`)
      response = await response.json();
      setMyDrinks(response.drinks);  
      console.log(response.drinks);   
  };


  return (
    <>
      <div>
        <div className="row">
          <div>
            <input
              type="text"
              placeholder="Search for a Cocktail..."
              value={search}
              onChange={(e)=> setSearch(e.target.value)}
            />

            <button type='submit' onClick={async ()=> {await getDrinks()}}>
              <i className="fas fa-search button"></i>
            </button>

          </div>
          <hr />
        </div>

          <div className="row">
            {myDrinks.map((currItem,index) => {
              return(
                <div key={index} className='col-sm-4'>
              <Drink
                id={currItem.idDrink}
                name={currItem.strDrink}
                image={currItem.strDrinkThumb}
                title={currItem.strGlass}
                instruction={currItem.strInstructions}
              />
              </div>
            )
            })}
          </div>          
      </div>
    </>
  );
};

export default Header;

