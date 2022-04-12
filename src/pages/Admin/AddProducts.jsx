import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import { Button } from '../../components/Modals/styles';
import { InputWrapper } from '../../components/Modals/SuccessModal'
import { BASEURL } from '../../redux/user/userTypes';
import { Img22 } from '../LandingPageStyles';
import {  Heading } from '../Product';
import { FileUpload } from '../styles';

const AddProducts = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [mrp, setMrp] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [category,setCategory] = useState([])
  const [active, setActive] = useState(-1);

  const convertToBase64 = (file) => {
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            resolve(reader.result);
        }
    })
}

const onSelectFile = async (event) => {
    setLoading(true)
    const file = event.target.files[0];
    const convertedFile = await convertToBase64(file);
    let data ={
        image: convertedFile,
        imageName: file.name
    }
 await axios.post(`${BASEURL}/s3upload/`,data)
 .then((res) => {
     setLink(res.data.link)
 })
 setLoading(false)
}

const handleSubmit = () =>{
    const data={
      name:name,
      description:description,
      mrp: parseInt(mrp),
      price: parseInt(price),
      id:active,
      link:link
    }
    axios.post(`${BASEURL}/vee-gee-addProduct`, data)
    .then((res) => {
      if(res.data == 'Success'){
        setName('');
        setDescription('');
        setMrp('');
        setPrice('');
        setActive(-1)
        setLink('');
        alert('Product Added')
        // getCategory();
      }
      else{
        alert('Try Again')
      }
    })
    .catch((err) => console.log(err))
  }

  const getCategory = () =>{
    try{
        setLoading(true)
        axios.get(`${BASEURL}/getCategories`)
        .then(response =>{
            var resData = response.data
            setCategory(resData)
            setLoading(false)
            console.log(resData)
        })
        .catch(error =>{
            console.log('ERROR',error)
        })
      }
      catch(err){
        console.log(err)
      }
}
useEffect(() => {
    getCategory()
  },[])
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Heading>Add Product</Heading>
          <InputWrapper label='Product Name' placeholder='Product Name' value={name} onChange={(e) =>{setName(e.target.value)}} required/>
          <InputWrapper label='Product Description' placeholder='Product Description' value={description} onChange={(e) =>{setDescription(e.target.value)}} required/>
          <InputWrapper label='MRP' placeholder='MRP' value={mrp} onChange={(e) =>{setMrp(e.target.value)}} required/>
          <InputWrapper label='Price' placeholder='Selling Price' value={price} onChange={(e) =>{setPrice(e.target.value)}} required/>
          <select className="" name="Category" value={active} style={{marginBottom:'12px', padding:'12px', width:'100%', border:'2px solid #e6e8ec', color:'#666666'}}  onChange={ (e) => setActive(e.target.value)} > 
            <option>Select Category</option> 
            {category.map((e, key) => {  
            return <option key={key} value={e.category_id} >{e.category_name}</option>;  
            })}  
        </select>  
          <FileUpload>
          <div className="file-input">
            <input type="file" id="file" class="file" onChange={onSelectFile}/>
            <label htmlFor="file">
                {!loading ? 'Select file' : 
                    <div style={{textAlign:'center', justifyContent:'center', alignItems:'center', display:'flex'}}>
                            <RotatingLines width="20" strokeColor="#ffffff" strokeWidth="3" />
                        </div>
                }
                {/* <p className="file-name"></p> */}
            </label>
            </div>
          </FileUpload>
          {
              link && 
          <Img22 src={link} alt='img'/>
        }
          <Button onClick={() => handleSubmit() }>Add Category</Button>
        </div>
    )
}

export default AddProducts