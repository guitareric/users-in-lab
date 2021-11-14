import React from 'react'
import Table1 from '../../components/Table1'
import Table2 from '../../components/Table2'
import Table3 from '../../components/Table3'


export default function PageContent() {
  return (
    <div className='row'>
        <div className="col-sm-8" style={{minHeight:'100vh'}}>
          <Table1 />
        </div>
        
        <div className="col-sm-4">
        <div style={{minHeight:'50vh'}}>
          <Table2 />
        </div>
          <div style={{minHeight:'50vh'}}>
          <Table3 />
        </div>
        </div>
        </div>
  )
}

