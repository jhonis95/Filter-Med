document.addEventListener("astro:page-load",()=>{
    const observer= new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('mostrar')
            }
        })
    });
    
    const hiddenElemets= document.querySelectorAll('.esconder')
    hiddenElemets.forEach((el)=>{observer.observe(el)})
})