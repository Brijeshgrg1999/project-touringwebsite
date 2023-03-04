import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'




export const pageLinks = [
    { id : 1 , href:'#home' , text : 'home' },
    { id : 2 , href:'#about' , text : 'about' },
    { id : 3 , href:'#services' , text : 'services' },
    { id : 4 , href:'#tours' , text : 'tours' },
];


export const socialLinks = [
            {id : 1 , href : "facebook.com" , icon :'fab fa-facebook'},
            {id : 2 , href : "facebook.com" , icon :'fab fa-twitter'},
            {id : 3 , href : "facebook.com" , icon :'fab fa-squarespace'}
] ;


export const services = [
    {id : 1 , icon : 'fas fa-wallet fa-fw' , title : 'saving money ' , text:'save money from this website '},
    {id : 2 , icon : 'fas fa-tree fa-fw' , title : 'endless hiking' , text:'enjoy endless hike '},
    {id : 3 , icon : 'fas fa-socks fa-fw' , title : 'amazing comfort' , text:'feel the comfort '},
    
]



export const tours =[
    {id:1 ,image:tour1, date :'123' , title:'abc' ,location:'india ', text:'asdfasdaf' , subtext:'6 days' , price:'500'},
    {id:2 , image:tour2,date :'23' , title:'asd' , location:'nepal ',text:'asdfasd'  , subtext:'6 days' , price:'500'},
    {id:3 , image:tour3,date :'23' , title:'sss' ,location:'hongkong', text:'asdfasdf'  , subtext:'6 days' , price:'500'}
]