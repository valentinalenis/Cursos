const express = require('express')
const app = express()

app.listen(3002)

const curso1 = require ('./curso');

const opciones = {
    id:{
        demand:true,
        alias:'id'
    }, 
    nombre:{
        demand:true,
        alias:'nom'
    },
    cedula:{
        demand:true, 
        alias:'ced'
    },
    estado:{
        default:'',
        alias:'est'
    }
}

const argv = require('yargs')
.command ('Matricula', 'Matricular un estudiante', opciones)
.argv;


if(argv.estado == 'inscribir'){
    //Generar archivo
    const fs =  require('fs');

    switch (argv.id ) {
        case 1:
            texto = 'El estudiante ' + argv.nom + '\n' +
            'ha sido Prematriculado a ' +curso1.curso.Java.nombre+'\n'+' Duración: '+curso1.curso.Java.duracion+'\n'+' Valor: '+curso1.curso.Java.valor;
            break;
        case 2:
            texto = 'El estudiante ' + argv.nom + '\n' +
            'ha sido Prematriculado a ' +curso1.curso.Php.nombre+'\n'+' Duración: '+curso1.curso.Php.duracion+'\n'+' Valor: '+curso1.curso.Php.valor;        
            break;
        case 3:
            texto = 'El estudiante ' + argv.nom + '\n' +
            'ha sido Prematriculado a ' +curso1.curso.Python.nombre+'\n'+' Duración: '+curso1.curso.Python.duracion+'\n'+' Valor: '+curso1.curso.Python.valor; 
            break;

        default:
            texto='ADVERTENCIA:'+'\n'+' El id ingresado no existe, intentelo de nuevo.';
            break;
    }

    let crearArchivo = (texto) =>{
        texto;
        fs.writeFile('matricula.txt', texto, (err)=>{
            if (err) throw (err);
            console.log('Se ha Preinscrito satisfactoriamente, verifique el archivo')
        });
    }

    crearArchivo(texto);
    app.get('/', function(req,res){
        res.send(texto)
    })
}else{
    console.log(curso1.curso);
    app.get('/', function(req,res){
        res.send(curso1.curso)
    })
}

