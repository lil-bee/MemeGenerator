import { useEffect, useState } from 'react'
import axios from 'axios'
import memeLogo from './assets/Troll Face.png'

import { Box, Button, TextField, Typography } from '@mui/material'


function App() {
  const [textAtas, setTextAtas] = useState('')
  const [textBawah, setTextBawah] = useState('')
  const [memeimg, setMemeimg] = useState('')
  const [allMemes, setAllMemes] = useState([])
  const [loading, setLoading] = useState(false)

  const getMemes = async () => {
    setLoading(true)
    try {
      let response = await axios.get('https://api.imgflip.com/get_memes')
      setAllMemes(response.data.data.memes)   
      setLoading(false)   
    } catch(e){
      setLoading(false)   
      console.log(e)
    }
  }

  useEffect( () => {
    getMemes()       
  },[])

  function getMemeImg(){
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url
    setMemeimg(url)
  }

  console.log(allMemes.length)

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '97vh',        
        backgroundColor: '#A818DA'
      }}>
      <Box
        sx={{
          backgroundColor: 'whitesmoke',
          width: '550px',
          height: '550px',
          borderRadius: '10px'
        }}
      >
        <Box sx={{ mb: '36px', borderRadius: '10px 10px 0 0'}} display="flex" bgcolor="#58216B" color="white" p={2} alignItems="center">
          <Box p={1} flexGrow={1}>
            {memeLogo}
          </Box>          
        </Box>
        <Box
          sx={{            
            display: 'flex',
            gap: '17px',   
            justifyContent: 'center'         
          }}
        >          
          <TextField
            id="text-atas"
            label="text atas"
            variant="outlined"
            onChange={event => {setTextAtas(event.target.value)}}
          />
          <TextField
            id="text-bawah"
            label="text bawah"
            variant="outlined"
            onChange={event => {setTextBawah(event.target.value)}}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',            
          }}
        >
          <Button
            onClick={getMemeImg}
          >generate</Button>
          <Typography>{textAtas}</Typography>
          <Typography>{textBawah}</Typography>
          {loading ? <Typography>Loading ...</Typography> : <img style={{ width: '200px'}} src={memeimg} alt=""/> }          
        </Box>
        
        
      </Box>
    </div>
  )
}

export default App
