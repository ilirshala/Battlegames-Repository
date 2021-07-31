import React from "react";
import "../../../Styles/Pages/Games/GamesCategories.scss";

function GamesCategories() {
  return (
    <div className='gamesCategories'>
      <div className='category__one'>
        <h3> Category </h3>
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Newest Games</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Popular Games</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Free to Play</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Download Games </label>
        <br />
      </div>
      <div className='category__one'>
        <h3> Genres </h3>
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Action</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Multiplayer Games</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>War Games</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Shooting Games </label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Adventure Games</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Casual Games </label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Puzzles </label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Fantasy </label>
        <br />
        <br />
      </div>
      <div className='category__one'>
        <h3> Platform </h3>
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>PC Games</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Browser Games</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Mobile Games</label>
        <br />
        <br />
      </div>
      <div className='category__one'>
        <h3> OS </h3>
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Windows</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Mac OS</label>
        <br />
        <br />
        <input type='checkbox' name='' id='' />
        <label htmlFor=''>Linux</label>
        <br />
        <br />
      </div>
    </div>
  );
}

export default GamesCategories;
