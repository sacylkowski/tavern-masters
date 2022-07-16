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
import Modal from "./component/Modal";

// ApolloClient Link -- BEGIN --
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context';

// in case client runs into error connecting to GraphQl
const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// set up link to backend
const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:3001/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(link)
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
            <Route path="/profile">
              <Route path=":username" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>
            <Route
              path="/campaign/:id"
              element={<SingleCampaign />}
            />
            <Route
              path="/create-campaign"
              element={<Modal campaign={true}/>}
            />
            <Route
              path="/create-encounter"
              element={<Modal />}
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
