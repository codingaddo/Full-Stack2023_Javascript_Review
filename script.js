const movies =[
    {
        id:0,
        title:'The Rock',
        genre:'Action'
    },
    {
        id:1,
        title:'Expandables',
        genre:'Action'
    },
    {
        id:2,
        title:'The Killer',
        genre:'Action'
    },
    {
        id:3,
        title:'Power',
         genre:[
            'Crime',
            'Fantasy',
            'Romance'
            
        ]
    },
    {
        id:4,
        title:'Love Game',
        genre:'Romance'
    },
    {
        id:5,
        title:'The Chi',
        genre:[
            'Crime',
            'Fantasy',
            'Romance',
            'Drama'
        ]
    },

]

//SPREAD OPERATOR

//To update an array or add element to an array
const updatedMovies = [...movies,{id:7,title:'Hello'}]
// console.log(movies)
// console.log(updatedMovies)


//To change a property of an object 
const x = movies.map((movie)=>movie.id===1?{...movie,genre:'Love'}:movie)
console.log(x)


// Tenary Operator
let num = 5
// if(num<=5){
//     console.log('True')
// }
// else{
//     console.log('false')
// }

num<=7?console.log('True'):console.log('false')



//Short Circuiting and Logical Operators

num <=1 && console.log('True')


