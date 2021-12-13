import React, {useState} from 'react';
import { TextField, Button, Card } from '@material-ui/core';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement, incrementByAmount, decrementByAmount } from './redux/counter';

import  useStyles  from './styles'

const App = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState(0);
    const [isIncrement, setIsIncrement] = useState(false);
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
       
        e.preventDefault();
        if(isIncrement) {         
            dispatch(incrementByAmount(parseInt(postData)));
        }else{

            dispatch(decrementByAmount(parseInt(postData)))
        }

    }

    return(
        <div className={classes.body}>
        <Card className={classes.card}>
            <div className={classes.body}>

            <h1>The count is: {count} </h1>
            <form onSubmit={handleSubmit}>

            <TextField className={classes.textField} variant='outlined' fullWidth name='count' label='Enter The Value' value={postData.count} onChange={(e) =>setPostData(e.target.value)}  />
            <Button className={classes.buttons} variant='outlined' fullWidth type='submit' color='primary' onClick={()=> setIsIncrement(true)}>Increment by value</Button>
            <Button className={classes.buttons} variant='outlined' fullWidth type='submit' color='secondary' onClick={() => setIsIncrement(false)}>decrement by value</Button>
            
            </form>
            <Button className={classes.buttons} color='primary' fullWidth variant='outlined' onClick={() => dispatch(increment())}>increment BY 1</Button>
            <Button className={classes.buttons} color='secondary' fullWidth variant='outlined' onClick={()=> dispatch(decrement())}>Decrement By 1</Button>
            </div>
        </Card>
        </div>
    )
}

export default App;