import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'
import Box from "@material-ui/core/Box"


function Copyright() {
  return (
    <Typography className="mt-2" variant="body2" style={{color:'white'}}>
      {'Copyright © '}
      <Link color="inherit" href="https://ferlunaDiseños.com/">
        FERLUNA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
  
}

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    position: 'absolute',
    flexDirection: 'column',
    minHeight: '100vh',
    width:'100%',
    height: '20px'
  },
  footer: {
    padding: theme.spacing(1, 1),
    marginTop: 'auto',
    backgroundColor: '#004ba0',
    position: 'absolute',
    width:'100%',
  },
  grid: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
  },
  img: {
      width: '30%',
      filter: "grayscale(0%)",
  },
  hoverImg: {
  "& :hover": {
    filter: "grayscale(80%)",
  }
  },

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm" className={classes.grid}>
            <Grid container spacing={0}>
                <Grid style={{marginLeft:'22%'}} item xs={3}>
                    <Box>
                    <Link className={classes.hoverImg} href="https://www.instagram.com"><img src="instagramLogo.png" className={classes.img}></img></Link>
                    </Box>
                </Grid>

                <Grid style={{marginLeft:'-15%'}} item xs={3}>
                    <Box>
                    <Link className={classes.hoverImg} href="https://www.facebook.com"><img src="facebookLogo.png" className={classes.img}></img></Link>
                    </Box>
                </Grid>

                <Grid style={{marginLeft:'-15%'}} item xs={3}>
                    <Box>
                    <Link className={classes.hoverImg} href="https://www.whatsapp.com"><img src="whatsapLogo.png" className={classes.img}></img></Link>
                    </Box>
                </Grid>

                <Grid style={{marginLeft:'-15%'}} item xs={3}>
                    <Box>
                    <Link className={classes.hoverImg} href="https://www.gmail.com"><img src="emailLogo.png" className={classes.img}></img></Link>
                    </Box>
                </Grid>
            </Grid>
            
        </Container>

        <Container maxWidth="sm" className={classes.grid}>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <Copyright/>
        </Grid>
        </Grid>
        </Container>
          
      </footer>
    </div>
  );
}
