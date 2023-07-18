import React from "react";
import Ex11 from './component/Ex11'


function App(props) {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center">
          <div className="display-3 text-success">React Hooks</div>
        </div>
      </div>
      {/* <Ex9 itemPerPage = {20}/> */}
      <Ex11/>
    </div>
  )
}
export default App