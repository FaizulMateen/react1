import { Box, Button, Typography } from "@mui/material"
import img from "../images/sameer.jpg"
import myresume from '../static/Sameer resume.pdf'

export const About: React.FC<{}> = () => {
    return <>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 5">
                <img style={{ borderRadius: '70%' }} width='500' src={img} />
            </Box>
            <Box gridColumn="span 7">

            <Box textAlign="center" p={4}>
    <Typography variant="h2" className="mb-5" style={{ fontSize: '36px', fontWeight: 'bold', color: '#333' }}>
      About Me
    </Typography>
    <Typography variant="body1" className="mb-4" style={{ lineHeight: '2.0', fontSize: '20px', color: '#666' }}>
      My name is Sameer Ahmed Jan. I’m a graduate of 2023 from Visvesvaraya Technological University at Basavakalyan Engineering College, Basavakalyan with a degree in Computer Science and Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time, I like working on open-source projects.
    </Typography>
    
    <a href={myresume} download>
    <Button variant="outlined" color="primary" size="large" style={{ marginTop: '20px', borderColor: '#007bff', color: '#007bff' }}>My Resume</Button></a>
  </Box>

            </Box>
        </Box>
    </>
}