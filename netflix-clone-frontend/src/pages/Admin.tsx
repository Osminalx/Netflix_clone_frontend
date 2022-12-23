import { ActionIcon, Container } from "@mantine/core"
import {Plus} from'tabler-icons-react';
import AddMoviesModal from "../modals/AddMoviesModal"
import React, { useState } from "react"

interface Props{
  allMovies: never[],
  setAllMovies: React.Dispatch<React.SetStateAction<never[]>>
}


/*
TODO:
! All the Handle Functions are suppose to be in this tsx document
*/ 


const Admin = ({allMovies,setAllMovies}:Props) => {
  const[isAddModalOpened, setIsAddModalOpened]=useState(false)

  const handleOnEdit = ()=>{

  }

  const handleOnDelete = (id:string)=>{

  }


  const handleOnSubmit=()=>{

  }

  return (
    <Container size='xl' sx={{margin: 2 }} >
      <ActionIcon color='blue' 
          size='xl' 
          variant='outline' 
          radius='xl'
          onClick={()=>setIsAddModalOpened(true)}
          sx={{
          position: "absolute",
          bottom: "24px",
          right: "24px",
        }}>
          <Plus />
      </ActionIcon>
      <AddMoviesModal
        opened={isAddModalOpened}
        onClose={()=> setIsAddModalOpened(false)}
        //onSubmit={handleOnSubmit}
      />
    </Container>
  )
}

export default Admin