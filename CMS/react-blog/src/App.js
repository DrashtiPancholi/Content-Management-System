import React from 'react';
import Posts from './Components/Posts/Posts';

export default function App() {
  return (
    <div>
        <switch>
            <Route path='/' render={()=><Posts/>}/>
        </switch>
    </div>
  );
}