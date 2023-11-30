import axios from "axios"
import { useState } from "react"


const useFetch = (url) => {
  const [infoApi, setInfoApi] = useState()

    const getApi = () => {
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }
//como tranfomar un array a un obj que tenga una nueva propiedad en este caso results
    const getType = (urlType) => {
      axios.get(urlType)
      .then(res => {
        const obj = {
          results: res.data.pokemon.map(e => e.pokemon) // pokemon en la parte del map es diferente al pokemon que en la e que estadoms retornando 
        }
        setInfoApi(obj)
      })
      .catch(err => console.log(err))
  }


    return [infoApi, getApi, getType]

}

export default useFetch