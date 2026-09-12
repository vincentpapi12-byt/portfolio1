const ViewEl=document.getElementById("view")
const ContactEl=document.getElementById("contact")

const Projects=document.getElementById("projects-el")
const Contacts=document.getElementById("contacts-el")


ViewEl.addEventListener("click", function() {
     Projects.scrollIntoView({ behavior: "smooth" })
})

ContactEl.addEventListener("click", function() {
    Contacts.scrollIntoView({ behavior: "smooth" })
})