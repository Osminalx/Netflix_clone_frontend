import { Grid } from "@mantine/core"
import AdminMovie from "./AdminMovie";

const AdminMovieList = ({movies}:any) => {
  return (
    <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50} sx={{mt:1}} >
        {movies.map((movie:any)=>{
            return(
                <Grid.Col  key={movie.id}> 
                <AdminMovie 
                movie={movie}
                
                />
                </Grid.Col>
            );
        })

        }
    </Grid>
  )
}

export default AdminMovieList