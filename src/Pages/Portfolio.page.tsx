import { Box, Grid } from "@mui/material"
import Navbar from "../components/Navbar.com"
import Name from "../components/Name.com"
import { About } from "../components/About.com"

export const Portfolio:React.FC<{}>=()=>{
    return <>
    <Box>
        <Grid>
            <Navbar/>
        </Grid>
        <Grid>
            <Name/>
        </Grid>
        <br />
        <br />
        <Grid>
            <About/>
        </Grid>
        
        </Box>
        </>
}