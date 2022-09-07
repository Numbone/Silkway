import React from 'react'
import s from './MyLabel.module.css'
const MyLabel = ({children,...props}) => {
    return (
        <div {...props} className={s.Mylabel}>
            {children}
        </div>
    )
}

export default MyLabel