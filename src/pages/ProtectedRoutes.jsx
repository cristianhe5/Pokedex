import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


const ProtectedRoutes = () => {
    const trainerName = useSelector(store => store.trainerName) // el use selector lo necesito para usar la info de mi store entonces useSelector recive como parametro un callback que tiene como parametro la store que es un obj y tiene la info de mi estado entonces cojemos su valor con store.tranerName en este caso


  if(trainerName.length > 2){ // si la store tiene mas de dos caracteres le permito acceder a las paginas protegidas con el Outlet
    return <Outlet />
  }else{
    return <Navigate to = '/' /> // si no tiene mas de 2 caracteres lo devuelvo a la ruta home
  }
}

export default ProtectedRoutes