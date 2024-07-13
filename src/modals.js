import Project, { projects } from './project';
import { displayProject, displayProjectList } from './display';

export function createNewProjectModal(list) {
  const modal = document.createElement('dialog');
  modal.classList.add('modal-project');

  const closeModal = document.createElement('button');
  closeModal.textContent = 'X';
  closeModal.classList.add('btn-cancel');

  closeModal.addEventListener('click', () => {
    modal.close();
  })

  const projectForm = document.createElement('form');

  const projectTitleDiv = document.createElement('div');
  const projectTitleLabel = document.createElement('label');
  projectTitleLabel.textContent = 'Project Title';
  const projectTitleInput = document.createElement('input');
  projectTitleInput.type = 'text';
  projectTitleInput.name = 'projectTitle';
  projectTitleDiv.appendChild(projectTitleLabel);
  projectTitleDiv.appendChild(projectTitleInput);

  const projectDueDateDiv = document.createElement('div');
  const projectDueDateLabel = document.createElement('label'); 
  projectDueDateLabel.textContent = 'Due Date';
  const projectDueDateInput = document.createElement('input');
  projectDueDateInput.type = 'date';
  projectDueDateInput.name = 'dueDate';
  projectDueDateDiv.appendChild(projectDueDateLabel);
  projectDueDateDiv.appendChild(projectDueDateInput);

  const projectSubmitButton = document.createElement('button');
  projectSubmitButton.textContent = 'Create Project';

  projectForm.appendChild(projectTitleDiv);
  projectForm.appendChild(projectDueDateDiv);
  projectForm.appendChild(projectSubmitButton);


  modal.appendChild(projectForm);
  modal.appendChild(closeModal);

  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newProject = new Project(projectTitleInput.value, projectDueDateInput.value);
    const newProjectDiv = document.createElement('div');
    newProjectDiv.classList.add('project');

    newProjectDiv.appendChild(displayProject(newProject));

    displayProjectList(projects, list)

    
    console.log(newProject);
    modal.close();
  })

  return modal;
  
}