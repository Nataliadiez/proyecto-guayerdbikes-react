import React from 'react';
import {Typography,Container,Link,Grid,Box} from '@material-ui/core/';
import {useStyles} from "./Footer.style"

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
