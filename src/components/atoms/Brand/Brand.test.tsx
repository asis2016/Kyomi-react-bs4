import React from 'react'
import Brand from './Brand'

import { Navbar } from 'react-bootstrap'

describe('Brand', ()=>{
    describe('render', ()=>{
        it('should be a div', ()=>{
            const {div}=render(
                <Navbar.Brand href="hotmail">
                    a
                </Navbar.Brand>
            )
        })
    })
})
