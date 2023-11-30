import React, { useRef } from 'react'
import { useDispatch} from 'react-redux'
import { setTrainerName } from '../store/slices/trainerName.Slices'
import { useNavigate } from 'react-router-dom'
import '../components/style/HomePage.css'

const HomePage = () => {

    const dispatch = useDispatch()

    const inputname = useRef()

    const navigate = useNavigate()

    const handelSubmit = e =>{
        e.preventDefault()

        dispatch(setTrainerName(inputname.current.value.trim()))
        navigate('/pokedex')

    } 
  return (
    
      <div className='home__container'>
          <div className='home__img-container'>
            <img className='home__title' src="./imgTitle.png" alt="" />
          </div>
          <div className='home__img-container'>
            <img className='home__pokedex' src="./imgPokedex.png" alt="" />
          </div>          
          <h2 className='home__h2'>Hi Trainer!</h2>
          <p className='home__p'>To start, please give me your trainer name</p>
          <form className='home__form' onSubmit={handelSubmit}>
              <input className='home__input' type="text" ref={inputname}/>
              <button className='home__btn'>Start</button>
          </form>
      </div>
    
  )
}

export default HomePage