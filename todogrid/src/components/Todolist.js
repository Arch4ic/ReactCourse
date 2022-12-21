import React, {useState} from 'react';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import ReactiveButton from 'reactive-button';

function Todolist() {
    const [todo, setTodo] = useState({description: '', date: '', status: ''});
    const [todos, setTodos] = useState([]);
  
    const inputChanged = (event) => {
      setTodo({...todo, [event.target.name]: event.target.value});
    }
  
    const addTodo = () => {
      setTodos([...todos, todo]);
      setTodo({description: '', date: '', status: ''});
    }
  
    return (
      <div className="App">
        <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
        <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged}/>
        <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged}/>
        <ReactiveButton onClick={addTodo}
        idleText='Add'
        size='small'
        color='green'
        rounded/>
        <div className='ag-theme-material' style={{height:600, width: 600, margin:'auto'}}>
          <AgGridReact
            rowData={todos}
            animateRows={true}>
            <AgGridColumn field="description" sortable={true} filter={true} suppressMovable={true}></AgGridColumn>
            <AgGridColumn field="date" sortable={true} filter={true} suppressMovable={true}></AgGridColumn>
            <AgGridColumn field="status" sortable={true} filter={true} suppressMovable={true}></AgGridColumn>
            </AgGridReact>
        </div>
      </div>
    );
  }
  
  export default Todolist;