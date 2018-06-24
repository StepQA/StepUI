const colors = {
    navy:"#001F3F",
    blue:"#0074D9",
    aqua: "#7FDBFF",
    teal: "#39CCCC",
    olive: "#3D9970",
    green: "#2ECC40",
    lime: "#01FF70",
    yellow: "#FFDC00",
    orange: "#FF851B",
    //TODO find a AAA compliant red combination
    red: "#FF4136",
    maroon: "#85144b",
    fuchsia: "#F012BE",
    purple: "#B10DC9",
    black: "#111111",
    gray: "#AAAAAA",
    silver: "#DDDDDD",
    white: "#FFFFFF"
    
};


export default {
    colors: {
        
    },
    foreground: {
        primary: colors.aqua,
        success: colors.navy,
        danger: colors.white,
        warning: colors.maroon,
        default: colors.navy
    },
    background: {
        primary: colors.navy,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow,
        default: colors.gray
    }
};
