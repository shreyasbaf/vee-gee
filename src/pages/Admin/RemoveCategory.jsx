import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Modals/styles'
const RemoveCategory = () => {
    const [loading,setLoading] = React.useState(false)
    const [category,setCategory] = React.useState([])
    const [active, setActive] = useState('')
    useEffect(() => {
        try{
          setLoading(true)
          axios.get(`https://veegee-backend-demo.herokuapp.com/getCategories`)
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
        console.log(active);
      },[])
    return (
        <div>
<select className="" name="Category" onChange={ (e) => setActive(e.target.value)} >  
{category.map((e, key) => {  
return <option key={key} value={e.category_name} >{e.category_name}</option>;  
})}  
</select>  
{
    active !== '' ? <p>{active}</p> : ''
}
<Button>Delete Category</Button>
        </div>
    )
}

export default RemoveCategory
