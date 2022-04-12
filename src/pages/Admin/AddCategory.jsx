import axios from 'axios';
import React, { useState } from 'react'
import { RotatingLines } from 'react-loader-spinner';
import { Button } from '../../components/Modals/styles';
import { InputWrapper } from '../../components/Modals/SuccessModal'
import { BASEURL } from '../../redux/user/userTypes';
import { Img22 } from '../LandingPageStyles';
import {  Heading } from '../Product';
import { FileUpload } from '../styles';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(false);
//   const history = useHistory();

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
      link:link
    }
    axios.post(`${BASEURL}/vee-gee-addCategory`, data)
    .then((res) => {
      if(res.data == 'Success'){
        setName('');
        setLink('');
        alert('Category Added')
      }
      else{
        alert('Try Again')
      }
    })
    .catch((err) => console.log(err))
  }
    return (
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <Heading>Add Category</Heading>
          <InputWrapper label='Category Name' placeholder='Category Name' value={name} onChange={(e) =>{setName(e.target.value)}} required/>
          {/* <FileUpload type="file" onChange={onSelectFile} /> */}
          <FileUpload>
          <div className="file-input">
            <input type="file" id="file" class="file" onChange={onSelectFile} required/>
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
          <Button onClick={() => handleSubmit() } disabled={link == '' && true}>Add Category</Button>
        </div>
    )
}

export default AddCategory