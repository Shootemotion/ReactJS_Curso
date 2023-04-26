import React from 'react'
import "./Loader.css"
import { JellyTriangle } from '@uiball/loaders'

function Loader() {
  return (
    <div className="loader-container">
      <JellyTriangle 
        size={60}
        speed={1.75} 
        color="black" 
      />
    </div>
  );
}

export default Loader;