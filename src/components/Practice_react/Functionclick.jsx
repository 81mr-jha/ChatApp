// import React from 'react'

// function Functionclick() {

//     function clickEvent(){
//         console.log("Hii this is Functional Component")
//     }

//   return (
//     <div>
//       <button onClick={clickEvent}>Click me</button>
//     </div>
//   )
// }

// export default Functionclick
import React, { Component } from 'react'

class Functionclick extends Component {

    clickEvent(){
        console.log('Dealing with class component')
    }

  render() {
    return (
      <div>
        <button onClick={this.clickEvent}>Click on this button</button>
      </div>
    )
  }
}

export default Functionclick

