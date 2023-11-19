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

// console.log(movies)
// const updatorMovies = [...movies,{id:6,title:'Avatar',genre:'Dram'}]
// console.log(updatorMovies)


//To update an array or add element to an array
// const updatorMovies = [...movies,{id:6,title:'Avatar',genre:'Dram'}]


//To change a property of an object 
// const changeValue = movies.map((movie)=>movie.id===0?{...movie,genre:'Love'}:movie)
// console.log(changeValue)

// Tenary Operator


let a = true
// a===true?console.log('True'):console.log('False')

// if(a===true){
//     console.log('True')
// }else{
//     console.log('False')
// }



//Short Circuiting and Logical Operators

a && console.log('True')

