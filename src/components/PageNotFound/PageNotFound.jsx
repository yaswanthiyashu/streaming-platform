import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './PageNotFound.css'
import {Button} from 'react-bootstrap'

function PageNotFound() {
  return (
    <div id="wrapper">
            <img src="https://i.imgur.com/qIufhof.png" height={500} alt="page not found"/>
            <Container className='container'>
                <h1 className='display-1'>404</h1>
                <Container></Container>
                <Button variant="success" as={NavLink} to="/">Home</Button>
            </Container>
        </div >
  )
}

export default PageNotFound