import React from 'react';

function DisplayFollowers(props) {
    // Setting up elements, giving classes and adding values if needed
    let {login,location,html_url,following,followers,bio,avatar_url} = props.follower    

    return (     
    
    <div className="followers">
    <h2>{login} Is following me</h2> 
    <img width="200px" src={avatar_url} />
    <br></br>
    </div>
    )
  }

export default DisplayFollowers;

