import React, {useContext} from 'react';
import BookContext from '../../utils/BookContext'
import { makeStyles, formatMs } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function Form (){

const {input, handleInputChange, handleSearchBook} = useContext(BookContext);

  return(
 <Container>
 <form>
  <TextField
  id="filled-full-width"
  label="Book Title"
  placeholder=""
  value={input}
  fullWidth
  margin="normal"
  name="input"
  onChange={handleInputChange}
  InputLabelProps={{
    shrink: true,
  }}
  variant="filled"
/>

<Button variant="contained" color="primary" onClick={handleSearchBook}>Search</Button>

</form>
</Container>
  )
}

export default Form;