import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import SingleCampaign from './pages/SingleCampaign';

const httpLink = createHttpLink({
  uri: '/graphql',
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

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="first">
          <Header />
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/campaign/:id"
              element={<SingleCampaign />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            {/* <Route
              path="/profile"
              element={<Profile />}
            /> */}
            <Route
              path="*"
              element={<NoMatch />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
