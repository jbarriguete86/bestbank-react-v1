import React from 'react'
import classnames from 'classnames'

export default function ContainerElements({children, className}){

    const allClasses = classnames(className, "container-elements")
    
return <div className={allClasses}>{children}</div>
}