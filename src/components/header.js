import React from "react";
import styled from "styled-components";


const Header = () => {
    return(

        <HeaderWrapper>

        </HeaderWrapper>

    );
};

const HeaderWrapper = styled.header

`
display: flex;
padding: 20px;
background-color: ${({theme}) => theme.colors.header};
color: ${({ theme }) => theme.colors.background};

align-items: center;

height: 100px;
width: 100vmax;



`;

export default Header;