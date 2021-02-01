import "./App.css"
import axios from "axios"

const { useState } = require("react")

function App() {


const [image, SetImage] = useState(null)
const [data, setData] = useState( {
  ProductName : "",
  ProductTypeId : "",
  ProductPrice_unit : "",
  ProductPrice_min : "",
  ProductPrice_hour : "",
  ProductDescription : "",
  ProductHasCalendar : "",
  Available : "",
  Quantity : "",
})


console.log(data)
console.log(image)


const postData = (e) => {
      const fd = new FormData ();
      fd.append('ProductImage', image, image.name)
      e.preventDefault();
      axios.post(`http://localhost:3001/Admin/Products/Add`, fd, data)
      .then(res => console.log(res))
      .catch((err) => console.log(err))
    }

const fileSelectHandler =event => {
      SetImage(event.target.files[0])   
}
    


  return (
    <div className="App">
         
      <form onSubmit={postData}  method="post" enctype="multipart/form-data">
      <label name="ProductName">Product Name</label>
      <input placeholder="ProductName" type="text" id="ProductName" value={data.ProductName} 
   onChange={(e) => setData({ ...data, ProductName: e.target.value })}/>
   <label name="ProductTypeId">Product Type ID</label>
         <input placeholder="ProductTypeId" type="number" id="ProductTypeId" value={data.ProductTypeId} 
   onChange={(e) => setData({ ...data, ProductTypeId : e.target.value })}/>
         <label name="ProductPrice_unit">Product Price unit</label>
         <input placeholder="ProductPrice_unit" type="number" id="ProductPrice_unit" value={data.ProductPrice_unit} 
   onChange={(e) => setData({ ...data, ProductPrice_unit : e.target.value })}/>
            <label name="ProductPrice_min">Product Price min</label>
         <input placeholder="ProductPrice_min" type="number" id="ProductPrice_min" value={data.ProductPrice_min} 
   onChange={(e) => setData({ ...data, ProductPrice_min : e.target.value })}/>
               <label name="ProductPrice_hour">Product Price hour</label>
         <input placeholder="ProductPrice_hour" type="number" id="ProductPrice_hour" value={data.ProductPrice_hour} 
   onChange={(e) => setData({ ...data, ProductPrice_hour : e.target.value })}/>
                  <label name="ProductDescription">Product Description</label>
         <input placeholder="ProductDescription" type="text" id="ProductDescription" value={data.ProductDescription} 
   onChange={(e) => setData({ ...data, ProductDescription : e.target.value })}/>
                  <label name="ProductHasCalendar">Product has Calendar</label>
         <input placeholder="ProductHasCalendar" type="text" id="ProductHasCalendar" value={data.ProductHasCalendar} 
   onChange={(e) => setData({ ...data, ProductHasCalendar : e.target.value })}/>
                  <label name="Available">Product Available</label>
         <input placeholder="Available" type="text" id="Available" value={data.Available} 
   onChange={(e) => setData({ ...data, Available : e.target.value })}/>
                  <label name="Quantity">Product Quantity</label>
         <input placeholder="Quantity" type="number" id="Quantity" value={data.Quantity} 
   onChange={(e) => setData({ ...data, Quantity : e.target.value })}/> <br/>
                  <label name="input-files">Add file</label>
                  <input type="file" id="ProductImage"  onChange={(e) => fileSelectHandler(e) }/>
                  
                  
                  <button type="submit">save</button>
  


      </form>

    </div>
  );
}

export default App;
