import React from "react";
import styled from "styled-components";


const Input = (props, onChange) => {

    const {project} = props;
    

    

    return(

        <InputWrapper >
            <input 
            placeholder="Project Name" 
            onChange={onChange} 
            value={props.projectName}
            type="text"
            id="projectInput"
            
            />

          
            <input placeholder="Description" onChange={onChange} 
            value={project.projectDesc}></input>
        </InputWrapper>
    );

}; 


const InputWrapper = styled.div

`
display: flex;
flex-direction: column;
width: 100%;
height: fit-content;

input{

    margin: 10px;
    
}


`;

export default Input;
