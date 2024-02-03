import React from 'react'
import classnames from 'classnames'

export default function Container({children, className, ...rest}){
    const allClasses = classnames(className, "container")
    
return <div className={allClasses}>{children}</div>
}