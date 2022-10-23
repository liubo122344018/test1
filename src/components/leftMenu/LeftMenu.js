import React from 'react';
import Icon from '../Icon/Icon';
import './leftMenu.less';
import {leftMenuData} from './constant'
const LeftMenu = () => {
    const { useState } = React;
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const menuWidth = isMenuOpen ? 200 : 0;
    const iconType = isMenuOpen ? 'icon-icon-test62' : 'icon-icon-test65';
    console.log(leftMenuData)
    return (
        <div className='left-menu' style={{ width: `${menuWidth}px`, height: '100%' }}>
            <Icon type={iconType} onClick={() => { setIsMenuOpen(prev => !prev) }} />
        
        </div>
    )
};
export default LeftMenu;