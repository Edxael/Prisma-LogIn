import React from 'react'
import gql from "graphql-tag"
import { Redirect } from 'react-router-dom'
import { client } from './EndPoint/EndPoint'
 

 
 
export default class extends React.Component{
    state = { uemal: '', upass: '', redirect: false }
 
    render(){
 
        const LogMeIn = async () => {


            console.log('Login Innnnn.....')
            console.log(this.state.uemal, this.state.upass)

          
            let temp1 = await client.query({
                query: gql`
                query {
                    user(where: { email: "${this.state.uemal}" }){
                      id
                      name
                      email
                      password
                    }
                  }
                `})
                .then((result) => { return result.data.user } )
                .catch( console.log("Wrong Username or Password.") )
            
            await console.log("La Data: ", temp1 )

            if(temp1 === null){
                console.log("No Way Jose...") 
                this.setState({ uemal: '', upass: '' })
            }else if (temp1.password === this.state.upass){
                console.log("Correct Password.................")
                this.setState({ redirect: true })
            }

            
        }
 
        
 
        return(
            <div>
                <h1>Log-In</h1>
                
                <label>User Name:</label><br/>
                <input className="gralInput" type="text" value={ this.state.uemal } onChange={ (e) => { this.setState({ uemal: e.target.value }) } } />
                <br/><br/>

                <label>Password:</label><br/>
                <input className="gralInput" type="text" value={ this.state.upass } onChange={ (e) => { this.setState({ upass: e.target.value }) } } />
                <br/><br/><br/>

                <button className="gralButton" onClick={ LogMeIn } >Log-In</button>

                { this.state.redirect ? <Redirect push to="/2" /> : <p>Provide Credentials to Log-In</p> }
                
            </div>
        )
    }
}