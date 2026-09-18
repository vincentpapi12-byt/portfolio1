const ViewEl=document.getElementById("view")
const ContactEl=document.getElementById("contact")

const Projects=document.getElementById("projects-el")
const Contacts=document.getElementById("contacts-el")


const AllEl=document.getElementById("all")
const WebEl=document.getElementById("web")
const PythonEl=document.getElementById("python")
const JavascriptEl=document.getElementById("javascript")

const ProjectsEl = document.querySelectorAll(".cards-project")

function removeActive() {
   AllEl.classList.remove("active-filter")
   WebEl.classList.remove("active-filter")
   JavascriptEl.classList.remove("active-filter")
   PythonEl.classList.remove("active-filter")
}

WebEl.addEventListener("click", function() {
     removeActive()
     WebEl.classList.add("active-filter")

     ProjectsEl.forEach(function(project) {

     if (project.classList.contains("web")) {
         project.style.display = "flex"
     }
     else {
         project.style.display="none"
     }
    })

})

JavascriptEl.addEventListener("click", function() {
       removeActive()
       JavascriptEl.classList.add("active-filter")
    ProjectsEl.forEach(function(project) {
        if (project.classList.contains("javascript")) {
            project.style.display = "flex"
        }
        else {
            project.style.display = "none"
        }
    })
})

PythonEl.addEventListener("click" ,function() {
    removeActive()
    PythonEl.classList.add("active-filter")

    ProjectsEl.forEach(function(project){
        if (project.classList.contains("python")) {
            project.style.display="flex"
        }
        else {
              project.style.display="none"
        }
    })
})

AllEl.addEventListener("click", function() {
    removeActive()
    AllEl.classList.add("active-filter")
    ProjectsEl.forEach(function(project) {
     project.style.display="flex"
})
})

AllEl.classList.add("active-filter")


ViewEl.addEventListener("click", function() {
     Projects.scrollIntoView({ behavior: "smooth" })
})

ContactEl.addEventListener("click", function() {
    Contacts.scrollIntoView({ behavior: "smooth" })
})