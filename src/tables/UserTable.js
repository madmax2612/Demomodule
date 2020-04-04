import React,{useState} from 'react'
import Demo from '../header'
import { TableRow, TableCell, Table } from 'semantic-ui-react'

const UserTable = (props) => {
  const [name,setName]=useState(sessionStorage.getItem("userName"))
      
return(
 <>
  {name==='Admin'?
  <Table color='red'>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Sno.</Table.HeaderCell>
         <Table.HeaderCell>Name</Table.HeaderCell>
         <Table.HeaderCell>userName</Table.HeaderCell>
         <Table.HeaderCell>Actions</Table.HeaderCell>
       </Table.Row>
    </Table.Header>
    <Table.Body>
      
        <>{

        props.users.length > 0 ? (
        props.users.map((user) => {
          return(
            <Table.Row>
          <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
            <Table.Cell>
              <button className="ui button muted-button" onClick={()=>props.editUser(user.id,user)}>Edit</button>
              <button className="ui button muted-button" onClick={()=>props.deleteUser(user.id)}>Delete</button>
              <button className="ui button muted-button" onClick={props.addfunction}>Add</button>

            </Table.Cell>
            </Table.Row>
          )}))
        :''}
        </>
      
    </Table.Body>
  </Table>
  :
  <>
  <Table color='red'>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>Sno.</Table.HeaderCell>
         <Table.HeaderCell>Name</Table.HeaderCell>
         <Table.HeaderCell>userName</Table.HeaderCell>
         
       </Table.Row>
    </Table.Header>
    <Table.Body>
      
        <>{

        props.users.length > 0 ? (
        props.users.map((user) => {
          return(
            <Table.Row>
          <Table.Cell>{user.id}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.username}</Table.Cell>
           
            </Table.Row>
          )}))
        :''}
        </>
      
    </Table.Body>
  </Table>
  </>
  
  }
  </>
)
}
export default UserTable