import React, { useRef, useState } from 'react'
import './filters.css'
import searchIcon from '../../assets/search.png'
import { useNavigate } from 'react-router-dom'


function Filters(props) {

  const searchRef = useRef()
  
  const navigate = useNavigate()

  const num = (name) => {
    const selectedPosts =  props.tableData.filter(item => item.status == name)
    return selectedPosts.length
  }
  
  // const [status,setStatus] = useState('all')

  return (
    <div className='filters'>
      <div className='mine'>
        <div className='input_styles'>
          <input onInput={() => props.setSearch(searchRef.current.value)} ref={searchRef} type="text" placeholder='Search'/>
          <img  src={searchIcon} alt="" />
        </div>
        <button 
        className='blue_button' 
        onClick={() => navigate("/new_post")}
        >Create Post</button>
      </div>
      <div className='filters__filterButtons'>
        <div className={(props.active == 'all') ? "filters__filterButtons__but filters__filterButtons__but-active" : "filters__filterButtons__but"}
        onClick={() => props.setActive('all')}>
          <button>All statuses </button>
          <p>{props.tableData.length}</p>
        </div>
        <div 
        className={(props.active == 'Draft') ? "filters__filterButtons__but filters__filterButtons__but-active" : "filters__filterButtons__but"}
        onClick={() => props.setActive('Draft')}>
          <button>Draft</button>
          <p>{num("Draft")}</p>
        </div>
        <div 
        className={(props.active == 'Published') ? "filters__filterButtons__but filters__filterButtons__but-active" : "filters__filterButtons__but"}
        onClick={() => props.setActive('Published')}>
          <button>Published </button>
          <p>{num("Published")}</p>
        </div>
      </div>
    </div>
  )
}

export default Filters
