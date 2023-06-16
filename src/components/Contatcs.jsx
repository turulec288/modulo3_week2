import dataContacts from "../contacts.json"
import { useState } from "react"

export default function Contacts (){
  const [visibleContacts, setVisibleContacts] = useState(
    dataContacts.slice(0, 6)
  );
  // const visibleContacts = dataContacts.slice(0, 6)
  const [hiddenContacts, setHiddenContacts] = useState(
    dataContacts.slice(6) //del 6 al final
  );
  const [inputValue, setInputValue] = useState("")
    // const hiddenContacts = dataContacts.slice(6);
  const [photoURL, setPhotoURL]= useState("")
//funciona para limpiar los inputs del FORMULARIO
  const resetInputs = ()=>{
    setInputValue("")
    setPhotoURL("")
  }
 
  const addRandom = ()=>{
        if(hiddenContacts.length){
          const randomNum = Math.floor(Math.random() * hiddenContacts.length); //
          const newContact = hiddenContacts[randomNum];
          const copyHidden = hiddenContacts.filter(
            (el) => el.id != newContact.id
          );
          setHiddenContacts(copyHidden); // hiddenContacts = copyHidden
          setVisibleContacts([newContact, ...visibleContacts]);
          console.log(hiddenContacts);
        }
      }

    // function addRandom(){
    //      const randomNum = Math.floor(Math.random() * hiddenContacts.length); //
    //      setVisibleContacts([hiddenContacts[randomNum], ...visibleContacts]);
    //   }

    // const  // let var
  
//   const v = [1, 2, 3, 4, 5, 7, 9, 2]; // ...v → 1, 2, 3, 4, 5, 7, 9, 2
//   const h = ["a", "d", "g", "u"]; //3 h[3]
//   const randomContanct = h[3] // "r"
//   //borramos h[3]
//   const nuevo = [randomContanct, v]; // ["r", [1, 2, 3, 4, 5, 7, 9, 2]] forma incorrecta sin spread
//   const nuevoSpread = [h[randomNum], ...v]; // ["r", 1, 2, 3, 4, 5, 7, 9, 2]

  //    let randomNum = ()=>{return  Math.floor(Math.random()*52)+6 }
  //    console.log(visibleContacts.length);//52

  return (
    <div>
      <form action="/home" method="get">
        <label htmlFor="cont">Nombre del Contacto</label>
        <input
          type="text"
          className="cont"
          value={inputValue} //guardo la primera letra, y le concateno otra con el setInputValue
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />

        <input
          type="text"
          className="photo"
          value={photoURL} //guardo la primera letra, y le concateno otra con el setInputValue
          onChange={(event) => {
            setPhotoURL(event.target.value);
          }}
        />

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setVisibleContacts([
              { name: inputValue, pictureUrl: photoURL },
              ...visibleContacts,
            ]);
            resetInputs()
          }
        }
        >
          Guardar contacto
        </button>
      </form>

      <h1>Iron Contacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      {visibleContacts.map(({ name, pictureUrl, wonOscar, wonEmmy, id }) => {
        return (
          <div key={id}>
            <p>{name}</p>
            <img src={pictureUrl} alt="photo" />
            {wonOscar ? "Oscar award 🏆" : <></>}
            {wonEmmy ? "Emmy award ✔" : <></>}
          </div>
        );
      })}
    </div>
  );
}