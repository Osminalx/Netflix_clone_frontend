import MovieForm from '../forms/MovieForm';
import {Modal} from '@mantine/core'
import React from 'react';

interface Props{
  opened: boolean,
  onClose: ()=> void
  
}

const AddMoviesModal = ({opened,onClose}:Props) => {
  return (
    <Modal
        opened={opened}
        onClose={onClose}
        title="Add a movie"
        withCloseButton={false}
        size="auto"
    >{
        }
    </Modal>
  )
}

export default AddMoviesModal