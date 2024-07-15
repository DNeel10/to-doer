import Project, { projects } from './project.js';
import createTodo from './todo.js';
import { displayProject, displayProjectList } from './display.js';
import { createButton } from './buttons.js';
import { createNewProjectModal, createNewTodoModal } from './modals.js';


export function initializeApp(projectContainerElement, projectListElement, sidebarElement) {
  const today = new Project('Today', 'Today');

  const todo = createTodo('First Item', 'Create your own items to complete', 'Due Date', 'High Priority');
  today.addTodo(todo);

  console.log(projects);

  function refreshPageView(project) {
    projectContainerElement.innerHTML = '';
    projectContainerElement.appendChild(displayProject(project));

    const todoButton = createButton('Create To-Do', () => {
      const todoModal = createNewTodoModal(project, (newTodo) => {
        projectContainerElement.innerHTML = ''
        project.addTodo(newTodo);
        projectContainerElement.appendChild(displayProject(project));
        projectContainerElement.appendChild(todoButton);
        refreshPageView(project);
      })
      document.body.appendChild(todoModal);
      todoModal.showModal();
    });
    projectContainerElement.appendChild(todoButton);
    todoButton.classList.add('btn', 'btn-todo');

    const deleteProjectButton = createButton('Delete Project', () => {
      Project.deleteProject(project);
      updateProjectList();
      projectContainerElement.innerHTML = '';
    });

    deleteProjectButton.classList.add('btn', 'btn-delete-project');
    projectContainerElement.appendChild(deleteProjectButton);
  }

  function onProjectSelect(project) {
    refreshPageView(project);
  }



  function updateProjectList() {
    projectListElement.innerHTML = '';
    const projectList = displayProjectList(projects, onProjectSelect);
    projectListElement.appendChild(projectList);
  }

  updateProjectList();

  const newProjectButton = createButton('Create Project', () => {
    const projectModal = createNewProjectModal((newProject) => {
      updateProjectList();
      onProjectSelect(newProject);
    })
    document.body.appendChild(projectModal);
    projectModal.showModal();
  })
  sidebarElement.appendChild(newProjectButton);
  newProjectButton.classList.add('btn', 'btn-project');

  onProjectSelect(projects[0]);
}