import React, { useEffect, useRef } from 'react'
import useFetch from '../../hooks/useFetch'
import '../style/PokedexPage.css'

const SelectType = ({setSelectValue}) => {
    const url = 'https://pokeapi.co/api/v2/type'
    const [typesInfo, getTypesInfo] = useFetch(url)

    useEffect(() => {
        getTypesInfo()
    }, [])

    const selectElement = useRef()

    const handelChanges = () => {
        setSelectValue(selectElement.current.value)
    }
    
    
  return (
    <select className='select__type' ref={selectElement} onChange={handelChanges}>
        <option className='select__option' value="allPokemons">All Pokemons</option>
        {
            typesInfo?.results.map( type => (
                <option className='select__options' key={type.url} value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType