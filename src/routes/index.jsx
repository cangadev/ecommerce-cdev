import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "../Pages/Usuario/HomePage";
import pageProdutos from "../Pages/Usuario/pageProdutos";
import pageConta from "../Pages/Usuario/pageConta";
import pageCarrinho from "../Pages/Usuario/pageCarrinho";
import Login from "../Pages/Login";

import NotFound from "../Pages/404";

function Routes() { 
  return (
    <BrowserRouter>
    <Switch>

      <Route exact path="/" component={Home} />
      <Route path="/pageproduto" component={pageProdutos} />
      <Route path="/pageConta" component={pageConta} />
      <Route path="/pageCarrinho" component={pageCarrinho}/>
      <Route path="/first" component={Login}/>
    
      <Route path="*" component={NotFound} />
    </Switch>
</BrowserRouter>
  );
}

export default Routes;
