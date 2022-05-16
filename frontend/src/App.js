import Home from './/pages/Home';
import UsersList from './pages/usersList';
import TransferList from './pages/TransferList';
import  User from './pages/findUser'
import Header from './components/Header'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import NotFound from './pages/notFound';
export default function App() {
  return (
    <>
     <Header />
     <Router>
      
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/table' element={<TransferList />} />
      <Route path='/users' element={<UsersList />}/>
      <Route path='/users/:id' element={<User />}/>
      <Route path='*' element={<NotFound />}/>
   

      </Routes>
    
      </Router>
   
    </> 
  )
}