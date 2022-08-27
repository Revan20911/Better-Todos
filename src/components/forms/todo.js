import React from "react";
import styled from "styled-components";

const Todo = ({id, projectId, todoName, description, date, isCompleted}) => {

    return(
        
        <TodoWrapper
            id={id}
            projectId = {projectId}
            todoName = {todoName}
            description = {description}
            date = {date}
            isCompleted = {isCompleted}
        >

        </TodoWrapper>

    )

}

const TodoWrapper = styled.div

`
 height: 10vh;
 width: 50vw;
 background-color: ${({theme}) => theme.colors.sidebar};

`;

export default Todo;