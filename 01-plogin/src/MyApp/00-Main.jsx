import React from 'react'
import { ApolloProvider } from "react-apollo"
import { HashRouter, Route, Link } from 'react-router-dom'
// import './Style/style.css'
import { client } from './EndPoint/EndPoint'
 
import LogIn from './01-LogIn'
import Profile from './02-Profile'

 
 
export default class extends React.Component{
    render(){
 
        return(
            <ApolloProvider client={client}>
                <HashRouter>
                    <div className="MainContainer">
                
                        <h1>Prisma Log-In Test.</h1>
                
                        <hr/>
                
                        <Route exact path="/" component={LogIn}/>
                        <Route path="/2" component={Profile}/>
 
                        <br/>
                        <hr/>
                        <div>By: Edmundo</div>
                
                    </div>
                </HashRouter>
            </ApolloProvider>
        )
    }
}



{/* <div className="menu1">
    <Link className="menuButton" to="/">All Singers</Link>
    <Link className="menuButton" to="/2">Add-Singer</Link>
</div> */}