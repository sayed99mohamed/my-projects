import Axios from 'axios'

import { useEffect, useState } from 'react'




export default function Home() {
  let [terndingMovies, setTrendingMovies] = useState([])

  async function getMovieTernding() {
    let { data } = await Axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=b708ca8f5dc566f6d12bae85b4da8ce7')
    console.log(data.results)
    setTrendingMovies(data.results)
  }

  useEffect(() => {
    getMovieTernding()
  }, [])



  return (
    <div className="row justify-content-center text-center align-items-center ">
      
         {terndingMovies.length > 0 ? terndingMovies.map((movie , index)=> <div key={index} className='col-md-3'>
          <div className='movie'>
            <img className='w-100' src = {'https://image.tmdb.org/t/p/w500/'+ movie.poster_path}  alt =''/>
            <h4 className='my-2'>{movie.title || movie.name}</h4>
            <p>{movie.overview.slice(0 , 110 )+' ...'} </p>
          </div>
         </div> ): <i className='fas fa-spinner fa-spin fa-4x'></i>}
    </div>
  )
}

