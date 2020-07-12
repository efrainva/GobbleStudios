import React,{Component} from 'react';
// import ReactDOM from "react-dom"
// import logo from './logo.svg';
import './App.css';
import LoginComponent from './FB'
import axios from 'axios'

class App extends Component {
  // componentDidMount(){
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "https://connect.facebook.net/en_US/sdk.js"
  //   document.body.appendChild(script)
  // }

  constructor(props){
    super(props);
    this.state = {
      data:null
    };
 }

//  instagram DONT push
// https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3
// &variables=%7B%22user_id%22%3A%228488041028%22%2C%22include_chaining%22%3Afalse%2C%22
// include_reel%22%3Afalse%2C%22include_suggested_users%22%3Afalse%2C%22
// include_logged_out_extras%22%3Atrue%2C%22include_highlight_reels%22%3Afalse%2C%22include_live_status%22%3Atrue%7D
 
  componentWillMount(){
    fetch( `/https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"id":"8488041028","first":3}`)
    .then(function (response) {
      // handle success
      console.log(response);
      console.log(response.json)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    this.setState({ Canonical : window.location.href });
  }
  b = (e)=> {
    e.preventDefault()
    const url=`https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"id":"228488041028","first":"3"}`
    axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }



  render(){

      return (

        <div className="App" >
          <header className="App-header">
          </header>


          <LoginComponent/>
          <button onClick={this.b}>
            here
          </button>
      </div>
      );
  }
}

export default App;
