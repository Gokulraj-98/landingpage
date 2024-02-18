import { useState } from 'react'
import Masthead from './Masthead'
import Icons from './Icons'
import Showcase from './Showcase'
import Testimonials from './Testimonials'
import Calltoaction from './Calltoaction'
import Footer from './Footer'
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const icons =[
    {
      name :"Fully Responsive",
      feature:"This theme will look great on any device, no matter the size!",
      icon:"bi-window"
    },
    {
      name :"Bootstrap 5 Ready",
      feature:"Featuring the latest build of the new Bootstrap 5 framework!",
      icon:"bi-layers"
    },
    {
      name :"Easy to Use",
      feature:"Ready to use with your own content, or customize the source files!",
      icon:"bi-terminal"
    }

  ]

  const showcases =[
    {
      name:"Fully Responsive Design",
      description:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      imageName:'url("src/assets/img/bg-showcase-1.jpg")',
      alignleft:false
    },
    {
      name:"Updated For Bootstrap 5",
      description:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      imageName:'url("src/assets/img/bg-showcase-2.jpg")',
      alignleft:true
    },
    {
      name:"Easy to Use & Customize",
      description:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      imageName:'url("src/assets/img/bg-showcase-3.jpg")',
      alignleft:false
    }
  ]

  const testimonial = [{
    name:"Margaret E.",
    review:"This is fantastic! Thanks so much guys!",
    imgPath:"src/assets/img/testimonials-1.jpg"
  },{
    name:"Fred S.",
    review:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
    imgPath:"src/assets/img/testimonials-2.jpg"
  },{
    name:"Sarah W.",
    review:"Thanks so much for making these free resources available to us!",
    imgPath:"src/assets/img/testimonials-3.jpg"
  }

]

  return (
    <>
      {/* <!-- Navigation--> */}
        <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <a class="navbar-brand" href="#!">Start Bootstrap</a>
                <a class="btn btn-primary" href="#signup">Sign Up</a>
            </div>
        </nav>
        <Masthead/>
        {/* displaing icons */}
        <section class="features-icons bg-light text-center">
        <div class="container">
        <div class="row">
          {
            icons.map((e,i)=>{
              return <Icons details={e} key={i}/>
            })
          }
          </div>
          </div>
             </section>

             {/* showcase */}

             <section class="showcase">
            <div class="container-fluid p-0"> 
            {
            showcases.map((e,i)=>{
              return <Showcase detail={e} key ={i} />
            })
          }
            </div>
             </section>
             <section class="testimonials text-center bg-light">
            <div class="container">
                <h2 class="mb-5">What people are saying...</h2>
                <div class="row">
                {
            testimonial.map((e,i)=>{
              return <Testimonials detail={e} key ={i} />
            })
          }
                </div>
            </div>
        </section>
        {/* <!-- Call to Action--> */}
        <Calltoaction/>
        {/* <!-- Footer--> */}
        <Footer/>
        
    </>
  )
}

export default App
