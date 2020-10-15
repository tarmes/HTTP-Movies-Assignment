import React, { useState } from 'react';

const initialMovie = {
   title: '',
   director: '',
   metascore: '',
   // stars: []
}

export default function UpdateMovie() {

   const [movieForm, setMovieForm] = useState(initialMovie);

   const handleChange = e => {
      const { name, value } = e.target;
      setMovieForm({ ...movieForm, [name] : value })
   }

   const handleSubmit = e => {
      e.preventDefault();
      
   }

   return (
      <div className='movie-update-form-container'>
         <h2>Update Movie</h2>
         <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title </label>
               <input 
                  type='text'
                  name='title'
                  value={movieForm.title}
                  onChange={handleChange}
               />
            <label htmlFor='director'>Director </label>
               <input 
                  type='text'
                  name='director'
                  value={movieForm.director}
                  onChange={handleChange}
            />
            <label htmlFor='metascore'>Metascore </label>
               <input 
                  type='number'
                  name='metascore'
                  value={movieForm.metascore}
                  onChange={handleChange}
               />
            {/* <label htmlFor='metascore'>Metascore </label>
               <input 
                  type='number'
                  name='metascore'
                  value={movieForm.metascore}
                  onChange={handleChange}
               /> */}
            <button>Update Movie</button>
         </form>
      </div>
   )
}