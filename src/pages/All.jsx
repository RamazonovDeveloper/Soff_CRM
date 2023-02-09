import React from 'react'
import Filters from '../components/status_filter/Filters'
import Table from '../components/table/Table'
import './all.css'

export default function All(props) {

  return (
    <div>
      <div className='main__field'>
          <div className='main__field-top'>
            <p>Posts</p>
          </div>
          <div className='main__field-white'>
            <Filters tableData={props.fullData} search={props.search} setSearch={props.setSearch} active={props.state} setActive={props.setState}/>
            <Table className="table" tableData={props.data}/>
          </div>
        </div>
    </div>
  )
}
