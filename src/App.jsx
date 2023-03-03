import { useEffect, useState } from 'react'
import axios from 'axios'
import memeLogo from './assets/Troll Face.png'

import { Box, Button, TextField, Typography } from '@mui/material'


function App() {
  // const [textAtas, setTextAtas] = useState('')
  // const [textBawah, setTextBawah] = useState('')
  // const [memeimg, setMemeimg] = useState('')
  // const [allMemes, setAllMemes] = useState([])
  // const [loading, setLoading] = useState(false)

  // const getMemes = async () => {
  //   setLoading(true)
  //   try {
  //     let response = await axios.get('https://api.imgflip.com/get_memes')
  //     setAllMemes(response.data.data.memes)   
  //     setLoading(false)   
  //   } catch(e){
  //     setLoading(false)   
  //     console.log(e)
  //   }
  // }

  // useEffect( () => {
  //   getMemes()       
  // },[])

  // function getMemeImg(){
  //   const randomNumber = Math.floor(Math.random() * allMemes.length);
  //   const url = allMemes[randomNumber].url
  //   setMemeimg(url)
  // }

  // console.log(allMemes.length)


  const [textAtas, setTextAtas] = useState('')
  const [textBawah, setTextBawah] = useState('')
  const [allMemes, setAllMemes] = useState([])
  const [memeImg, setMemeImg] = useState('')

  // const getMemes = async () => { 
  //   try{
  //     let response = await axios.get('https://api.imgflip.com/get_memes')
  //       setAllMemes(response.data.data.memes)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // const getMemeImg = () => {
  //   const randomNumber = Math.floor(Math.random() * allMemes.length);
  //   setMemeImg(allMemes[randomNumber].url);
  // }
  // useEffect( () => {
  //   getMemes()
  // }, [])
  // console.log(allMemes.length)

  // const getMemes = async () => {
  //     try{
  //       let response = await axios.get('https://api.imgflip.com/get_memes')
  //       setAllMemes(response.data.data.memes)
  //     } catch(e){
  //       console.log(e)
  //     }
  // }
  // useEffect(()=>{
  //   getMemes()
  // }, [])
  //   console.log(allMemes.length)

  //   const getMemeUrl = () => {
  //     const randomNumber = Math.floor(Math.random() * allMemes.length)
  //     setMemeImg(allMemes[randomNumber].url)
  //   }

  // const getMemes = async () => {
  //   try {
  //     let response = await axios.get('https://api.imgflip.com/get_memes')      
  //     return setAllMemes(response.data.data.memes)   
  //   } catch(e){
  //     console.log(e)
  //   }
  // }

  // useEffect(() => {
  //   getMemes()
  // }, [])

  

  const getMemes = async () => {
    try{
      let response = await axios.get('https://api.imgflip.com/get_memes')
      return setAllMemes(response.data.data.memes)
    } catch(e){
      console.loh(e)
    }
  }

  useEffect(() => {
    getMemes()
  }, [])

  const getMemesImage = () => {
    const randomNum = Math.floor(Math.random() * allMemes.length)
    setMemeImg(allMemes[randomNum].url)
  }
  

  return (    
      <div
      className="App"
      style={{
        margin: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',        
        backgroundColor: '#58216B'
      }}>
      <Box        
        sx={{
          backgroundColor: 'whitesmoke',
          width: '550px',
          height: '550px',
          borderRadius: '10px',
          
        }}
      >
        <Box sx={{ mb: '36px', borderRadius: '10px 10px 0 0'}} display="flex" bgcolor="#A818DA" color="white" p={2
        } alignItems="center">
          <Box sx={{display: 'flex', flexDirection: 'row', gap: '7px'}} p={1} flexGrow={1}>
           <img src={memeLogo} alt=""/>
           <Typography>Meme Generator</Typography>        

          </Box>          
        </Box>
        <Box
          sx={{            
            display: 'flex',
            gap: '17px',   
            justifyContent: 'center',                    
          }}
        >          
          <TextField
            id="text-atas"
            label="text atas"
            variant="outlined"
            onChange={e => (setTextAtas(e.target.value))}
          />
          <TextField
            id="text-bawah"
            label="text bawah"
            variant="outlined"
            onChange = {e => (setTextBawah(e.target.value))}
          />
        </Box>

        <Box
          sx={{
            my: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',                       
          }}
        >
          <Button
            onClick={getMemesImage}
            variant="text"
            fullWidth            
            sx={{
              width: '437px',
              backgroundColor: '#A818DA',
              color: '#FFFFFF',              
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#58216B' }
            }}           
            
          >Get a new meme image 🖼</Button>
          <Typography
            sx={{
              position: ' absolute',
              width: ' 80%',
              textAlign: ' center',
              left: ' 50%',
              transform: ' translateX(-50%)',
              margin: ' 15px 0',
              padding: ' 0 5px',
              fontFamily: ' impact, sans-serif',
              fontSize: '28px',
              textTransform: ' uppercase',
              color: ' white',
              letterSpacing: ' 1px',
              textShadow: '2px 2px 0 #000',
              top: 286
            }}
          >        
            {textAtas}  
          </Typography>
          <Typography
            sx={{
              position: ' absolute',
              width: ' 80%',
              textAlign: ' center',
              left: ' 50%',
              transform: ' translateX(-50%)',
              margin: ' 15px 0',
              padding: ' 0 5px',
              fontFamily: ' impact, sans-serif',
              fontSize: '28px',
              textTransform: ' uppercase',
              color: ' white',
              letterSpacing: ' 1px',
              textShadow: '2px 2px 0 #000',
              bottom: 144
            }}
          >
            {textBawah}            
          </Typography>
          {/* {loading ? <Typography>Loading ...</Typography> : <img style={{ marginTop: '36px', width: '200px'}} src='' alt=""/> }  */}
          <img style={{ marginTop: '36px', width: '200px'}} src={memeImg} alt=""/>         
        </Box>
        
        
      </Box>
    </div>
    
    
  )
}

export default App
