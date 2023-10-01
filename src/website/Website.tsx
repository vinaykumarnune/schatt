import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import AccessPointTile from "../at";

const Website = ()=>{
    return (
    <Box justifyContent={"center"} textAlign="center" sx={{
        verticalAlign:'center'
    }}>
        <Grid container spacing={2}>
        <AccessPointTile/>
            <Grid item lg={12} md={12}>
                <Typography fontWeight={"bold"} variant="h4">SChatt</Typography>
            </Grid>
            <Grid item lg={12} md={12}>
                <Typography fontWeight={"bold"} variant="body1">Simple socila Media App</Typography>
            </Grid>
            <Grid item lg={12} md={12}>
               <Stack>
                   <Button variant="contained">
                       Signup
                   </Button>
                  
               </Stack>
            </Grid>
        </Grid>
    </Box>
    );
    
}
export default Website;