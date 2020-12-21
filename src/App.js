import React from "react"
import { Route, Redirect } from "react-router-dom"
import './App.css';
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./Nav/NavBar"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"


export const Chorepad =(props) =>(
  <>
   <Route render={() => {
          // The user id is saved under the key app_user_id in local Storage. Change below if needed!
      
            if (localStorage.getItem("kidschorepad_user")) {
                return (
                    <>
                     <h1>Kids Chorepad</h1>
                        {/* //Components that are rendered when the user is authenticated go inside this React fragment */}
                        <Route render={props => <NavBar {...props} />} />
                         <Route render={props => <ApplicationViews {...props} />} />
                    </>
                )
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/register" render={props => <Register {...props} />} />
    </>
)


































// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
