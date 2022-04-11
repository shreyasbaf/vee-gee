import axios from 'axios';
import React, { useState } from 'react'
import { Button } from '../../components/Modals/styles';
import { InputWrapper } from '../../components/Modals/SuccessModal'
import { Img22 } from '../LandingPageStyles';
import {  Heading } from '../Product';
import { FileUpload } from '../styles';

const AddCategory = () => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
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
    const file = event.target.files[0];
    const convertedFile = await convertToBase64(file);
    let data ={
        image: convertedFile,
        imageName: file.name
    }

 await axios.post('https://veegee-backend-demo.herokuapp.com/s3upload/',data)
 .then((res) => {
     setLink(res.data.link)
 })
}
  const handleSubmit = () =>{
    const data={
      name:name,
      link:link
    }
    axios.post('https://veegee-backend-demo.herokuapp.com/vee-gee-addCategory', data)
    .then((res) => {
      if(res.data == 'Success'){
        setName('');
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
          <InputWrapper label='Category Name' placeholder='Category Name' value={name} onChange={(e) =>{setName(e.target.value)}} />
          {/* <FileUpload type="file" onChange={onSelectFile} /> */}
          <FileUpload>
          <div className="file-input">
            <input type="file" id="file" class="file" onChange={onSelectFile}/>
            <label htmlFor="file">
                Select file
                <p className="file-name"></p>
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

export default AddCategory