import React, { useEffect, useRef, useState } from 'react'
import { setTrainerName } from '../store/slices/trainerName.Slices'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import '../components/style/PokedexPage.css'

const PokedexPage = () => {

  const [inputValue,setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const trainerName = useSelector(store => store.trainerName)

  const url = 'https://pokeapi.co/api/v2/pokemon?limit=60&offset=0'
  const [pokemons, getPokemos,getByTypePokemons] = useFetch(url)
  useEffect(() => {
    if(selectValue === 'allPokemons'){
      getPokemos()
    }else{
      getByTypePokemons(selectValue)
    }
  }, [selectValue])

  const inputSearch = useRef()
  const handelSubmit = e => {
    e.preventDefault()
    setInputValue(inputSearch.current.value.toLowerCase().trim())

    inputSearch.current.value = ''
    
  }

  const cdFilter = (poke) => {
    //filter per name at the input 
    const nameFilter = poke.name.includes(inputValue)
    
    
    return nameFilter
  }
  
  
  return (
    <div className='pokedex'>
      <header className='boxes__header'>
        <div className='box__red'>
         <img className='header__img-title' src="../../public/imgTitle.png" alt="" />
         <img className='header__img-gift' src="https://media.tenor.com/V4gdku6HgPQAAAAi/pikachu-cute.gif" alt="" />
        </div>
        <div className='box__black'></div>
      </header>
      <div className='p' >
       <p  className='pokedex__welcome'>WELCOME <span className='trainer__name'> { trainerName }!</span> here you'll find your all POKEMONS. Let's GO!</p>
      </div>
      <article className='pokedex__search'>
        <form  className='pokedex__form' onSubmit={handelSubmit}>
          <input  className='pokedex__input' type="text" ref={inputSearch}/>
          <button  className='pokedex__btn'>Search</button>
        </form>
        <div className='pokedex__selectType'>
          <SelectType 
          setSelectValue={setSelectValue} />
        </div>
      </article>
      <div className='pokedex__cards'>
        {
          pokemons?.results.filter(cdFilter).map( poke => (
            <PokeCard 
            key={poke.url}
            url={poke.url}

            />
          ))
        }
      </div>
    </div>
  )
}

export default PokedexPage