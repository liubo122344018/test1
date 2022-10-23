import { createFromIconfontCN } from '@ant-design/icons';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
const IconPro = (props)=>{
    return(
        <IconFont type={props?.type} style={{color:props?.color}} className={props?.className} />
    )
}
export default IconPro;