import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    fuentes: {
        fontFamily:'Work sans',
        marginBottom:'10px'
    },
    tituloContacto:{
        fontFamily:'Work sans !important',
        textAlign:'center',
        marginTop:'50px !important',
        marginBottom:'50px !important',
      },
}))

export {useStyles}