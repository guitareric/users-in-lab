import React from 'react'
import Table from '../../components/Table'

export default function PageContent() {
  return (
    <div className="row">
      <div className="col-sm-8" style={{ minHeight: '100vh' }}>
        <Table title="cleanroom" />
      </div>

      <div className="col-sm-4">
        <div style={{ minHeight: '50vh' }}>
          <Table title="prototyping lab" />
        </div>
        <div style={{ minHeight: '50vh' }}>
          <Table title="backend lab" />
        </div>
      </div>
    </div>
  )
}
