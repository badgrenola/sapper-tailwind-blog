import { Areo } from './Areo'
import { AreoBrowser } from './AreoBrowser'
import { JunoObserver } from './JunoObserver'

const allProjects = [Areo, AreoBrowser, JunoObserver]

function getProjectsObject() {
    let projects = {}
    allProjects.forEach(project => {
        projects[project.slug] = project
    })
    return projects
}

const projects = getProjectsObject()
export { projects }