import React from 'react';
import { useBoolean } from 'ahooks';
import IconPro from '../iconPro/IconPro'
import './leftMenu.less'
const LeftMenu = () =>{
    const [isOpen, { togOpen, setOpenTrue, setOpenFalse }] = useBoolean(true);
    return(
        <div className='left-menu' style={{width:'200px',height:'100%'}}>   
            <IconPro type='icon-tuichu' className='toggle-icon' />
            LeftMenu
        </div>
    )
};
export default LeftMenu;