import { colors, constants, typography } from '../../core';


export default function({
    type = "default",
    size = "medium",
    shape,
    loading
}) {
    const style = {
        border: "0",
        padding: "5px 8px",
        cursor: "pointer",
        ...typography.base
    };
    if (constants.types.indexOf(type) !== -1) {
        style.color = colors.foreground[type];
        style.background = colors.background[type];
    } else {
        console.warn(`Invalid button type: ${type}`);
    }
    if(constants.sizes.indexOf(size) !== -1){
     style.fontSize = typography.sizes[size];   
    } else {
        console.warn(`Invalid button size: ${size}`)
    }
    if(loading){
        style.filter = "blur(1px)";
        style.cursor = "wait";
    }
    
    if(shape === "circle"){
        style.borderRadius = "50%";
    }
    
    return style;
}
