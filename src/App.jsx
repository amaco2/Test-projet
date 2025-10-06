import HomePagejsx from './HomePagejsx'
import {addClassNameHidden2 } from './Header.jsx'

function App() {


  return (
      <>
      <body ref={addClassNameHidden2}>
        <div>
          <HomePagejsx />
        </div>
      </body>
          
      </>
  )
}

export default App
