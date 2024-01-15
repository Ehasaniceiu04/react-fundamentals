
import React, { useState } from 'react'

function Subscribe() {
    let [isSubscribe,setSubscribe]=useState(false);
    const result='a' && 'This is ehasan';
     let content=isSubscribe===true?<div>You are subscribed</div>:<button className='btn btn-primary' onClick={()=>setSubscribe(true)}>Subscribe</button>
    return result;
  
}

export default Subscribe
