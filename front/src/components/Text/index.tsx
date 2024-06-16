import styled from 'styled-components/native';
import {TextProps} from "./type.ts";


export const Text = styled.Text<TextProps>`
  color: ${(props) => props.color || props.theme.titleText};
  font-size: ${(props) => props.fontSize || 16}px;
  font-weight: ${(props) => props.fontWeight || 'normal'};
`;
