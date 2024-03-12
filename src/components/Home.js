import React, { useState } from 'react'

const Home = () => {
   const [cart,setCart] = useState({
    imgSrc:"",
    productName:"",
    totalPrice:"",
    qty:""

   })

   const onChange = (event) => {
    setCart({ ...cart, [event.target.name]: event.target.value });
  };


  return (
   <div className='container mx-auto'>
      <div className="input-group input-group-sm mb-3">
 
          <input onChange={onChange} value={cart.name}  type="text" className="form-control" aria-label="Sizing example input" name='imageSrc' placeholder='Enter imageSrc' aria-describedby="inputGroup-sizing-sm"/>
      </div>

      <div className="input-group input-group-sm mb-3">
 
       <input type="text" className="form-control" aria-label="Sizing example input" name='productName' placeholder='Enter product' 
       onChange={onChange} value={cart.productName} />
      </div>
       <div className="input-group input-group-sm mb-3">
 
          <input type="text" className="form-control" aria-label="Sizing example input" name='totalPrice' placeholder='Enter totalprice' 
          onChange={onChange} value={cart.totalPrice}/>
      </div>

      <div className="input-group input-group-sm mb-3">
 
          <input type="text" className="form-control" aria-label="Sizing example input" name='qty' placeholder='Enter Quantity'  
          onChange={onChange} value={cart.qty}
          />
     </div>

   <button >add cart</button>

   </div>
  )
}

export default Home
