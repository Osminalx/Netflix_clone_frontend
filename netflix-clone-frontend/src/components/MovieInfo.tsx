import {Card,Image,Text,Textarea,Badge} from '@mantine/core'

const Movieinfo = ({movie}:any) => {
  return (
    <Card
    shadow='sm'
    p='xl'
    component='a'
    href={''}
    >
    <Card.Section>
    <Image
    src={movie.imageUrl}
    height={160}
    alt={movie.name}
    />
    </Card.Section>

    <Text weight={500} size="lg" mt="md">
    {movie.name}
    </Text>
    <textarea  color="dimmed" >
        {movie.sypnosis}
    </textarea>
    <Text>{movie.releaseDate}</Text>
    <Badge>{movie.genre}</Badge>
    </Card>
  )
}

export default Movieinfo