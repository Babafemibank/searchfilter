import JSONDATA from './mockaroo.json'
import { useState } from 'react';


function App() {
  const [searchItem, setSearchItem] = useState("")
  return (
    <div className="container">
  <div className="App">
<input type="text" placeholder="Search" 
onChange={(event) => {
  setSearchItem(event.target.value)
}} autoFocus/>
 <div className="jsdata">{JSONDATA.filter((val)=>
{
  if (searchItem === ""){
    return val
  }else if(val.first_name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase())){
    return val
  }
}).map((val, key) =>{
  return <div key={key}><p>{val.first_name}</p></div>
})}</div>
  </div>
  </div>
  );
}

export default App;
 