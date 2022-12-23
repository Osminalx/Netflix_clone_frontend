import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm, Controller, ControllerRenderProps, ControllerFieldState, Field } from 'react-hook-form'
import { Box ,Grid,Title,TextInput,Textarea, } from '@mantine/core'
import { DatePicker } from '@mantine/dates';

/*
TODO:
! Remember to close the course project first
* finish this form
I need to create the Backend after finishing this
*I need to look how I would like to put all of the information
*/ 


const MovieForm = ({defaultEditValues,onSubmit}:any) => {
    const defaultValues ={
        id:"",
        name:"",
        synopsis:"",
        imageUrl:"",
        genre:"",
        movieUrl:"",
        releaseDate:"" //? Is "String" de best type for a date
    }

    const productFormSchema =yup.object().shape({
        name:yup.string().required('You need a name'),
        synopsis: yup.string(),
        imageUrl: yup.string(),
        genre:yup.string(),
        movieUrl:yup.string(),
        releaseDate:yup.date()
    })   

    const{control,watch,handleSubmit,reset}=useForm({
      defaultValues:defaultEditValues ||  defaultValues,
      resolver: yupResolver(productFormSchema),
      mode:'all'
    })

    const imageUrlValue = watch('imageUrl')


  return (
    <Box >
      <Title>
        Add Movie
      </Title>
      <Controller
      control={control}
      name='name'
      render={({field,fieldState}) =>(
        <TextInput 
        {...field}
        label='Title'
        error={!!fieldState.error}
        />
      )}
      />
      <Controller
      control={control}
      name='Sypnosis'
      render={({field,fieldState}) =>(
        <Textarea 
        {...field}
        label='Sypnosis'
        error={!!fieldState.error}
        />
      )}
      />
      <Controller
      control={control}
      name='imageUrl'
      render={({field,fieldState}) =>(
        <TextInput 
        {...field}
        label='imageUrl'
        error={!!fieldState.error}
        />
      )}
      />
      <Controller
      control={control}
      name='Genre'
      render={({field,fieldState}) =>(
        <TextInput 
        {...field}
        label='Genre'
        error={!!fieldState.error}
        />
      )}
      />
      <Controller
      control={control}
      name='MovieUrl'
      render={({field,fieldState}) =>(
        <TextInput 
        {...field}
        label='MovieUrl'
        error={!!fieldState.error}
        />
      )}
      />
      <Controller
      control={control}
      name='ReleaseDate'
      render={({field,fieldState}) =>(
        <DatePicker 
        {...field}
        label='Release Date'
        error={!!fieldState.error}
        />
      )}
      />
    </Box>
  )
}

export default MovieForm