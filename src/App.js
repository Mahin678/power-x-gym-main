import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//** Import Pages Components */
import HomePage from "./Components/Pages/Home/HomePage";
import OurClasses from "./Components/Pages/OurClasses/OurClasses";
import NotFound from "./Components/Pages/NotFound";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/ourClasses" component={OurClasses} />

               <Route path="*" component={NotFound} />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;
