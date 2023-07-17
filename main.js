import './style.css'

document.addEventListener('DOMContentLoaded', function() {
    const showMenu = (toggleId,navId) => {
        const toggle = document.getElementById(toggleId)
        const nav = document.getElementById(navId)


        if(toggle && nav){
            toggle.addEventListener('click',()=>{
                nav.classList.toggle('show-menu')
            })
        }
    }
    showMenu('nav-toggle','nav-menu');

    const navLink = document.querySelectorAll('.nav__link')
    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show-menu')
    }
    navLink.forEach(l => l.addEventListener('click',linkAction))

    function actionModal(){
        const modal = document.getElementById('cv')
        const contentModal = document.querySelector('.container-cv')
        modal.classList.toggle('open-modal-cv')
        contentModal.classList.toggle('open-content-modal-cv')
    }
    const buttonModal = document.getElementById('button-open-modal')
    buttonModal.addEventListener('click',actionModal)
    const closeModal = document.getElementById('close-modal-cv');
    closeModal.addEventListener('click',actionModal)
    const closeModal2 = document.getElementById('close-modal-cv-2');
    closeModal2.addEventListener('click',actionModal)
    function scaleCV(){
        document.body.classList.add('scale-cv')
    }
    
    function removeScale(){
        document.body.classList.remove('scale-cv')
    }
    /*
    const toPDF = document.getElementById('to-pdf')
    const areaCV = document.getElementById('area-cv')

    const opciones = {
        margin: 0,
        filename: 'mi_div.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    function generatedPDF(){
        html2pdf().set(opciones)
        .from(areaCV)
        .save()
        .catch(err => console.log(err))
    }

    toPDF.addEventListener('click',(e)=>{
        e.preventDefault()
        generatedPDF()
    })
    */
});

