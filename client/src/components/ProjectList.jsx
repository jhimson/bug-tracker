import React from 'react';

// icons
import { AiOutlineFileAdd } from 'react-icons/ai';
import { IoIosArrowUp } from 'react-icons/io';

// components
import ProjectItem from './ProjectItem';

const ProjectList = ({ projectsList }) => (
  <div className="w-full p-5">
    <div className="flex items-start justify-between">
      <div className="flex items-center space-x-2">
        <IoIosArrowUp
          size="2em"
          className="mb-2 cursor-pointer hover:text-green-500"
        />
        <h1 className="mb-2 text-lg font-bold">Projects</h1>
      </div>
      <AiOutlineFileAdd size="2em" className="cursor-pointer" />
    </div>
    {projectsList.map((project) => (
      <ProjectItem
        projectName={project.projectName}
        projectKey={project.projectKey}
      />
    ))}
  </div>
);

export default ProjectList;
