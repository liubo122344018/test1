import React, { useRef, useEffect } from 'react'

function Icon(props){
    const {type,onClick} = props
    return (
        <i className={`iconfont ${type}`} onClick={onClick}/>
    )
}
export default Icon;