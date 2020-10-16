import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';


const initialMovie = {
   title: '',
   director: '',
   metascore: '',
   // stars: []
}

export default function UpdateMovie(props) {

   const [movieForm, setMovieForm] = useState(initialMovie);

   const { movieList, setMovieList } = props;

   const { id } = useParams();

   const { push } = useHistory();

   useEffect(() => {
      axios
         .get(`http://localhost:5000/api/movies/${id}`)
         .then(res => {
            setMovieForm(res.data)
         })
         .catch(err => console.log(err))
   }, [id])

   const handleChange = e => {
      const { name, value } = e.target;
      setMovieForm({ ...movieForm, [name] : value })
   }

   const handleSubmit = e => {
      e.preventDefault();
      axios
         .put(`http://localhost:5000/api/movies/${id}`, movieForm)
         .then(res => {
            console.log('UPDATE FORM', res)
            setMovieList(
               movieList.map((movie) => {
                  if (movie.id === id) {
                     return movieForm
                  } else {
                     return movie
                  }
               })
            )
            push('/')
         })
         .catch(err => console.log(err))
   }

   return (
      <div className='movie-update-form-container'>
         <h2>Update Movie</h2>
         <form onSubmit={handleSubmit}>
            <div className='input-container'>
            <label htmlFor='title'>Title </label>
               <input 
                  type='text'
                  name='title'
                  value={movieForm.title}
                  onChange={handleChange}
               />
            </div>
            <div className='input-container'>
               <label htmlFor='director'>Director </label>
                  <input 
                     type='text'
                     name='director'
                     value={movieForm.director}
                     onChange={handleChange}
               />
            </div>
            <div className='input-container'>
               <label htmlFor='metascore'>Metascore </label>
                  <input 
                     type='number'
                     name='metascore'
                     value={movieForm.metascore}
                     onChange={handleChange}
                  />
            </div>
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