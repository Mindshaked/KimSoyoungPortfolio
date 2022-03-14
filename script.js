
const covers = document.querySelectorAll(".project-cover")


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            
        })
    }, 
    {   
        rootMargin: "140px",

    }
);


        covers.forEach(cover => {
            observer.observe(cover);
        });

    
const gtaCover = document.getElementById("gta");
const projectInfo = document.getElementById("gta-info")


gtaCover.addEventListener("mouseover", (e) => {
    projectInfo.style.opacity = "50%";
});