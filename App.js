 import { Routes,Route } from 'react-router-dom'
 import { Home } from './components/Home'
 import { User } from './components/User'
 import { Login } from './components/Login'
 import { Counter } from './components/Counter'

function App() {
  return (
   <div>
   <Routes>
   <Route path='/' element ={<Home/>}/>
   <Route path='login' element ={<Login/>}/>
   <Route path='/:userName' element ={<User date={new Date()}/>}/>
   <Route path='counter' element ={<Counter/>}/>
   </Routes>
   </div>
  );
}

export default App;