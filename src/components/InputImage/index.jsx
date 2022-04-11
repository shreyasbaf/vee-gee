import React, { useState } from 'react'
import { InputImageWrapper, Wrapper } from './style';

function InputImage(props) {
    const [image, setImage] = useState("");
    function handleChange(e) {
        const size = e.target.files[0].size / 1024 / 1024;
          const formData = new FormData();
          //@ts-ignore
          formData.append('file', e.target.files[0],'shfhses');
          console.log(formData);
        const reader = new FileReader();
        reader.addEventListener("load", function () {
            setImage(reader.result);
        }, false);
        if (e.target.files[0]) {
            if (size > 10) {
                alert('you exceed the max limit')
            }
            else {
                reader.readAsDataURL(e.target.files[0]);
            }
        }
    }
    return (
        <Wrapper>
            <label className="label">{props.label}</label>
            <InputImageWrapper type="file" name="" id="" onChange={handleChange} accept="image/gif, image/jpg, image/jpeg, image/png" background={image} />
        </Wrapper>

    )
}

export default InputImage