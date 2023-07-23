import React from 'react'
import reactLogo from './assets/react.svg'
import FormInput from './components/FormInput'
import TodoItem from './components/TodoItem'
import './App.css'
import EditModal from './components/EditModal'
import DeleteModal from './components/DeleteModal'

class App extends React.Component {
  state = {
    todo: [
      {
        id: 1,
        title: "Membaca Buku"
      },
      {
        id: 2,
        title: "Bermain Game"
      },
      {
        id: 3,
        title: "Olahraga"
      }
    ],
    isEdit: false,
    isDelete: false,
    editData: {
      id: "",
      title: ""
    },
    deleteData:{
      id: '',
      title: ''
    }
  }

  update = () =>{
    const {id, title} = this.state.editData
    const newData = {id, title}
    const newTodo = this.state.todo
    newTodo.splice((id-1), 1, newData)
    this.setState({
      todo: newTodo,
      isEdit:false,
      isDelete: false,
      editData:{
        id:"",
        title:""
      }
    })
  }

  setTitle= e =>{
    this.setState({
      editData:{
        ...this.state.editData,
        title: e.target.value
      }
    })
  }

  openModal = (id, data) =>{
    this.setState({
      isEdit: true,
      editData :{
        id, 
        title:data
      }
    })
  }

  deleteModal = (id) =>{
    this.setState({
      isDelete: true,
      deleteData: {
        id,
      }
    })
  }

  closeModal = () =>{
    this.setState({
      isEdit: false,
      isDelete: false
    })
  }

  deleteTask = id => {
    const idi = this.state.deleteData.id
    this.setState({
      todo: this.state.todo.filter(item => item.id != idi),
      isDelete: false
    })
    console.log('deleted')
  }

  addTask = data =>{
    const id = this.state.todo.length
    const newData = {
      id: id+1,
      title: data
    }
    this.setState({
      todo: [...this.state.todo, newData]
    })
  }
 render(){
  const {todo} = this.state
   return (
     <div className='app'>
       <div className='logo'>
         <img src={reactLogo} alt='logo'/>
         <h1>Task List</h1>
       </div>
       <div className='list'>
        {todo.map(item =>
         <TodoItem key={item.id} todo={item} del={this.deleteModal} close={this.closeModal} open={this.openModal}  openModalDelete={this.openModalDelete}/>
        )}
       </div>
       <div className='form-input'>
         <FormInput add={this.addTask}/>
       </div>
       <EditModal 
          edit={this.state.isEdit} 
          close={this.closeModal} 
          change={this.setTitle}
          data={this.state.editData}
          update={this.update}
        />
        <DeleteModal del={this.state.isDelete} close={this.closeModal} delItem={this.deleteTask}/>
     </div>
   )

 }
}

export default App
