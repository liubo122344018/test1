import React, { useRef, useEffect } from 'react'

function Icon(props){
    const {type,onClick} = props
    return (
        <span className={props?.className}>
        <i className={`iconfont ${type}`} onClick={onClick}/>
        </span>
    )
}
export default Icon;