import React from "react";
import Project from "./forms/project";


const Overview = (props) => {
    const { projects } = props;

    return (

        <div>
            {projects.map((project) => {

                return (
                    <Project 
                    id={project.projectId}
                    projectName = {project.projectName}
                    description = {project.projectDesc}
                    
                    />
                )
            })}
        </div>
    );
};




export default Overview;