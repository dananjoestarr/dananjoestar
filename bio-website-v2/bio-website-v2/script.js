
const reveals = document.querySelectorAll('.reveal');

function revealScroll(){
  reveals.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 120;

    if(top < visible){
      el.classList.add('active');
    }
  });

  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;

  document.querySelector('.progress').style.width = progress + '%';
}

window.addEventListener('scroll', revealScroll);
revealScroll();
