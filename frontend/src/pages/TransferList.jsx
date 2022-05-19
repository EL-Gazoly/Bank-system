import axios from "../Features/axios";
import React , {useState , useEffect} from 'react'
import DisplayTransfers from "../components/DisplayTrasfers";
import useFetch from '../Features/useFetch'
import NotFound from "./notFound";
import Loading from "./loading";
 
function TransferList() {
    const [transfers , setTransfers ]= useState([]);

    useEffect ( () => {
      async function fetchData(){
        const request = await axios.get('/transfer/table', {new: true })
        setTransfers(request.data)
        return request;
      }
      fetchData();
    },[]);
    // eslint-disable-next-line no-unused-vars
    const { data, isPending, error } = useFetch('https://team-el-gazoly-bank-system-main-k3vbm4kpjq-wm.a.run.app/api/transfer/'+'table')
    

  return (
    <div>
       {isPending && <Loading />}
      {error && <NotFound />}
      <DisplayTransfers transfers={transfers} />
      
    </div>
  )
}

export default TransferList