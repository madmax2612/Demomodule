import React,{useState} from 'react';
import { Controller, useForm } from 'react-hook-form/dist/react-hook-form.ie11'



const TableContent=function TableContent(props){

    const { register, handleSubmit, errors } = useForm({defaultValues: props.currentUser})
    const initialFormState = { id: null, name: '', username: '' }
    const [user, setUser] = useState(initialFormState)  
    const [redirect,setRedirect] =useState(false);

    const onSubmit = function onSubmit(data,e) {
       
        console.log(data)

        
        if(props.update){
            e.preventDefault()
            props.updateUser(data);
            
        }
        else{
        e.preventDefault()
        console.log(props.addUser)
        props.addUser(user)
        setUser(initialFormState)
        props.closeAddFunction();
    }


    //     if (!data.name || !data.username) {
    //     console.log(props.addUser)    
    //     props.addUser(user)
    //     setUser(initialFormState)
    // }

      

    }
   

    const handleInputChange = (event) => {
        const { name, value } = event.target
        
        setUser({ ...user, [name]: value })
    // console.log(user);  
    }


return(
<>
<div className="ui center aligned container">
    
                <div className="grid">
                    <div className="one column one row wide ">
                        <div className="column">
                        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
                            
                                                      
                            <div className="field">
                                <label>Name</label>
                              {console.log(props.update),
                              props.update ?  
                                 
                                <input type="text" name="name" placeholder="Name" ref={register({ required: true })} onChange={handleInputChange}/>
                                 :
                                <input type="text" name="name" placeholder="Name" ref={register({ required: true })} onChange={handleInputChange}/>
                                 
                                 }
                            </div>
                            {
                               errors &&  errors.name ? <div className="ui one  grid column row errorDiv">
                                    <div className="errorTxt column">
                                        <i className="red exclamation triangle icon"></i> Name is required!!
                                    </div>
                                </div>
                                    : null}
                            <div className="field">
                                <label>User Name</label>
                                <input type="text" name="username" placeholder="UserName" ref={register({ required: true })} onChange={handleInputChange}/>
                            </div>
                           
                            {
                                errors && errors.username ? <div>  <div className="ui one  grid column row errorDiv">
                                    <div className="errorTxt column">
                                        <i className="red exclamation triangle icon"></i> User Name is required!!
                                     </div>
                                </div>
                                    <div className="ui hidden divider"></div>
                                </div>
                                    : null}
                            <button className="ui primary button" >
                               add
                            </button>
                            <button className="ui primary button" onClick={props.closeAddFunction}>
                               cancel
                            </button>
                           
                        </form>
                    </div>
                    </div>

                </div>


            </div>

</>


)


}
export default TableContent;