import ContactsJSON from "../contacts.json";
import { useState, useEffect} from "react";
import axios from "axios";

export default function Prueba (){
    const [contacts, setContacts]=useState(ContactsJSON.slice(0,10))

    // llamar una api o DB siempre es asincrono , lo primero es crear una constante con la funcion async() q recibe una funcion con un await con la peticion al API, LIN9 olo guardamos en una constante para poder ver
    const getDataFromApi = async()=>{
       const response = await axios.get("http://localhost:5005/api/factores")
       setContacts(response.data)
       //console.log(response) nos muestra todo el objeto
    }

    useEffect(()=>{
        //Todo lo que esté aquí, se va a ejecutar solo cuando se cree el objecto
        getDataFromApi()
    }, [])


    // un estado por cada input(value)
    const [nameInput, setNameInput]=useState("")

    return (
    <div>
        <form > 
        {/* label e input  action y method no hace falta*/}
        <label>Nombre</label>
        {/* input lleva el valor que voy a ir guardando con un useState y le añado un onChange */}
        <input type="text" value={nameInput} onChange={(sd)=>{setNameInput(sd.target.value)}}/>
        {/* se le pasa un nombre "event" por ejemplo , LEER DOCUMENTACION REACT*/}
        {/* boton con: type= submit . onClick preventDefault */}
        <button type="submit" onClick={(e)=>{
            e.preventDefault()
            setContacts([{ name: nameInput, popularity:0}, ...contacts]);
            // aqui enviamos lo nuevo al clon de la lista anterior de contactos, pero el map espera un objeto con los mismos valores
            }}>
            {/* onClick, onSubmit, onChange... etc, siempre reciben un evento */}
            {}
          Guardar
        </button>
        </form>



        {contacts.map(({text, pictureUrl, popularity, wonOscar, wonEmmy})=>{
            return (
                <div key={text} className="artist-card">
                       <p>{text}</p>
                       <p>Popularity:{Math.floor(popularity)}</p>
                       {wonOscar ? "Oscar winner😎": null}
                    {/* <p>{name}</p> */}
                    {/* {wonOscar&& wonEmmy?(
                        <p>{name}</p>
                    )
                    : null  } */}
                    {/* <img src={pictureUrl} alt="" /> */}
                </div>
                
            )
        })
        }
    </div>
    )
}