const lugar= require('./lugar/lugar');
const clima= require('./clima/clima');


const argv= require('yargs').options({
    direccion:{
        alias :'d',
        desc: 'Dirección de la ciudad para obtener el clima',
        demands: true
    }
}).argv

let getInfo= async()=>{

    try{
        let coors= await lugar.getLugarLatLng(argv.direccion);
        let temp= await clima.getClima(coors.lat,coors.lng);
        return `El clima en ${coors.direccion} es de : ${temp} grados Celcius`
    }
    catch(e){
        return `No se pudo determinar el clima en ${argv.direccion}`

    }
    
}


getInfo(argv.direccion)
    .then(mensaje=> console.log(mensaje))
    .catch(e=> console.log(e))