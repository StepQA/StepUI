import styled from 'styled-components';

import { colors, constants, typography } from '../../core';


export default function({
    type = "default",
    size = "medium",
    shape,
    loading
}) {

    const hasType = constants.types.indexOf(type) !== -1;
    const hasSize = constants.sizes.indexOf(size) !== -1;
    if (!hasType) {
        console.warn(`Invalid button type: ${type}`);
    }
    if (!hasSize) {
        console.warn(`Invalid button size: ${size}`)
    }
    const StyledButton = styled.button `
        border: 0;
        padding: 5px 8px;
        cursor: pointer;
        font-family: ${typography.base.fontFamily};
        color:${colors.foreground[type]};
        background:${colors.background[type]};
        font-size:${typography.sizes[size]};
        ${loading ? "filter:blur(1px); cursor:wait;": "cursor:pointer;"}
        ${shape === "circle" ? "border-radius:50%": ""}
            &:active {
              transition: all 0.2s; 
              filter: brightness(85%);
            }
            &:hover {
                transition: all 0.3s; 
                box-shadow: 0 4px ${colors.foreground[type]};
                top: -2px;
            }
            
        }
        `;
    return StyledButton;
}
