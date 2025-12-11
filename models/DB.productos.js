const fs = require('fs');

class DBproductos{

    constructor(){
        this.path_archivo = './public/productos.json';
    }

    getDB(){
        //console.log("Leyendo datos...");
        if( !fs.existsSync(this.path_archivo)){
            return null;
        }
        const datos = JSON.parse(fs.readFileSync(this.path_archivo, { encoding: 'utf-8'}));
        //console.log(datos);
        return datos;
    }

    setDB( data ) {
        
        const datos = this.getDB(); //);
        datos.push(data);
        //console.log(datos);

        fs.writeFileSync( this.path_archivo, JSON.stringify(datos));
    }


    deleteDB(id){

        const datos = this.getDB();
        //Eliminar el objeto con id
        const dato_actualizados = datos.filter(obj => obj.id !== id );
        fs.writeFileSync( this.path_archivo, JSON.stringify(dato_actualizados));
    
    }

    putDB(id, nombre, precio){
        
        const datos = this.getDB();
        // Cambiar el nombre del objeto con id
        const dato_actualizados = datos.map( item => item.id === id ? {...item, nombre, precio} : item );

        fs.writeFileSync( this.path_archivo, JSON.stringify(dato_actualizados));
    
    }

}

module.exports = DBproductos;