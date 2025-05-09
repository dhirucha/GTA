import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'


const App = () => {

 let [showContent, setShowContent] = useState(false)

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%"
    })
    .to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  useGSAP(()=> {

    if(!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut"
    })

    gsap.to(".sky", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.7",
      ease: "Expo.easeInOut"
    })


     gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.7",
      ease: "Expo.easeInOut"
    })

     gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.7",
      ease: "Expo.easeInOut"
    })

     gsap.to(".character", {
      scale: .8,
      x: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.7",
      ease: "Expo.easeInOut"
    })

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.7",
      ease: "Expo.easeInOut"
    })



    

    const main = document.querySelector(".main")

    main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth - .5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`
      });

      gsap.to(".sky", {
        x: xMove
      });

      gsap.to(".bg", {
        x: xMove * 1.7
      });
    })
  }, [showContent])

  return (
    <>
       <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
       <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
       </div>

       {showContent && <div className='main w-full bg-black rotate-[-10deg] scale-[1]'>
        <div className='"landing overflow-hidden relative w-full h-screen bg-black'>
          <div className='navbar absolute top-0 left-0 z-[10] w-full py-8 px-8'>
            <div className='logo flex gap-3 items-center'>
              <div className="lines flex flex-col gap-[4px]">
                <div className="line w-9 h-1 bg-white"></div>
                <div className="line w-6 h-1 bg-white"></div>
                <div className="line w-4 h-1 bg-white"></div>
              </div>
              <h3 className='text-3xl text-white'>Rockstar</h3>
            </div>
          </div>
          
          <div className="imagesdiv overflow-hidden relative w-full h-screen">
            <img className='sky absolute top-0 left-0 scale-[1.2] rotate-[-20deg] w-full h-full object-cover' src="./sky.png" alt="" />

            <img src="./bg.png" className='bg absolute top-0 left-0 scale-[1.2] rotate-[-15deg] w-full h-full object-cover' alt="" />

             <div className='text text-white flex flex-col gap-4 absolute top-5 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]'>
            <h1 className='text-9xl leading-none -ml-30'>grand</h1>
            <h1 className='text-9xl leading-none ml-20'>theft</h1>
            <h1 className='text-9xl leading-none -ml-30'>auto</h1>
          </div>

            <img className='character absolute -bottom-[65%] left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-20deg]' src="./girlbg.png" alt="" />

           
          </div>
          <div className='btmbar text-white absolute bottom-0 left-0 w-full py-12 px-8 bg-gradient-to-t from-black to-transparent'>
            <div className='flex gap-4 items-center'>
                <i className=" text-3xl ri-arrow-down-line"></i>
                <h3 className='text-xl font-mono'>Scroll down</h3>
            </div>

            <img className='h-[55px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./ps5.png" alt="" />
          </div>

        </div>
        <div className='w-full h-screen flex items-center justify-center px-10 bg-black overflow-hidden'>
          <div className="cntnr flex items-center w-full h-[70%] text-white">
          <div className="limg w-1/2 relative h-full" >
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.7]' src="./imag.png" alt="" />
          </div>
          <div className="rg w-[40%]">
            <h1 className='text-6xl'>Still running</h1>
             <h1 className='text-6xl'>Not Hunting</h1>
             <p className='mt-10 font-serif text-[1 rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus consequatur earum, enim eaque, quidem ipsum suscipit magnam quasi velit, quis ea hic corrupti.</p>
             <p className='mt-3 font-serif text-[1 rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam a quia alias magnam incidunt nostrum debitis eaque reprehenderit optio, sapiente possimus quis sunt, ipsam consectetur, excepturi suscipit! Explicabo dolorem velit iure accusamus maiores unde eum?</p>
             <p className='mt-3 font-serif text-[1 rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam a quia alias magnam incidunt nostrum debitis eaque reprehenderit optio, sapiente possimus quis sunt, ipsam consectetur, excepturi suscipit! Explicabo dolorem velit iure accusamus maiores unde eum?</p>

             <button className='bg-yellow-500 px-6 py-3 text-black text-1xl mt-4'>Download now</button>
          </div>
          </div>
        </div>
        </div>}
    </>
  )
}

export default App