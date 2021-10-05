const sections = document.querySelectorAll('section')
const allLi = document.querySelectorAll('.container ul li')
const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', ()=> {
    let present ='';
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY > sectionTop -(sectionHeight)/4){
            present = section.getAttribute('id');
            
        }
    })
    allLi.forEach(li =>{
        li.classList.remove('active')
        if(li.classList.contains(present)){
            li.classList.add('active')
            console.log(li)
        }
    })

    if(window.scrollY > 100){
        toTop.classList.add('show')
    }else{
        toTop.classList.remove('show')
    }
})