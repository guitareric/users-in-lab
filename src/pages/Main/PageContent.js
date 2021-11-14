import React from 'react'
import Table from '../../components/Table'
import UpdateTime from '../../components/UpdateTime'

export default function PageContent() {
  return (
    <>
      <div className="myheading">
        <h1 className="text-uppercase text-primary">users in lab</h1>
      </div>
      <div className="myheading">
        <h5>
          <UpdateTime />
        </h5>
      </div>
      <div className="row">
        <div className="col-sm-6" style={{ minHeight: '100vh' }}>
          <Table title="cleanroom" />
        </div>

        <div className="col-sm-6">
          <Table title="prototyping lab" />
          <Table title="backend lab" />
        </div>
      </div>
    </>
  )
}
