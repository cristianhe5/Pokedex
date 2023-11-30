import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import '../components/style/PokeInfo.css'
import '../components/style/PokedexPage.css'
import '../components/style/PokeCard.css'

const PokeInfo = () => {

  const {id} = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`

  const [pokemon, getPokemon] = useFetch(url)

  useEffect(() => {
    getPokemon()
  }, [])

  const firstType = pokemon?.types[0].type.name
  

  console.log(pokemon);

  
  

  return (
    <div className='pokeInfo'>
      <header className='boxes__header'>
        <div className='box__red'>
         <img className='header__img-title' src="./imgTitle.png" alt="" />
         <img className='header__img-gift' src="https://media.tenor.com/V4gdku6HgPQAAAAi/pikachu-cute.gif" alt="" />
        </div>
        <div className='box__black'></div>
      </header>

      <div className='pokeInfo__fix-div'>
        <article className='pokeInfo__container'>
          <div className={`pokeInfo__container-img ${firstType}-gradient`}>
            <img className='pokeInfo__img' src={pokemon?.sprites.other["official-artwork"].front_default} alt="" />    
          </div>
          <section className='details__section'>
            <div className='pokeInfo__id-div'>
              <h2 className='pokeInfo__id'>#{pokemon?.id}</h2>
            </div>
            <h2 className='pokeInfo__name'>{pokemon?.name}</h2>  
            <ul className='pokeInfo__size'>
              <li className='size__li'>
                <span className='size__span'>weight </span>
                <span className='size__span-num'>{pokemon?.weight}</span>
              </li>
              <li className='size__li'><span className='size__span'>height </span><span className='size__span-num'>{pokemon?.height}</span></li>
            </ul>
            <div className='description__div'>
              <article className='type__acticle'>
                <h3 className='type__title'>Type</h3>
                <ul className='type__ul'>
                  {
                    pokemon?.types.map( infoType => (
                      <li className={`type__li ${infoType.type.name}-gradient`} key={infoType.type.name}><span className='type__span'>{infoType.type.name}</span></li>
                    ))
                  }
                </ul>
              </article>
              <article className='abilities__article'>
                <h3 className='abilities__title'>Abilities</h3>
                <ul className='abilities__ul'>
                  {
                    pokemon?.abilities.map(powers => (
                      <li className='abilities__li' key={powers.ability.name}><span className='abilities__span'>{powers.ability.name}</span></li>
                    ))
                  }
                </ul>
              </article>
            </div>
          </section>
          <section className='stats__section'>
            <h2 className='stats__title'>Stats</h2>
            {
              pokemon?.stats.map( statdetails => (
                <div className='stats__container' key={statdetails.stat.name}>
                  <div className='stats__div-details'>
                  <span className='stats__details'>{statdetails.stat.name} </span><span className='stats__details-nums'>{statdetails.base_stat}/150</span>
                  </div>    
                  <div className='barras'style={{width: `${(statdetails.base_stat*100)/150}%`}}>
                  </div>            
                </div>
              ))
            }
          </section>
          <section className='movemets__section'>
            <h2 className='movemets__title'>Movements</h2>
            <div className='movemets__ul'>
              {
                pokemon?.moves.map( movesDetails => (
                  <div className='movemets__li' key={movesDetails.move.url}><span className='movemets__span'>{movesDetails.move.name}</span></div>
                ))
              }
            </div>

          </section>
        </article>
      </div>
    </div>
  )
}

export default PokeInfo