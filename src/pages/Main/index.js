import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import PageContent from './PageContent'
function MainPage() {
  return (
    <Container>
      <Header title={'users in lab'} size='lg'/>
      <PageContent/>
    </Container>
  )
}

export default MainPage
