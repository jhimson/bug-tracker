import React from 'react';
import ProjectList from './ProjectList';

const Projects = () => {
  const projectsList = [
    { projectName: 'Employee Management System', projectKey: 'EMSYS' },
    { projectName: 'Bug Tracking System', projectKey: 'BTSYS' },
  ];
  return <ProjectList projectsList={projectsList} />;
};

export default Projects;
