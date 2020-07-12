import React,{Component} from 'react';

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
// https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables=%7B%22user_id%22%3A%228488041028%22%2C%22include_chaining%22%3Afalse%2C%22include_reel%22%3Afalse%2C%22include_suggested_users%22%3Afalse%2C%22
// 

// https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables=%7B%22user_id%22%3A%228488041028%22%2C%22include_chaining%22%3Afalse%2C%22include_reel%22%3Afalse%2C%22include_suggested_users%22%3Afalse%2C%22include_logged_out_extras%22%3Atrue%2C%22include_highlight_reels%22%3Afalse%2C%22include_live_status%22%3Atrue%7D


// d4d88dc1500312af6f937f7b804c68c3

// https://www.instagram.com/graphql/query/?query_hash=d4d88dc1500312af6f937f7b804c68c3&variables={"user_id":"8488041028","fetch_media_count":2}
// "first":2}



  render(){


      return (

        <div className="App" >
          
          main
      </div>
      );
  }
}

export default App;
