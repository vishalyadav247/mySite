import React from 'react'

export default function HeaderAnimation() {
    setTimeout(()=>{
        let header=document.getElementById('appHeader');
        // let logo=document.getElementById('logoImg');
       if(header){
        window.addEventListener('scroll',()=>{
            if(window.scrollY >= 70){
                header.style.top="0px";
                // logo.style.height="35px";
                // logo.style.width="280px"
            }else{
                header.style.top="-65px"
                // logo.style.height="35px";
                // logo.style.width="280px"
            }
        })
       }
      },500)
  return (
    <div>
      
    </div>
  )
}
