import logo from './logo.svg';
import './App.css';
import {useEffect, useState } from 'react';

// component
function App() {
  const nayoks = ['Anwar', 'Zafor', 'Alomgir', 'Salman'];
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'PDF Reader', price:'$6.99'}
  ];

  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a react person</p>
       <Counter></Counter>
       <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }

          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

        {
          products.map(product => <Product product={product}></Product>)
        }
       {/* <Product product={products[0]}></Product> */}
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrase = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrase}>Decrease</button>
    </div>
  )
}

function Product(props){
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h4>Name:{name}</h4>
      <h4>Price:{price}</h4>
      <button>Buy now</button>
    </div>
  )
}

export default App;
