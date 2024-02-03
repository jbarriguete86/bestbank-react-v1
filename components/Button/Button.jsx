import React from "react"
import classnames from "classnames"

export default function Button({ children, variant, className, ...rest}) {
    

    let variantClass = variant && `button-${variant}`
    const allClasses = classnames( variantClass, className)

    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}