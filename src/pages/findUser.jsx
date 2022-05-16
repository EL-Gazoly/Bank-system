import { useParams } from "react-router-dom";
import useFetch from '../Features/useFetch'
import UserProfile from "../components/userProfile";
import NotFound from "./notFound";
import Loading from "./loading";
const User = () => {
  const { id } = useParams()
  const { data:user, isPending, error } = useFetch('https://spark-foundation-banksystem.herokuapp.com/api/users/' + id)
  return (  
    <>
    
      {isPending && <Loading />}
      {error && <NotFound />}
      {user && <UserProfile user={user}/>}
    </>
  );
}
 
export default User; 