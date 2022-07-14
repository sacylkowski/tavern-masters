import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import SingleCampaign from "./pages/SingleCampaign";

// ApolloClient Link -- BEGIN --
  import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from,} from '@apollo/client'
  import { onError } from '@apollo/client/link/error'

  // in case client runs into error connecting to GraphQl
  const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        return alert(`Graphql error ${message}`);
      });
    }
  });

  // set up link to backend
  const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:3001/graphql" }),
  ]);

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
  })

// ApolloClient Link -- END --

function App() {
  return (
    // linking the apollo client to graphql api
    <ApolloProvider client={client}>

      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/"
              element={<Signup />}
            />
            <Route
              path="/profile"
              element={<Profile />}
            />
            <Route
                path="/campaign/:id"
                element={<SingleCampaign />}
              />
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </div >
        <Footer />
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
