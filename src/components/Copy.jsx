import Contacts from "../contacts.json";
import { useState } from "react";

export default function Copy(){
    let [contacts, setContacts]=(useState(Contacts.slice(0,6)))
    let [hiddenContacts, setHiddenContacts]=(useState(Contacts.slice(6)))

    const addRandomContact = ()=>{
      // ----------mover el primer elemento de hiddenContacts a otra lista-------
      // 1. seleccionar el primer elemento de la lista hiddenContacts
      const firstElem = hiddenContacts[0];
      //2.Si firstElem no esta en presente en contacts, añadirlo 
      //Y si está presente no lo añadimos
        //2.1 Comprobar que firstElem no está en contacts
        
        for (let i = 0; i < contacts.length; i++){
           if( contacts[i].id === firstElem.id) {return} 
        //  // Esto sólo para la función, si el contacto ya está en la lista, y no la para
        //  //si NO está
        // }
        // if (contacts[0].id !== firstElem.id &&
        //     contacts[1].id !== firstElem.id &&
        //     contacts[3].id !== firstElem.id &&
        //     contacts[4].id !== firstElem.id &&
        //     contacts[5].id !== firstElem.id ){
        //         setContacts([firstElem, ...contacts])
        }
        setContacts([firstElem, ...contacts]);
        const hiddenContactsCopy = hiddenContacts.filter((el)=>{
          return  el.id!==firstElem.id
        })
        setHiddenContacts(hiddenContactsCopy);

        
    }


    return(
        
        <div>
            <button onClick={addRandomContact}>Añade</button>
            {contacts.map(({name, pictureUrl})=>{return ( <div>
            <h3>{name} </h3>
            <img src={pictureUrl} alt="photo" />
            </div>
            )})}
           {console.log(contacts)} 

        </div>
    )
}

// Ejemplo de código limpio // EARLY RETURN 
const genteQueNosCaeBien = []

function add(name){
    if(name ==="Filomeno" || name ==="César"){
        return
    }
    genteQueNosCaeBien.push(name)
}

add("Fritz");