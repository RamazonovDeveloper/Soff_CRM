import './App.css';

import SideBar from './components/side_bar/SideBar';
import All from './pages/All';
import New_post from './pages/New_post'

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { useState } from 'react';





function App() {

  const posts = JSON.parse(localStorage.getItem("Posts"))

  const [filter,setFilter] = useState('all')

  const [search, setSearch] = useState('')

  if(filter == 'all'){
    var modifiedPosts = posts
  }else{
    var modifiedPosts = posts.filter(item => item.status == filter)
  }

  if(search != ''){
    modifiedPosts = modifiedPosts.filter(item => item.title.includes(search))
  }
  


  return (
    <div className="App">
      
      <div className='main'>
        <SideBar/>

        <div className='right'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<All fullData={posts} search={search} setSearch={setSearch} data={modifiedPosts} state={filter} setState={setFilter}/>}/>
              <Route path='/new_post' element={<New_post/>}/>
            </Routes>
          </BrowserRouter>
        </div>
        
      </div>
    </div>
  );
}

export default App;
