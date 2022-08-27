import React from "react";
import styled from "styled-components";
import Sidebar from "./sidebar";
import Overview from "./overview";



const Main = () => {
    return(
        <MainWrapper>

            <Sidebar/>

           


        </MainWrapper>
    )
}

const MainWrapper = styled.main
`

display: flex;
flex-direction: column;
align-items: left;
height:inherit;
min-height: calc(100vh - 120px - 50px);

background-color: ${({ theme }) => theme.colors.background};

`;

export default Main;
