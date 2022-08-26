import './App.css';
import {useEffect, useState} from 'react'
import ListContact from './componenets/ListContact';
import Filter from "./componenets/Filter"
import AddContact from './componenets/AddContact';
function App() {
  const [count, setCount] = useState(0);

  //1 initialisation state filter
  const[filter,setFilter]=useState("")
  const [contactList,setContactList]=useState([
    {
    id:1,
    name:"omrane",
    phoneNumber:"123456789",
    address:"sousse",
    email:"omrane@gmail.com",
    posturl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnm4URkc5wE0AQP_yxTWmyaao-8ZTcKCcd7Zjh1em-0w&s"
  },
  {
    id:2,
    name:"maysem",
    phoneNumber:"123456789",
    address:"sousse",
    email:"maysem@gmail.com",
    posturl:"https://cdn.xxl.thumbs.canstockphoto.fr/girl-asiatique-images-sous-licence_csp0144545.jpg"

  }

])

useEffect(() => {
  setTimeout(() => {
    setCount((count) => count + 1);
  }, 1000);
}, []); // <- add empty brackets here

//2 declaration function filter
const handleFilter=(val)=>{
  setFilter(val)
}

const handleAddContact=(val)=>{
  setContactList([...contactList,val])
}




//3 pass  props filter
  return (
  
    <div className="App">
      <header className="App-header">
        
        <Filter handleFilter={handleFilter} />
       <ListContact list={contactList.filter(elm=>elm.name.toLowerCase().includes(filter.toLowerCase()))}/>
       <AddContact handleAddContact={handleAddContact}/>
       <h1>I've rendered {count} times!</h1>
      </header>
    </div>
  );
}

export default App;
