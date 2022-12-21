// AddTodo.js
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddTodo(props) {

  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({author: '', isbn: '', price: '', title: '', year: ''});

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }
  
  const handleSave = () => {
    props.addTodo(todo);
    handleClose();
  }


  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  return(
    <div>
        <Button variant="outlined" color="primary" onClick={handleOpen}>
            Add book
        </Button>
        <Dialog open={open}> 
            <DialogTitle>New book</DialogTitle>
            <DialogContent>
                <TextField
                name="author"
                value={todo.author}
                onChange={inputChanged}
                margin="dense"
                label="author"
                fullWidth
                /> 
                <TextField
                name="isbn"
                value={todo.isbn}
                onChange={inputChanged}
                margin="dense"
                label="isbn"
                fullWidth
                /> 
                <TextField
                name="price"
                value={todo.price}
                onChange={inputChanged}
                margin="dense"
                label="price"
                fullWidth
                />
                <TextField
                name="title"
                value={todo.title}
                onChange={inputChanged}
                margin="dense"
                label="title"
                fullWidth
                /> 
                <TextField
                name="year"
                value={todo.year}
                onChange={inputChanged}
                margin="dense"
                label="year"
                fullWidth
                    /> 
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleClose}>Cancel</Button>
                <Button color="primary" onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog> 
    </div>
  );
}

export default AddTodo;