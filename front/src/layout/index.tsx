import styled, {css} from 'styled-components/native';
import React from 'react';
import {LayoutProps} from "./type.ts";
import {StyledLayout} from "./layout.config.ts";

export const Layout: React.FC<LayoutProps> = ({
                                                  children,
                                                  padding,
                                                  margin,
                                                  backgroundColor,
                                                  flex,
                                                  alignItems,
                                                  justifyContent,
                                                  customStyles,
                                                  ...rest
                                              }) => {
    return (
        <StyledLayout
            padding={padding}
            margin={margin}
            backgroundColor={backgroundColor}
            flex={flex}
            alignItems={alignItems}
            justifyContent={justifyContent}
            customStyles={customStyles}
            {...rest}
        >
            {children}
        </StyledLayout>
    );
};
