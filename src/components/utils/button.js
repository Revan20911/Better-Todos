import React from "react";
import styled, {css} from "styled-components";


const Button = ({del, add, text}) => {

    return(
        <ButtonWrapper

            type="submit"
            
            del={del}
            add={add}
        >{text}</ButtonWrapper>
    );
};

const ButtonWrapper = styled.button

`
width: 95%;
height: 35px;


margin 10px;
align-text: center;
border-radius: 0.5rem;
border: 1px solid transparent;
font-size: 24px;
font-family: sans-serif;
text-align: center;

&:hover{

    cursor: pointer;
}

${(props) => props.del && css 
    `
    background-color: ${({theme}) => theme.colors.red};
    color: ${({theme}) => theme.colors.white};

    &:hover{

        background-color: ${({theme}) => theme.colors.lightred};
    }
`}


${(props) => props.add && css 
    `
    background-color: ${({theme}) => theme.colors.green};
    color: ${({theme}) => theme.colors.white};

    &:hover{

        background-color: ${({theme}) => theme.colors.lightgreen};
    }
`}


`;


export default Button;