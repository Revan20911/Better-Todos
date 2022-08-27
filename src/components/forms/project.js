import React from "react";
import styled from "styled-components";
import Button from "../utils/button";

const Project = ({onClick, id, projectName, description}) => {
    return(

        <ProjectWrapper 
        id={id}
        projectName={projectName}
        description={description}
        onClick={onClick}>
            <Title>{projectName}</Title>
            <p>{description}</p>

            <Button text="Add" add></Button>
            <Button text="Delete" del></Button>
        </ProjectWrapper>

    );

};

const ProjectWrapper = styled.div

`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 0.5rem;
 height: 15em;
 width: 12vw;
 background-color: ${({theme}) => theme.colors.sidebar};

 &:hover{

    background-color: ${({theme}) => theme.colors.background};
    cursor: pointer;

 }

 &:active, &:focus{

    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.header};
 }
 

`;

const Title = styled.h2

`
    font-size: 25px;
    align-text: center;
    color: 'black';
    

`;

export default Project;