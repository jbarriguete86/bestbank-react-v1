import React from 'react'
import Button from '../Button/Button'
import { GiHamburgerMenu } from "react-icons/gi"
import { HeaderContext } from './Header'

export default function HamburgerIcon(){

    const{toggleOpen, open} =React.useContext(HeaderContext)


    return (
        <>
            {open ? (<Button onMouseDown={()=>{toggleOpen()}} onClick={()=>{toggleOpen()}} className="close-options">X</Button>) : (<Button onMouseDown={()=>{toggleOpen()}} onClick={()=>{toggleOpen()}}><GiHamburgerMenu className='hamburger-icon'/></Button>)}
            
        </>
    )
}