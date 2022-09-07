import React from 'react'
import s from './Input.module.css'

const MyInput = React.forwardRef((props,ref) => {
  return (
    <input ref={ref} className={s.MyInput} {...props}></input>
  )
})

export default MyInput