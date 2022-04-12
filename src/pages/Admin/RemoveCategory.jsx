import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Modals/styles'
import { BASEURL } from '../../redux/user/userTypes'
const RemoveCategory = () => {
    const [loading,setLoading] = React.useState(false)
    const [category,setCategory] = React.useState([])
    const [active, setActive] = useState(-1);

    const handleSubmit = () =>{
        try{
            let data ={
                id:active
            }
            axios.post(`${BASEURL}/vee-gee-removeCategory`, data)
            .then(response =>{
                console.log(response);
            })
            .catch(error =>{
                console.log('ERROR',error)
            })
            setActive(-1)
            getCategory()
          }
          catch(err){
            console.log(err)
          }
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
      },[active])
    return (
        <div>
<select className="" name="Category"  onChange={ (e) => setActive(e.target.value)} > 
<option>Select Category</option> 
{category.map((e, key) => {  
return <option key={key} value={e.category_id} >{e.category_name}</option>;  
})}  
</select>  
{
    active !== '' ? <p>{active}</p> : ''
}
<Button onClick={() => handleSubmit()}>Delete Category</Button>
        </div>
    )
}

export default RemoveCategory
