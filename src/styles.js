import { makeStyles } from "@material-ui/core";

export default makeStyles(()=> ({
    body:{
        display: 'flex',
        flexDirection: 'column',
        alignContent:'center',
        alignItems: 'center',
        margin: '20px'
    }, 
    buttons: {
        marginBottom: '10px',
    },
    textField: {
        marginBottom: '20px'
    },
    card: {
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',    
    }
}))