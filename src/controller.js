import Project from './project.js';
import { format, startOfToday } from "date-fns";

// import createTodo from './todo.js';
import { saveItem, loadItem} from './storage.js';
import { displayProject, displayProjectList } from './display.js';
import { createButton } from './buttons.js';
import { createNewProjectModal, createNewTodoModal } from './modals.js';


export function initializeApp(projectContainerElement, sidebarElement) {
  let projects = loadItem('projects') || [];
  let todaysDate = format(startOfToday(), "MM/dd/yyyy");
  console.log(todaysDate);


  if (projects.length === 0) {
    const today = new Project('Today', `${todaysDate}`);
    projects.push(today);
    saveItem(projects);
  }

  function refreshPageView(project) {
    projectContainerElement.innerHTML = '';

    // const deleteProjectButton = createButton('Delete', () => {
    //   Project.deleteProject(project, projects);
    //   updateProjectList();
    //   saveItem(projects);
    //   projectContainerElement.innerHTML = '';
    // });

    // projectContainerElement.appendChild(deleteProjectButton);
    // deleteProjectButton.classList.add('btn', 'btn-delete-project');
    projectContainerElement.appendChild(displayProject(project, projects, updateProjectList()));

    const todoButton = createButton('Add Task', () => {
      const todoModal = createNewTodoModal((newTodo) => {
        projectContainerElement.innerHTML = ''
        project.addTodo(newTodo);
        saveItem(projects);
        projectContainerElement.appendChild(displayProject(project, projects, updateProjectList()));
        projectContainerElement.appendChild(todoButton);
        refreshPageView(project);
      })
      document.body.appendChild(todoModal);
      todoModal.showModal();
    });
    projectContainerElement.appendChild(todoButton);
    todoButton.classList.add('btn', 'btn-todo');
  }

  function onProjectSelect(project) {
    refreshPageView(project);
     // Remove 'selected' class from all project buttons
     document.querySelectorAll('.btn-sidebar').forEach(btn => {
      btn.classList.remove('btn-sidebar-active');
    });

    // Add 'selected' class to the selected project button
    const projectButtons = document.querySelectorAll('.btn-sidebar');
    projectButtons.forEach(btn => {
      if (btn.textContent === project.name) {
        btn.classList.add('btn-sidebar-active');
      }
    });
  }

  function updateProjectList() {
    sidebarElement.innerHTML = '';

    const newProjectButton = createButton('Create Project', () => {
      const projectModal = createNewProjectModal((newProject) => {
        projects.push(newProject)
        saveItem(projects);
        updateProjectList(projects);
        onProjectSelect(newProject);
      })
      document.body.appendChild(projectModal);
      projectModal.showModal();
    })
    sidebarElement.appendChild(newProjectButton);
    newProjectButton.classList.add('btn', 'btn-project');

    const projectList = displayProjectList(projects, onProjectSelect);
    sidebarElement.appendChild(projectList);
    console.log(projects)
  }


  updateProjectList(projects);

  onProjectSelect(projects[0]);
}