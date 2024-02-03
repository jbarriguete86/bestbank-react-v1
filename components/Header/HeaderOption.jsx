import React from 'react'
import Button from '../Button/Button'
import { HeaderContext } from './Header'

export default function HomeHeaderOption({children, className}){

    const {handleClick}= React.useContext(HeaderContext)


    return (
        <Button onMouseDown={()=>{handleClick({children})}}  className={`header-btn ${className && className}`}>{children}</Button>
    )
}