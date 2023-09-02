import Button from '@material-ui/core/Button';
const MyButton = (title) => {
    return (
        <Button variant="contained" color="primary" >
            {title.title}
        </Button> 
      );
}
 
export default MyButton;

