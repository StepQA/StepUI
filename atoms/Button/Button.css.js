import { colors, constants, typography } from '../../core'
export default function({
    type = "default",
    size = "medium",
    shape
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
    switch (size) {
        case "large":

            break;
        case "medium":

            break;
        case "small":

            break;
        case "tiny":

            break;
    }




    return style;
}
