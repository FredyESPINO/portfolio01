import res from "../assets/restaurante.PNG"
import eco from "../assets/ecomerce.PNG"
import pin from "../assets/pins.PNG"

const len=[{
    idiom:'ESP',
    about:{
        title:"Acerca de mi",
        idiom:{
            idiom_title:"Nivel de inglés",
            idiom_button:"Mas detalles."
        },
        tecs:"Lenguajes de programación.",
        info:{
            info_title:"Antecedentes"
        }

    },
    projects:{
        title:"mis proyectos personales.",
        projects:[
            {titulo:"Landing Page Restaurent.",
            desc:"Practica de un landing page.",
            link:"https://animated-jalebi-8baf30.netlify.app/",
            githubLink:"https://github.com/FredyESPINO/restaurant_front",
            img:res
            },
            {titulo:"Ecomerce.",
            desc:"Practica de un ecomerce.",
            link:"https://ecomerce-portfolio-qdld-msy9dhpxs-fredyespino.vercel.app/",
            githubLink:"https://github.com/FredyESPINO/ecomerce_portfolio",
            img:eco
            },
            {titulo:"Clon de Pinterest.",
            desc:"Practica de un clon de Pinterest .",
            link:"https://brilliant-cendol-9bf65f.netlify.app/",
            githubLink:"https://github.com/FredyESPINO/socialapp-for-portfolio",
            img:pin
            },
        ]
        
    },
    contact:{
        title:"Contactame.",
        placeholder:{
            name:"Nombre...",
            subject:"Asunto...",
            email:"Email...",
            message:"Escribe aqui tu mensaje..."
        },
        button:"Envia tu correo...",
        miGithub:"Mi Github.",
        miLinkedin:"Mi LinkedIn."
    }
},
{
    idiom:'ENG',
    projects:{
        title:"my personal projects.",
                projects:[
            {titulo:"Landing Page Restaurant.",
            desc:"Practice of a landing page.",
            link:"https://animated-jalebi-8baf30.netlify.app/",
            githubLink:"https://github.com/FredyESPINO/restaurant_front",
            img:res
            },
            {titulo:"Ecomerce.",
            desc:"Practice for an ecomerce.",
            link:"https://ecomerce-portfolio-qdld-msy9dhpxs-fredyespino.vercel.app/",
            githubLink:"https://github.com/FredyESPINO/ecomerce_portfolio",
            img:eco
            },
            {titulo:"Pinterest clone.",
            desc:"A kinda Pinterest clone.",
            link:"https://brilliant-cendol-9bf65f.netlify.app/",
            githubLink:"https://github.com/FredyESPINO/socialapp-for-portfolio",
            img:pin
            },
        ]
    },
    about:{
        title:"About me",
        idiom:{
            idiom_title:"English level.",
            idiom_button:"More details."
        },
        tecs:"Programming languages.",
        info:{
            info_title:"Background."
        }
    },
    contact:{
        title:"Contact Me.",
        placeholder:{
            name:"Name...",
            subject:"Subject...",
            email:"Email...",
            message:"Write here your message ..."
        },
        button:"Send email.",
        miGithub:"My Github.",
        miLinkedin:"My LinkedIn."
    }
}]

export default len