import './App.css';

import logo from './assets/logo.svg'
import SideBar from './components/side_bar/SideBar';
import Filters from './components/status_filter/Filters';
import Table from './components/table/Table';
import All from './pages/All';
import New_post from './pages/New_post'

import {BrowserRouter, json, Route, Routes} from 'react-router-dom'
import { useEffect, useState } from 'react';


// localStorage.setItem("Posts", JSON.stringify(posts))



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
        
        {/* <All/> */}
        {/* <div className='main__field'>
          <div className='main__field-top'>
            <p>Posts</p>
          </div>
          <div className='main__field-white'>
            <Filters/>
            <Table tableData={posts}/>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
