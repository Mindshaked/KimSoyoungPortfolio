
const covers = document.querySelectorAll(".project-cover")


const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting)
            
        })
    }, 
    {   
        rootMargin: "120px",

    }
);


        covers.forEach(cover => {
            observer.observe(cover);
        });

    
