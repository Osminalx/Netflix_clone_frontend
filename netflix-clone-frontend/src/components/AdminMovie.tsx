import React from 'react'
import Movieinfo from './MovieInfo'
import {ActionIcon} from '@mantine/core'
import { Trash, Edit } from 'tabler-icons-react';

const AdminMovie = ({movie}:any) => {
  return (
    <>
    <Movieinfo 
    movie={movie}
    />
    <ActionIcon color="yellow" size="lg" variant="filled" >
      <Edit size={26} />
    </ActionIcon>
    <ActionIcon color="red" size="lg" variant="filled" >
      <Trash size={26} />
    </ActionIcon>
    </>
  )
}

export default AdminMovie