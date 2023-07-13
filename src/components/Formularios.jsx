import React, {  useState } from 'react'
import { useForm } from "react-hook-form"
import 'bootstrap/dist/css/bootstrap.min.css'



const Datos = [
    { operacion: "venta", ubicacion: "buceo", dormitorios: "3", id: "1"},
    { operacion: "venta", ubicacion: "malvin", dormitorios: "2", id: "2"},
    { operacion: "alquiler", ubicacion: "buceo", dormitorios: "3", id: "3"},
    { operacion: "venta", ubicacion: "malvin", dormitorios: "2", id: "4"},
    { operacion: "alquiler", ubicacion: "buceo", dormitorios: "3", id: "5"},
    { operacion: "venta", ubicacion: "pocitos", dormitorios: "1", id: "6"},
  ];
  

const Formularios = () => {

    const [datos, setDatos] = useState([])
    const { register, formState: {errors} , handleSubmit } = useForm()


    
const enviarDatos = (data) =>{
    
   const datosFiltrados = Datos.filter ( (item)=>item.operacion == data.operacion && item.ubicacion == data.ubicacion && item.dormitorios == data.dormitorios)
   setDatos(datosFiltrados)

    console.log(datosFiltrados)

  

}

  return (

    <> 
    <form onSubmit={handleSubmit(enviarDatos)}>
        <div>
            <label>Nombre</label>
            <input type="text" {...register("nombre",{
                required: false,
                maxLength: 10,
               
            })}/>
            {errors.nombre?.type === "required" && <p>El campo es requerido</p>}
            {errors.nombre?.type === "maxLength" && <p>Max 10 caracteres</p>} 
        </div>
        <div>
            <label>Direccion</label>
            <input type="text" {...register("direccion")}/>
        </div>
        <div>
            <label>Operacion</label>
            <select className="form-select" aria-label="Default select example" {...register("operacion")}>
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
            </select>
        </div>
         <div>
            <label>Dormitorios</label>
            <select className="form-select" aria-label="Default select example" {...register("dormitorios")}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>
        </div>
        <div>
            <label>Ubicacion</label>
            <select className="form-select" aria-label="Default select example" {...register("ubicacion")}>
            <option value="malvin">Malvin</option>
            <option value="buceo">Buceo</option>
            <option value="pocitos">Pocitos</option>
            </select>
        </div>

        <input className='btn btn-primary' type='submit' value="Enviar"/>

    </form>


    

    {datos.map( (datito)=>{

        return(

    <div key={datito.id}>   
    <h2>operacion:{datito.operacion}</h2>
    <h3>ubicacion:{datito.ubicacion}</h3>
    <p>dormitorios:{datito.dormitorios} </p>
    </div>
    )

})}

 

    </>
  )
}

export default Formularios