import axios from "../components/axios";
import React , {useState , useEffect} from 'react'
import DispalyUsers from "../components/DisplayUsers";


function UsersList() {
    const [users , setUsers ]= useState([]);

    useEffect ( () => {
      async function fetchData(){
        const request = await axios.get('/users/all', {new: true })
        setUsers(request.data)
        return request;
      }
      fetchData();
    },[]);

  return (
    <div>
      <DispalyUsers users={users} />
    </div>
  )
}

export default UsersList