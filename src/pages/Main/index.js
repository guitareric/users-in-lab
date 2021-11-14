import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Table1 from '../../components/Table1'
import Table2 from '../../components/Table2'
import Table3 from '../../components/Table3'

function MainPage() {
  return (
    <Container>
      <Header />
      <div className="row">
        <div className="col-sm-8">
          <Table1 />
        </div>
        <div className="col-sm-4">
          <Table2 />
        </div>
      </div>
    </Container>
  )
}

export default MainPage
