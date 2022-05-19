import { useParams } from "react-router-dom";
import useFetch from '../Features/useFetch'
import UserProfile from "../components/userProfile";
import NotFound from "./notFound";
import Loading from "./loading";
const User = () => {
  const { id } = useParams()
  const { data:user, isPending, error } = useFetch('https://team-el-gazoly-bank-system-main-k3vbm4kpjq-wm.a.run.app/api/users/' + id)
  return (  
    <>
    
      {isPending && <Loading />}
      {error && <NotFound />}
      {user && <UserProfile user={user}/>}
    </>
  );
}
 
export default User; 