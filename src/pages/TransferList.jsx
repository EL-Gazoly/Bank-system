import axios from "../Features/axios";
import React , {useState , useEffect} from 'react'
import DisplayTransfers from "../components/DisplayTrasfers";

 
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

  return (
    <div>

      <DisplayTransfers transfers={transfers} />
    </div>
  )
}

export default TransferList