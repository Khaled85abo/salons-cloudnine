import React, { useEffect, useState} from 'react'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Salons from "./views/Salons"
import Salon from "./views/IndividualSalon"







const App = () => {


  
  return (

    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact component={Salons}  />
          <Route  path="/salon/:id" component={Salon}/>

        </Switch>
      </div>
    </BrowserRouter>
      )
}
 

export default App;
