import React from "react"
import "./homepage.css"

const homepage=()=> {
    const initialText = 'Where would you like to go?';

    return (
    <div>
      <input type="text" value={initialText} />
    </div>
  );

};

export default homepage