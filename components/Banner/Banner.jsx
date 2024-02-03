import React from "react"
import useToggle from "../../hooks/useToggle"


export default function Banner({ children, className, ...rest}){

 
    
    return (<div className={`banner ${className}`} {...rest}>{children}</div>)
        
}