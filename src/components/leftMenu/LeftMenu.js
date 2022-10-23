import React from 'react';
import Icon from '../Icon/Icon';
import { Menu } from 'antd';
import './leftMenu.less';
import { leftMenuData } from './constant'
import {Link} from 'react-router-dom'
const LeftMenu = (props) => {
    const { useState } = React;
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const menuWidth = isMenuOpen ? 130 : 26;
    const iconType = isMenuOpen ? 'icon-icon-test62' : 'icon-icon-test65';
    console.log(props)
    return (
        <div className='left-menu' style={{ width: `${menuWidth}px`, height: '100%' }}>
            <Icon className='taggle-icon' type={iconType} onClick={() => { setIsMenuOpen(prev => !prev) }} />
            {
                leftMenuData.map(item=>{
                    return(
                        <div key={item?.icon} className='menu-item'>
                            <Icon type={item?.icon} />
                            <Link to={item?.path}>{isMenuOpen&&item?.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    )
};
export default LeftMenu;