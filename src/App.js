import logo from './logo.svg';
import './App.css';
import img from './stone.gif';
import img1 from './pict1.webp';
import img2 from './pict2.webp';
import img3 from './pict3.webp';
import React from 'react';
import img4 from './spcl.webp';
import img5 from './pict4.webp';

function Props1({model,price,color,model2,price2,color2}) {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Celebrate DIWALI with offers...!SHOP NOW!!!</h3>
      </header>
      <img className="img" src={img}/>
        
        <nav class="nav bg-primary text-center "><h1></h1></nav>
        <div class="container bg-secondary">
            <div class="row">
              <div class="col-sm-4 text-center">
                <h3></h3>
                <img src={img1}/>
                <h4>Model : {model}</h4>
                <h4>Price : {price} </h4>
                <h4>Color :{color} </h4>
               <a href="./bag.html"> <button type="button"  class="btn btn-success">BUY PRODUCT</button></a>
              </div>
              <div class="col-sm-4 text-center">
                <h3>Bluetooth</h3>
                <img src={img2}/>
                <h4>Model : {model2}</h4>
                <h4>Price :  {price2}</h4>
                <h4>Color : {color2}</h4>
                <a href="./hp.html"><button type="button" class="btn btn-success">BUY PRODUCT</button></a>
              </div>
              <div class="col-sm-4 text-center">
                <h3></h3>
                <img src={img3}/>
                <h4>Model : Stone 180</h4>
                <h4>Price :  Rs.799</h4>
                <h4>Color : Thickblue</h4>
                
                <a href="./pendrive.html"> <button type="button" class="btn btn-success buy">BUY PRODUCT</button></a>
              </div>
            </div>
          </div>



      
    </div>

  );
}
class State extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state = {
        model: "",
        color: "",
        price: "",
        rating:""
      };
    }
    viewDetails = () => {
      this.setState({model:"boAt splits 2000 Multimedia 100 W",color:"Premium black",price:"Rs.3899",rating:4.2});
    }
    render() {
      return (
        <div>
          <div className='left'>
          <img src={img4}/>
          </div>
          <div className='right'>
            <img src={img5}/>
          <h1 className='offer'>OFFER!!!SPECIAL PRODUCT!!!!!!!</h1>
          <h1>MODEL: {this.state.model}</h1>
          <h1>COLOR:{this.state.color}</h1>
          <h1>PRICE:{this.state.price}</h1>
          <h1>RATING:{this.state.rating}</h1>
          <button type="button" onClick={this.viewDetails}>VIEW DETAILS</button>
        </div>
        </div>
      );
    }
  }

export default function App() {
  const obj = {model: 'Stone 1350', price: 'Rs.299', color: 'blue',model2:"Stone 190",price2:"Rs.999",color2:"Grey"};

  return (
    <div>
      <Props1 {...obj} />
      <State/>
    </div>
  );
}
