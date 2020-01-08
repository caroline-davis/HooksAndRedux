import React, {useState, useEffect} from 'react';
import Input from './components/Input.js';
import Save from './components/Save.js';
import { getAddress } from './apis/api.js';
import './App.css';


function App() {

  const [name, setName] = useState("")
  const [names, setNames] = useState([])

  const [age, setAge] = useState("")
  const [ages, setAges] = useState([])

  const [food, setFood] = useState("")
  const [foods, setFoods] = useState([])

  const [address, setAddress] = useState([])
  const[loading, setLoading] = useState([])

  useEffect(() => {
    async function loadAddress () {
      const address = await getAddress()
      setAddress(address)
    }
    loadAddress()
   }, [])

  return (
    <div className="container">

      <Input placeholder="name"
             value={name}
             onChange={setName}>
      </Input>

      <Input placeholder="age"
             value={age}
             onChange={setAge}>
      </Input>

      <Input placeholder="food"
             value={food}
             onChange={setFood}> 
      </Input>
   
    <div>
     
      <Save handleClick={setNames}
            curVal={names}
            newVal={name}
            field="Name">
      </Save>
      <Save handleClick={setAges}
            curVal={ages}
            newVal={age}
            field="Age">
      </Save>

      <button onClick={()=> setFoods([...foods, food])}>Save Food</button>

    </div>

    {names.map((n, index) => 
      <div key={index}>
        Name: {n}
      </div>
    )}

    {ages.map((a, index) => 
    <div key={index}>
      Age: {a}
    </div>
    )}

    {foods.map((m, index) =>
     <div key={index}>
       Food: {m}
     </div>
    )}
    <div>
      {console.log(address.city)}
      {address.city} {address.country}
    </div>

    </div>

  );
}

export default App;

