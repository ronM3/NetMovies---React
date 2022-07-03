import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate()

  const submitHandler = (e) =>{
    e.preventDefault()
    if(searchValue.trim()){
        navigate(`/search/${searchValue}`)
    }
  }

  return (
    <Form onSubmit={submitHandler}>
        <Form.Control type='text' name='q' onChange={(e)=>{setSearchValue(e.target.value)}} placeholder='Search Something...' className='mr-sm-2 ml-sm-5'>
        </Form.Control>
        <Button type='submit' variant='outline-success' className='p2'></Button>
    </Form>
  )
};

export default SearchBox;
