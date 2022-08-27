import React, {Component} from "react";
import styled from "styled-components";
import Button from "./utils/button";
import Overview from "./overview";
import uniqid from "uniqid";



class Sidebar extends Component{
    constructor(){
        super ();
    
        this.state = {
    
          
          project: {
    
            projectName: '',
            projectDesc: '',
            projectId: uniqid(),
            tasks: [],
            task: {
    
              taskName: 'text',
              id: uniqid()
    
            },
    
          },
          projects: [],
    
        };

      
      };

     
      handleNAmeChange = (e) => {

        this.setState({
    
            project: {
                projectName: e.target.value,
                projectDesc: this.state.project.projectDesc,
                projectId: this.state.project.projectId,
            },
        })
    }

    handleDescChange = (e) => {

        this.setState({
    
            project: {
                projectDesc: e.target.value,
                projectName: this.state.project.projectName,
                projectId: this.state.project.projectId,
            },
        });
    };


    onSubmitTask = (e) => {
    
        e.preventDefault();
    
        this.setState({
    
            projects: this.state.projects.concat(this.state.project),
            project: {
               projectName: '',
               projectDesc: '',
               projectId: uniqid(),
              },
        });
    };


render (){

const {project, projects} = this.state;



    return(
    
        <SideWrapper onSubmit={this.onSubmitTask}>

            <Title>Projects</Title>

                <input
                placeholder="Project Name"
                onChange={this.handleNAmeChange}
                value={project.projectName}
                type="text"
                autoFocus
                />

                <input
                placeholder="Project Description"
                onChange={this.handleDescChange}
                value={project.projectDesc}
                type="text"
                
                />

            <Button  text="Add" add/>
            <Button text="Delete" del/>
            
            
            <Overview projects={projects}/>
            
            
        </SideWrapper>
    
    );
    }
}

const SideWrapper = styled.form

`
display: flex;
flex-direction: column;
background-color: ${({theme}) => theme.colors.sidebar};
height: calc(100vh - 100px);
width: 15vw;
align-items: center;

input{

    padding: 10px 20px;
    margin: 10px;
    border-radius: 0.5rem;

    border: 1px solid transparent;
}

`;


const Title = styled.h2

`
text-align: center;
`;





export default Sidebar;