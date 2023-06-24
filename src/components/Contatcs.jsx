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
  const [inputValue, setInputValue] = useState("");
  // const hiddenContacts = dataContacts.slice(6);
  const [photoURL, setPhotoURL] = useState("");
  const [popularity , setPopularity] = useState (0)
  const [hasWonOscar, setHasWonOscar] = useState (false)

  
  const [hasWonEmmy, setHasWonEmmy] = useState (false)

  //funciona para limpiar los inputs del FORMULARIO
  const resetInputs = () => {
    setInputValue("");
    setPhotoURL("");
    setPopularity(0);
    setHasWonOscar(false);
    setHasWonEmmy(false);
  };

  const addRandom = () => {
    if (hiddenContacts.length) {
      const randomNum = Math.floor(Math.random() * hiddenContacts.length); //
      const newContact = hiddenContacts[randomNum];
      const copyHidden = hiddenContacts.filter((el) => el.id != newContact.id);
      setHiddenContacts(copyHidden); // hiddenContacts = copyHidden
      setVisibleContacts([newContact, ...visibleContacts]);
      console.log(hiddenContacts);
    }
  };

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
        <label>Nombre del Contacto</label>
        <input
          type="text"
          value={inputValue} //guardo la primera letra, y le concateno otra con el setInputValue
          onChange={(event) => {
            //evento es un objeto, muchas propiedades, que tecla se ha pulsado, en qué momento
            setInputValue(event.target.value); // va al objeto y le pide que target.value
          }}
        />
        <label>Foto url</label>
        <input
          type="text"
          value={photoURL} //guardo la primera letra, y le concateno otra con el setInputValue
          onChange={(event) => {
            setPhotoURL(event.target.value);
          }}
        />

        <label>Popularidad</label>
        <input
          type="number"
          value={popularity} //toma el valor del usestate
          onChange={(event) => {
            setPopularity(event.target.value);
          }}
        />

         <label>Has Won Oscar</label>
        <input
          type="checkbox"
          checked={hasWonOscar} //toma el valor del usestate
          onChange={() => {
            setHasWonOscar(!hasWonOscar);
          }}
          
        />

      <label>Has Won Emmy</label>
        <input
          type="checkbox"
          checked={hasWonEmmy} //toma el valor del usestate
          onChange={() => {
            setHasWonEmmy(!hasWonEmmy);
          }}
      />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setVisibleContacts([
              {
                name: inputValue,
                pictureUrl: photoURL,
                popularity: popularity, 
                id: "",
                wonOscar: hasWonOscar,
                wonEmmy: hasWonEmmy,
              },
              ...visibleContacts,
            ]);
            resetInputs();
          }}
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
            <button onClick={()=>{
              const copyVisibleContacts = visibleContacts.filter((el)=>{
                return el.name !== name })
              setVisibleContacts(copyVisibleContacts)
            }}>Delete {name}</button>
          </div>
        );
      })}
    </div>
  );
}