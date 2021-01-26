import React from 'react';

// icons
import { FcDocument } from 'react-icons/fc';

const ProjectItem = ({ projectName, projectKey }) => (
  <div className="p-3 mb-4 bg-white rounded shadow-lg cursor-pointer hover:bg-blue-400 hover:text-white hover:font-bold">
    <div className="flex space-x-2">
      <div className="p-1 bg-white rounded-full">
        <FcDocument size="3em" />
      </div>
      <div>
        <h1 className="font-bold text-md">{projectName}</h1>
        <p className="text-gray-800 hover:font-bold">{projectKey}</p>
      </div>
    </div>
  </div>
);

export default ProjectItem;
