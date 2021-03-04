interface Validate {
    value: string | number;
    required?: boolean;
    minLength?: number;
}

function validate(validateinput: Validate): boolean {
    let isvalid = true;
    if (validateinput.required) {
        isvalid = isvalid && validateinput.value.toString().trim().length !== 0;
    }
    if (validateinput.minLength != null) {
        if (typeof validateinput.value === 'string') {
            isvalid =
                isvalid && validateinput.value.length > validateinput.minLength;
        } else {
            isvalid = isvalid && +validateinput.value > validateinput.minLength;
        }
    }
    console.log(isvalid);
    return isvalid;
}

//state Management...
class ProjectState {
    private projectlist: any[] = [];
    private static instance: ProjectState;
    private constructor() {}
    static getinstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }
    addProject(title: string, description: string, numOfPeoples: number) {
        const newProject = {
            title,
            description,
            people: numOfPeoples
        };
        this.projectlist.push(newProject);
    }
}
const projectstate = ProjectState.getinstance();
//project input
class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    constructor(private type: 'active' | 'finished') {
        this.templateElement = <HTMLTemplateElement>(
            document.getElementById('project-list')!
        );
        this.hostElement = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = <HTMLFormElement>importedNode.firstElementChild;
        this.element.id = `${this.type}-projects`;
        this.attach();
        this.renderContent();
    }

    private renderContent() {
        const listid = `${this.type}`;
        this.element.querySelector('ul')!.id = listid;
        this.element.querySelector('h2')!.textContent =
            this.type.toUpperCase() + 'Projects';
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

//project input
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleElement: HTMLInputElement;

    descriptionElement: HTMLInputElement; 
    peopleElement: HTMLInputElement;
    constructor() {
        this.templateElement = <HTMLTemplateElement>(
            document.getElementById('project-input')!
        );
        this.hostElement = <HTMLDivElement>document.getElementById('app')!;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );
        this.element = <HTMLFormElement>importedNode.firstElementChild;
        this.element.id = 'user-input';
        this.titleElement = <HTMLInputElement>(
            this.element.querySelector('#title')
        );
        this.descriptionElement = <HTMLInputElement>(
            this.element.querySelector('#description')
        );
        this.peopleElement = <HTMLInputElement>(
            this.element.querySelector('#people')
        );

        this.configure();
        this.attach();
    }

    private getuservalidate(): [string, string, number] | void {
        const entertitle = this.titleElement.value;
        const enterdescription = this.descriptionElement.value;
        const enterpeople = this.peopleElement.value;

        const titlevalidate: Validate = {
            value: entertitle,
            required: true,
            minLength: 5
        };
        const descriptionvalidate: Validate = {
            value: enterdescription,
            required: true,
            minLength: 10
        };
        const peoplevalidate: Validate = {
            value: enterpeople,
            required: true,
            minLength: 1
        };
        if (
            !validate(titlevalidate) &&
            !validate(descriptionvalidate) &&
            !validate(peoplevalidate)
            //   entertitle.trim().length === 0 ||
            //   enterdescription.trim().length === 0 ||
            //   enterpeople.trim().length === 0
        ) {
            alert('Invalid Input !!!');
            return;
        } else {
            this.cleardata();
            return [entertitle, enterdescription, +enterpeople];
        }
    }
    private cleardata() {
        this.titleElement.value = '';
        this.peopleElement.value = '';
        this.descriptionElement.value = '';
    }
    private submitHandler(event: Event) {
        event.preventDefault();
        const inputdata = this.getuservalidate();
        if (Array.isArray(inputdata)) {
            const [title, desc, people] = inputdata;

            projectstate.addProject(title, desc, people);
        }
        // console.log(inputdata);
        // console.log(this.titleElement.value);
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler.bind(this));
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const tmp3 = new ProjectList('finished');
const tmp2 = new ProjectList('active');
const tmp = new ProjectInput();
