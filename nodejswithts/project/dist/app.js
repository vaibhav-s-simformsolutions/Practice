"use strict";
function validate(validateinput) {
    let isvalid = true;
    if (validateinput.required) {
        isvalid = isvalid && validateinput.value.toString().trim().length !== 0;
    }
    if (validateinput.minLength != null) {
        if (typeof validateinput.value === 'string') {
            isvalid =
                isvalid && validateinput.value.length > validateinput.minLength;
        }
        else {
            isvalid = isvalid && +validateinput.value > validateinput.minLength;
        }
    }
    console.log(isvalid);
    return isvalid;
}
class ProjectState {
    constructor() {
        this.projectlist = [];
    }
    static getinstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title, description, numOfPeoples) {
        const newProject = {
            title,
            description,
            people: numOfPeoples
        };
        this.projectlist.push(newProject);
    }
}
const projectstate = ProjectState.getinstance();
class ProjectList {
    constructor(type) {
        this.type = type;
        this.templateElement = (document.getElementById('project-list'));
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.attach();
        this.renderContent();
    }
    renderContent() {
        const listid = `${this.type}`;
        this.element.querySelector('ul').id = listid;
        this.element.querySelector('h2').textContent =
            this.type.toUpperCase() + 'Projects';
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
class ProjectInput {
    constructor() {
        this.templateElement = (document.getElementById('project-input'));
        this.hostElement = document.getElementById('app');
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleElement = (this.element.querySelector('#title'));
        this.descriptionElement = (this.element.querySelector('#description'));
        this.peopleElement = (this.element.querySelector('#people'));
        this.configure();
        this.attach();
    }
    getuservalidate() {
        const entertitle = this.titleElement.value;
        const enterdescription = this.descriptionElement.value;
        const enterpeople = this.peopleElement.value;
        const titlevalidate = {
            value: entertitle,
            required: true,
            minLength: 5
        };
        const descriptionvalidate = {
            value: enterdescription,
            required: true,
            minLength: 10
        };
        const peoplevalidate = {
            value: enterpeople,
            required: true,
            minLength: 1
        };
        if (!validate(titlevalidate) &&
            !validate(descriptionvalidate) &&
            !validate(peoplevalidate)) {
            alert('Invalid Input !!!');
            return;
        }
        else {
            this.cleardata();
            return [entertitle, enterdescription, +enterpeople];
        }
    }
    cleardata() {
        this.titleElement.value = '';
        this.peopleElement.value = '';
        this.descriptionElement.value = '';
    }
    submitHandler(event) {
        event.preventDefault();
        const inputdata = this.getuservalidate();
        if (Array.isArray(inputdata)) {
            const [title, desc, people] = inputdata;
            projectstate.addProject(title, desc, people);
        }
    }
    configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }
    attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}
const tmp3 = new ProjectList('finished');
const tmp2 = new ProjectList('active');
const tmp = new ProjectInput();
