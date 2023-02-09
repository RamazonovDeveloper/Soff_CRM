import React, { useRef, useState } from 'react'
import './new_post.css'
import arrow from '../assets/arrow-left.png'
import { useNavigate } from 'react-router-dom'

import timeImg  from '../assets/Icon.png'

function New_post() {

  const navigate = useNavigate()

  const titleInp = useRef()
  const [statusInp, setStatus] = useState('default')
  const dataInp = useRef()

  const setPosts = () => {
    let posts = JSON.parse(localStorage.getItem("Posts"))
    const newPost = {
      id:posts.length+1,
      title:titleInp.current.value,
      time:dataInp.current.value,
      status:statusInp
    }
    posts.push(newPost)
    localStorage.setItem("Posts", JSON.stringify(posts))
    titleInp.current.value = ''
    dataInp.current.value = ''
  }

  return (
    <div className='big'>
      <div className='main__field'>
          <div className='main__field-top'>
            <button onClick={() => navigate("/")}><img src={arrow} alt="" /></button>
            <p>New Post</p>
          </div>
          <div className='main__field-white new_field'>
            <p className='new_post_title'>Post Information</p>
            <div className='form'>
              <div className='input_styles'>
                <input ref={titleInp} type="text" placeholder='Title' />
              </div>
              <select name="" id="statusSelect" value={statusInp} onChange={(e) => setStatus(e.target.value)}>
                <option value="default" disabled selected>Status</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
              </select>
              <div className='input_styles'>
                <input type="text" placeholder='Time' ref={dataInp}/>
                <img src={timeImg} alt="" />
              </div>
              <button className='blue_button new_post_button' onClick={setPosts}>Submit</button>

            </div>
          </div>
        </div>
    </div>
  )
}

export default New_post
