
// making a smooth scroll
document.querySelector('.nav--links').addEventListener('click', function(e){
     e.preventDefault()
     if(e.target.classList.contains('nav--link')){
         const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behaviour:'smooth'})
    }
 })

// MODAL WINDOW ACTIONS
 const openBtn = document.querySelectorAll('.btn--show--modal')
 const closeBtn = document.querySelector('.btn--close--modal')
 const modal = document.querySelector('.modal')
 const overlay = document.querySelector('.overlay')


 closeBtn.addEventListener('click',closeModal)

 function openModal(){
     modal.classList.remove('hidden')
     overlay.classList.remove('hidden')
 }

 for (let i = 0; i < openBtn.length; i++)
 openBtn[i].addEventListener('click', openModal);

//OR WE CAN LOOP USING FOR EACH
// openBtn.forEach( btn => {
//     btn.addEventListener('click',openModal)
// })

 function closeModal(){
     modal.classList.add('hidden')
     overlay.classList.add('hidden')
 }

