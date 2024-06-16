import styled, {css} from "styled-components/native";
import {LayoutProps} from "./type.ts";
import {ViewStyle} from "react-native";

const applyCustomStyles = (customStyles?: ViewStyle) => {
    if (!customStyles) return '';
    return css(customStyles as any);
};


export const StyledLayout = styled.View<LayoutProps>`
    ${(props) => css`
        flex: ${props.flex || 1};
        background-color: ${props.backgroundColor || props.theme.background};
        padding: ${props.padding || 5}px;
        margin: ${props.margin || 0}px;
        align-items: ${props.alignItems || 'stretch'};
        justify-content: ${props.justifyContent || 'flex-start'};
        ${applyCustomStyles(props.customStyles)};
    `}
`;
