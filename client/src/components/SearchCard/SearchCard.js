import React, {useContext} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import BookContext from '../../utils/BookContext'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginTop: 25
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
   width: 151
  },
  
}));



export default function SearchCard() {
  const classes = useStyles();
    const theme = useTheme();
    
  const {searchBooks, handleSaveBook} = useContext(BookContext);

  return (
    <Container>
    {searchBooks.map((book, index ) => 
      <Card key={index} className={classes.root}>
      <CardMedia
        width={1/1}
        className={classes.cover}
        image={book.imageLinks ? book.imageLinks.thumbnail : "https://via.placeholder.com/300"}
        title={book.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
             {book.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
           {book.authors}
          </Typography>
        <Typography variant="body2" component="p">
         {book.description}
        </Typography>
        </CardContent>
        <CardActions>
       <Button href={book.infoLink} target="_blank" size="small">View on Google Books</Button>
       <Button size="small"onClick={() => handleSaveBook(index)}>Save</Button>
     </CardActions>
      </div>
      
    </Card>
    )}
    </Container>
  );
}
