import React from 'react';

function DisplayUser(props) {
    // Setting up elements, giving classes and adding values if needed
    let {login,name,location,html_url,following,followers,bio,avatar_url} = props.user
    
  

    return (     
        <>
    <div className="maincard">
    <h2> Hello {name}</h2> <br>
    </br><img width="200px" src={avatar_url} />
    <br></br>
    From sunny {location}.
    </div>
  
    <div>
    <h2>Here are some of your followers</h2>
    </div>
    </>
    )
   
  }

export default DisplayUser;