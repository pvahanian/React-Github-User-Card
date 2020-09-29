import React from 'react';
import './App.css';
import DisplayUser from './components/DisplayUser'
import DisplayFollowers from './components/DisplayFollowers'


class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      user:[],
      userName:'pvahanian',
      followers:[]
    };
  }

  
  componentDidMount() {
    this.fetchUser(this.state.userName);
    this.fetchFollowers(this.state.userName);
  }

  fetchUser = (userName) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({user: data});
      })
      .catch((err) => console.log("error: ", err));
  };
  
  fetchFollowers = (userName) => {
    fetch(`https://api.github.com/users/${userName}/followers`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({followers: data});
        console.log(data)
      })
      .catch((err) => console.log("error: ", err));
  };



render (){
// localStorage.setItem("zigs", this.state.user.login)
// console.log(
// localStorage.getItem("zigs")
// )
// console.log(storage.getItem(ziggsOneTrick))
  return(
    <div className="App">
      <DisplayUser user={this.state.user} />
     <div>
      {this.state.followers.map(follower=><DisplayFollowers follower= {follower} />)}
      </div>
     </div>
    );
  }
}

export default App;


