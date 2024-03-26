import  './App.css'
import { FormControl, InputGroup, Container, Button, Card, Row } from  'react-bootstrap'
import { useState, useEffect } from  'react'
 
const  clientId  =  import.meta.env.VITE_CLIENT_ID;
const  clientSecret  =  import.meta.env.VITE_CLIENT_SECRET;

function  App() {
const [searchInput, setSearchInput] =  useState("")
const [accessToken, setAccessToken] =  useState("")
const [albums, setAlbums] =  useState([])

	useEffect(() => {
		var  authParams  = {
			method:  'POST',
			headers: {
			'Content-Type':  'application/x-www-form-urlencoded',
			},
			body:  'grant_type=client_credentials&client_id='  +  clientId  +  '&client_secret='  +  clientSecret,
			}
		fetch('https://accounts.spotify.com/api/token', authParams)
		.then(result  =>  result.json())
		.then(data  => {
		setAccessToken(data.access_token)
		
	})}, [])


  async  function  search() {
    var  artistParams  = {
      method:  'GET',
      headers: {
      'Content-Type':  'application/json',
      'Authorization':  'Bearer '  +  accessToken,
    },
  }
  
  // Get Artist
    var  artistID  =  await  fetch('https://api.spotify.com/v1/search?q='  +  searchInput  +  '&type=artist', artistParams)
      .then(result  =>  result.json())
      .then(data  => {
      return  data.artists.items[0].id
      })
  
  // Get Artist Albums
    await  fetch('https://api.spotify.com/v1/artists/'  +  artistID  +  '/albums?include_groups=album&market=US&limit=50', artistParams)
    .then(result  =>  result.json())
    .then(data  => {
    setAlbums(data.items)
    })
    }
  

	return (
    <>
	<Container style={{
    marginBottom: '30px',
  }}>
		<InputGroup>
			<FormControl
			placeholder="Search for an Artist"
			type='input'
			aria-label="Search for an Artist"
			onKeyDown={event  => {
			if (event.key === "Enter") {
			search()
			}
			}}
			onChange={event  =>  setSearchInput(event.target.value)}
			style={{
			width: '300px',
			height: '40px',
			borderWidth: '1px',
			borderStyle: 'solid',
			borderRadius: '5px',
			marginRight: '10px',
			paddingLeft: '10px',
			backgroundColor: '#121212', // Spotify dark gray
			color: '#fff', // white text
			fontSize: '16px', // adjust for font size preference
			}}
			/>
			
			<Button 
			onClick={search}
			style={{
				backgroundColor: '#1ED760', // Spotify green
				color: '#fff', // white text
				padding: '5px 20px', // adjust padding for preference
				borderRadius: '20px',
				border: 'none', // remove border
				cursor: 'pointer', // indicate clickable element
				fontWeight: 'bold', // bold text for emphasis
			}}
			>
			Search
			</Button>

			

		</InputGroup>
	</Container>

  <Container>
	<Row  style={{
	display:  'flex',
	flexDirection:  'row',
	flexWrap:  'wrap',
	justifyContent:  'space-around',
	alignContent:  'center',
 
	}}>
		{albums.map((album) => {
return(
<Card  key={album.id}  style={{
		backgroundColor: '#282828', // slightly darker gray for cards
        margin: '10px',
        borderRadius: '5px',
        marginBottom: '30px',
	}} >
	
	<Card.Img  
	width={200}  
	src={album.images[0].url}  
	style={{
	borderRadius:  '4%',
	}}  />
	
	<Card.Body>
		<Card.Title  style={{
				whiteSpace: 'wrap',
                fontWeight: 'bold',
                maxWidth: '200px',
                fontSize: '18px',
                marginTop: '10px',
                color: '#fff', // white text for titles
			}}>{album.name}</Card.Title>
		
		<Card.Text  style={{
		color: '#ccc', // light gray for text
		fontWeight: 'bolder',
		}}>
		Release Date: <br/>  {album.release_date}
		</Card.Text>
		
		<Button  href={album.external_urls.spotify}  style={{
			backgroundColor: '#1ED760', // Spotify green for button
            color: '#fff', // white text for button
            fontWeight: 'bold',
            fontSize: '15px',
            borderRadius: '5px',
            padding: '10px',
			}}>Album Link
		</Button>
	</Card.Body>
</Card>
)

})}
	</Row>
</Container>
  </>
	)
}

export  default  App