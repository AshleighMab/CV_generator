// function stars(){
//     let count = 50;
//     let scene = document.querySelector('')
//     while(i<count){
//         let star = document.createElement('i')
//         let x = Math.floor(Math.random() * window.innerWidth);

//         let duration = Math.random()*1;

//         let h = Math.random() * 100;

//         star.style.left = x + 'px';
//         star.style.width = 1 + 'px';
//         star.style.heigh = 50 + h+ 'px';
//         star.style.animationDuration = duration + 's';
 
//         scene.appendChild(star);
//         i++
//     }
// }

// stars();


for (let i = 0; i < 3; i++) {
    const flame = document.createElement("div");
    flame.classList.add("flame");
    document.querySelector(".rocket").appendChild(flame);
  }
  