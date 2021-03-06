import React,{useState,useEffect} from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom'
import { Menu, Sidebar } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react'
import TopLogo from './images/menu.png'
import './UI.css';

const Demo=function Demo(props){

const [name,setName]=useState(sessionStorage.getItem("userName"))
const [redirect,setRedirect]=useState(false)
const [visible, setVisible] = useState(false);
const [view, setView] = useState(null);
useEffect(() => {

if(!name){
setRedirect(true);
}
}, [])



function showSideBar() {
    setVisible(true);
}

const Logout = function Logout() {
    console.log("hey")
    setRedirect(true);
    sessionStorage.clear();
}

if(redirect){
    return(<Redirect to="/"/>)
}
return(<>
     <div>

<Sidebar.Pushable >
    <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
        className="mySegment mysidebar"
        style={{width:'280px'}}
        >
         <Menu.Item >
         <i className="user circle icon" />
                <h3 className="ui header myMenu" style={{color:'white'}}>{name}</h3>
                </Menu.Item>
        <div className="ui divider"/>
            <Link to="/Dashboard">
               
                <Menu.Item >
                    
                    <h3 className="ui header myMenu" style={{color:'white'}}>Dashboard</h3>
                </Menu.Item>
            </Link>

        {name!=='Student' &&
            <Link to="/App">
                <Menu.Item >
                <h3 className="ui header myMenu"style={{color:'white'}} >Student Listing</h3>
                </Menu.Item>
            </Link>
            }
             {name!=='Admin' &&
            <Link to="/App">
                <Menu.Item >
                <h3 className="ui header myMenu"style={{color:'white'}} >Student Report</h3>
                </Menu.Item>
            </Link>
                }
            <Link to="/teachers">
                <Menu.Item >
                <h3 className="ui header myMenu"style={{color:'white'}} >Teacher</h3>
                </Menu.Item>
            </Link>
            
       
    </Sidebar>
    <Sidebar.Pusher dimmed={visible} >
        <div className="parent" style={{height:'100vh'}}>
            <div className="ui segment">
                <div className="ui grid  mySegment">
                    <div className="ui row two column wide">
                        <div className="column">
                            <div className="ui small image">
                                <img src={TopLogo} onClick={showSideBar} alt="logo" style={{maxWidth:'30% '}}/>
                            </div>

                        </div>
                        <div className="right aligned column">
                            <Dropdown
                                icon='circle user'
                                floating
                                style={{fontSize:'18px',color:'white',}}
                                labeled
                                button
                                className='icon icon-background'
                            >
                            
                                <Dropdown.Menu
                                    direction="left"
                                    compact
                                    floating
                                    labeled
                                    button
                                    style={{zIndex:0}}
                                >
                                    <Link to="/">
                                        <Dropdown.Item onClick={Logout} style={{ fontSize: '14px', padding: '10px', color: 'black', }}>
                                            <i className="power off icon" />
                                            Logout
                                     </Dropdown.Item>
                                    </Link>
                                    {/* <Link to="/">
                                        <Dropdown.Item  style={{ fontSize: '14px', padding: '10px', color: 'black' }} >
                                            <i className="undo alternate icon" />
                                            Change Password
                                    </Dropdown.Item>
                                    </Link> */}
                                </Dropdown.Menu>
                                 </Dropdown>
                             
                            {/* </div> */}

                        </div>
                    </div>

                </div>
            </div>
            <div className="ui container">
                <div className="ui grid">
                    <div className="ui doubling stackable column">
                        <div className="ui column">
                            
                            {/* {
                                view && view === "users" ? <UserList name={name} authority={authority} /> :
                                    view === "Eureka_Copy" ? <EurekaCopy name={name} authority={authority} /> :
                                        view === "Advertisement" ? <Advertisement name={name} authority={authority} /> :
                                            view === "FanCo" ? <Fanco name={name} authority={authority} /> :
                                                view === "Scheduling" ? <Scheduling name={name} authority={authority} /> :
                                                    view==='Agency'?<Agency/>:
                                                        view === "upload_subscribers" ? "upload_subscribers" : view==='Reset_Password'?<ChangePassword/>:<UserList name={name} authority={authority} />
                            } */}
                            {
                                props.children
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </Sidebar.Pusher>
</Sidebar.Pushable>
</div>

</>
)




}
export default Demo;