import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import '../style/PokeCard.css'

const PokeCard = ({url}) => {

  const [ pokeInfo, getInfoPoke] = useFetch(url)
  useEffect(() => {
      
    getInfoPoke()
  }, [])

 const navegate = useNavigate()

  const handelNavegate = () => {
    navegate(`/pokedex/${pokeInfo.id}`)
  }
  
  const firstType = pokeInfo?.types[0].type.name
  
  return (
    <article className={`pokemonCard ${firstType}-border`} onClick={handelNavegate}>
      <header className={`pokemonCard__header ${firstType}-gradient`}>        
          <img className='pokemonCard__img' src={pokeInfo?.sprites.other["official-artwork"].front_default} alt="" />        
      </header>
      <section className='pokemonCard__section'>
        <h3 className={`pokemonCard__name ${firstType}-color`} >{pokeInfo?.name}</h3>
        <ul className='pokemonCard__ul-type'>
          {
            pokeInfo?.types.map(infoType => (
              <li className='pokemonCard__li-type' key={infoType.type.url}>{infoType.type.name}</li>
            ))
          }
        </ul>
        <hr className='pokemonCard__hr'/>
        <ul className='pokemonCard__abilities'>
          {
            pokeInfo?.stats.map(infoStats => (
              <li className='abilitie__name' key={infoStats.stat.url}>
                <span className='abilitie__title' >{infoStats.stat.name} </span>
                <span className={`abilitie__number ${firstType}-color`} >{infoStats.base_stat}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default PokeCard