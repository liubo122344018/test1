import React from 'react';
import Icon from '../Icon/Icon';
import { Menu } from 'antd';
import './leftMenu.less';
import { leftMenuData } from './constant'
const LeftMenu = () => {
    const { useState } = React;
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const menuWidth = isMenuOpen ? 200 : 26;
    const iconType = isMenuOpen ? 'icon-icon-test62' : 'icon-icon-test65';
    return (
        <div className='left-menu' style={{ width: `${menuWidth}px`, height: '100%' }}>
            <Icon className='taggle-icon' type={iconType} onClick={() => { setIsMenuOpen(prev => !prev) }} />
            {
                leftMenuData.map(item=>{
                    return(
                        <div key={item?.icon} className='menu-item'>
                            <Icon type={item?.icon} />
                            {isMenuOpen&&item?.title}
                        </div>
                    )
                })
            }
        </div>
    )
};
export default LeftMenu;