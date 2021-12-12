import './App.css';
import ButtonAppBar from './ButtonAppBar';
import CardMedia from '@mui/material/CardMedia';
import flowers from './homepagedoodle.png';
import omnomnomz from './cover images for case studies/omnomnomz.jpg';
import nimbus from './cover images for case studies/nimbusnotesmockup.jpg';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@material-ui/core/Box';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar></ButtonAppBar>
      </header>

    <Box m={10}>
      <Grid container spacing={20} alignItems="center" >
        <Grid item xs={6}>
          <Typography variant='h5'>
            Hi, I'm JiYoung!
            </Typography>
            <Typography>
              NYC based Product Designer and current Design & Media undergrad @ NYU
              <Typography display="block"></Typography>
              Incoming Product Designer at Prelim
              <Typography display="block"></Typography>
              Previously at Redfin, Inc. & Fast Company magazines
            </Typography>
            <Button variant="contained">Let's chat!</Button>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            image={flowers}
            style={{height:250, width:350}}
          />
        </Grid>
      </Grid>
  
        <Grid container>
          <Grid item xs={12}>
          <Typography variant='h6'>
            Selected Work
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={omnomnomz}
              style={{height:200, width:200}}
            />
          </Grid>
          <Grid item xs={8}>
           <Typography>Name of Project</Typography> 
           <Typography>Insert Description</Typography> 
           <Link href="#">View More</Link>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
          <Typography variant='h6'>
            Selected Work
            </Typography>
          </Grid>
          <Grid item xs={8}>
          <Typography>Name of Project</Typography> 
           <Typography>Insert Description</Typography> 
           <Link href="#">View More</Link>
          </Grid>
          <Grid item xs={4}>
           <CardMedia
              component="img"
              image={nimbus}
              style={{height:200, width:200}}
            />
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
          <Typography>
            Selected Work
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={omnomnomz}
              style={{height:200, width:200}}
            />
          </Grid>
          <Grid item xs={8}>
           <Typography>Name of Project</Typography> 
           <Typography>Insert Description</Typography> 
           <Link href="#">View More</Link>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
          <Typography>
            Selected Work
            </Typography>
          </Grid>
          <Grid item xs={8}>
          <Typography>Name of Project</Typography> 
           <Typography>Insert Description</Typography> 
           <Link href="#">View More</Link>
          </Grid>
          <Grid item xs={4}>
           <CardMedia
              component="img"
              image={nimbus}
              style={{height:200, width:200}}
            />
          </Grid>
        </Grid>
    </Box>

    </div>
  );
}

export default App;
