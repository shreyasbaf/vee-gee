import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import InputImage from '../components/InputImage';
// import Amplify from '@aws-amplify/core';
import Amplify, { Auth, Storage } from 'aws-amplify';
import { Button } from './Product';
import { SuccessModal } from '../components/Modals/SuccessModal';
import { useHistory } from 'react-router-dom';
import TabGroup from '../components/TabGroup';

const Admin = () => {
    const history = useHistory()
    const [link, setLink] = useState('');
    useEffect(() => {
      // localStorage.getItem('adminLoggedIn') ? <></> :
      // history.push('Login')
    }, [link])
const FileUpload = styled.input`
  /* position: absolute; */
  display: inline-block;
  /* width: 100px; */
  /* padding: 26px 0px 0px; */
  /* height: 26px; */
  overflow: hidden;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: -50px;
  margin-left: -52px;
  cursor: pointer;
`;
const [selectedFile, setSelectedFile] = useState('');
// useEffect(() => {
//     Amplify.configure({
//         Auth: {
//             mandatorySignIn: false,
//                 IdentityPoolId: 'us-east-1:9262240f-5148-463c-a159-958660179f5d',
//                 region:'us-east-1',
//         },
//         Storage:{
//             bucket:'vee-gee',
//             region:'ap-south-1',
//         }
//     }
//     )
//     Storage.put('Cart.js','Hello')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))
// }, [])

const onFileUpload = (event) => {

    // Update the state
    setSelectedFile(event.target.files[0]);
    //setTimeout(onFileUpload, 2000);
    const formData = new FormData();
    //@ts-ignore
    formData.append('file', event.target.files[0], selectedFile.name);
    console.log('object', formData)
    console.log('IMG',selectedFile)
    axios.post('https://veegee-backend-demo.herokuapp.com/s3upload', formData)
      .then((res) => {
          console.log('object')
        // setAvatarFilePath(res.data.url);
        // dispatch(setUserProfileImagePath(res.data.url));
      })
      .catch((error) => {
        // swal(error);
      });
  };
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

const [show, setShow] = React.useState('');
const Close = () => {
  setShow('');
};
const types=['Add Category', 'Add Product', 'Delete Product','Delete Category']
    return (
        <>
 <SuccessModal heading='Admin Login' show={show === 'admin' ? true : false} Close={() => Close()} />
        {/* <div style={{marginTop:'80px'}}>
            Admin Page
            <Button onClick={() => setShow('admin')} >Admin Login</Button>
            <FileUpload type="file" onChange={onSelectFile} />
            {
              link === '' ? <> </>:
            <img src={link} alt='img'/>
            } */}
            {/* <InputImage label='anyjn' /> */}

        {/* </div> */}
        <TabGroup types={types}/>
        </>
    )
}

export default Admin
