import userImage from '../assets/images/user.jpg'
import axios from "../Features/axios";
import React , {useState , useEffect , useRef} from 'react'

const UserProfile = ({user}) => {

    const [users , setUsers ]= useState([]);
    const  selectRef = useRef(null);
    const inputREf = useRef(null);
    const [receiver , setReceiver ]= useState(null);
    const [sender , setSender ]= useState(null);
    const [amount ,setAmount] = useState(0);
    const [pressed , setPressed] = useState(false);
    useEffect ( () => {
      async function fetchData(){
        const request = await axios.get('/users/all', {new: true })
        setUsers(request.data)
        return request;
      }
      fetchData();
    },[]);
  
    const findUser = (name) => {
      const user = users.find(user => user.first_name === name);
      return user._id
    }
    const handleSubmit = async (user,value) => {
      if (value !== 'Receiver'){
      await setSender(findUser(user)) 
       const sender1=sender
       console.log(sender1)
      // setReceiver(value);
       await setReceiver(findUser(value)) 
        setPressed(true)
        selectRef.current.value = 'Receiver'
        inputREf.current.value='';
 
      
      }
 
      else {
          throw new Error ('Please select a receiver')
      }
      
    }
  
    
 
    useEffect( () => {
       if(pressed){
         transfer()
         setPressed(false)
       }
    
    } , [pressed])


const  transfer = async() => {
    const request = await axios.put(`/transfer/${sender}/${receiver}/${amount}`, {new: true })
    
    console.log(request)

  }





  return ( 
    <>
   
  <div class="top h-64 w-full bg-blue-600 overflow-hidden relative" >
    <img src="https://cdn.wallpapersafari.com/89/99/xp5O2G.jpg" alt="" className="bg w-full h-full object-cover object-center absolute z-0" />
    <div class="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
      <img src={user.image_url} className="h-24 w-24 object-cover rounded-full" alt={userImage} />
      <h1 class="text-2xl font-semibold">{user.first_name} {user.last_name}</h1>
     
    </div>
  </div>
  <div class="bg-white my-4 shadow p-8 rounded-lg ">
  <div className=' ml-20'>
    <div class="flex items-center mb-4">
        <h2 class="text-lg">Your Transaction Information</h2>
    </div>
    <div className='w-full'>
    <label for='sender' className='block text-sm mb-2'>From</label>
    <span className=' font-semibold '> {user.first_name}</span> 
    <label for='sender' className=' block text-sm mb-2'>To </label>
    
      <select ref={selectRef} className= " w-5/6  text-sm bg-gray-light text-gray-darkest rounded-1 p-3 focus:outline-none bg-gray-100 ">
      <option  > Receiver </option>
      {users.map((users,index) => {if(users.first_name !== user.first_name){return  <option  key={users._id}> {users.first_name}</option> } 
      else {return null}   })}  
       </select>
      
    <label className=' block text-sm mb-2'>Amount</label>
    <input onChange={e  =>setAmount(e.target.value) } ref={inputREf} type="text" placeholder='Amount' className='block w-5/6 flex-1 text-sm bg-gray-100 text-gray-darkest rounded-1 p-3 focus:'></input>
    
    <button className=' ml-16 mt-16 w-5/6 relative  h-fit px-4 py-2 text-xl border rounded bg-black text-white hover:bg-indigo-700 ' onClick={() => {
      handleSubmit(user.first_name ,selectRef.current.value);
      } 
    }>Send</button>
    
    </div>
    </div>
    </div>
  
    </>

   );
}
 
export default UserProfile;