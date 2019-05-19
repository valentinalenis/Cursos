let curso ={
    Java:{
        id:1,
        nombre:'Introduccón a java',
        duracion:5,
        valor:10
    },
    Php:{
        id:2,
        nombre:'Introduccón a Php',
        duracion:10,
        valor:20
    },
    Python:{
        id:3,
        nombre:'Introduccón a Python',
        duracion:15,
        valor:30
    }
};


for(const prop in curso){
    setTimeout(function(){
    console.log(`curso ${prop} = ${curso[prop].id},'\n'  Nombre: ${curso[prop].nombre},'\n'  Duración: ${curso[prop].duracion},'\n'  Valor: ${curso[prop].valor}`);
},2000);
}

module.exports ={
    curso
};