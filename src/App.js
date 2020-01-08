import React, {useState, useEffect} from 'react';
import Input from './components/Input';
import Save from './components/Save';
import Weather from './components/Weather';
import { getAddress } from './apis/api';
import './App.css';


function App() {

  const [name, setName] = useState("")
  const [names, setNames] = useState([])

  const [age, setAge] = useState("")
  const [ages, setAges] = useState([])

  const [food, setFood] = useState("")
  const [foods, setFoods] = useState([])

  const [address, setAddress] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadAddress () {
      const address = await getAddress()
      setAddress(address)
      setLoading(false)
    }
    if (loading === true) {
      loadAddress()
    }
   }, [loading])

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
      
      {address.city} {address.country}
    </div>
     <Weather />

    </div>

  );
}

export default App;

