import React, { useState } from 'react'
import UserTable from './UserTable'
import TableContent from './table'
import Demo from '../header'
import DeleteModal from './deleteModal'
import { Divider } from 'semantic-ui-react'
const App = () => {

  const [deleteModal, setDeleteModal] = useState(false);
  const initialFormState = { id: null, name: '', username: '' }
 const[update,setUpdate]=useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState)
const[updatedUser,setUpdatedUser]=useState({})
  const usersData = [
    { id: 1, name: 'Stephen', username: 'Stephen123' },
    { id: 2, name: 'Benjamin', username: 'palace123' },
    { id: 3, name: 'Forsaken', username: 'bensepher546' },

  ]

  const [users, setUsers] = useState(usersData)
  const [add, setAdd] = useState(false);

  const addUser = (user) => {
    setUpdate(false)
    user.id = users.length + 1
    
    setUsers([...users, user])
    
  }
  const addfunction = () => {
    setAdd(true);
  }

  const closeAddFunction = () => {
    setAdd(false);
  }
  const editUser = (id,user)=>{
    console.log(user,id);
    setUpdate(true);
    setCurrentUser({id:user.id,username:user.username,name:user.name})
    setAdd(true);
   
  }
  
  const updateUser = (id) => {
    console.log(id)
    setUpdate(false)
    var data={id:currentUser.id,username:id.username,name:id.name}
    // console.log(data)
    
    setUsers(users.map(user => (user.id === currentUser.id ? data : user)))
    // console.log(updateduser)
    setAdd(false);
  }


  const deleteUser = (id) => {
    setDeleteModal(true);
    setUsers(users.filter(user => user.id !== id))
  }


  return (
    <>
      {deleteModal && <DeleteModal deleteUser={deleteUser} title="Delete User" redirect={deleteUser} positiveActionText={"close"} content="Are sure you want to Delete" />}
      <Demo>
        <div className="ui container">
          <div className="ui ">
          
            <h4 className="ui horizontal divider header">
              
              <i className="user plus icon"></i>
        Student Listing
        </h4>
        <Divider hidden/>
          </div>
        </div>
        <div className="ui grid">
          <div className="ui row stackable one column wide">
            <div className="column">
              <UserTable users={users}  editUser={editUser} addfunction={addfunction} deleteUser={deleteUser} />
            </div>
            </div>
            {add &&
            <>
              <div className="ui row stackable one column wide">
                <div className="center aligned column">
                  <div className="ui container">
                      <h4 className="ui horizontal divider header">
                        <i className="user plus icon"></i>
                             Student Listing
                        </h4>
                    
                  </div>
                  <TableContent updateUser={updateUser} update={update} currentUser={currentUser} closeAddFunction={closeAddFunction} addUser={addUser} />
                </div>
                </div>
              </>  
              
            }
          
        </div>

      </Demo>
    </>
  )
}

export default App;