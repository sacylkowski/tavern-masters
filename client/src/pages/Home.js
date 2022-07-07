import React from 'react';
import { Link } from "react-router-dom";
import CampaignList from "../components/CampaignList";

const Home = () => {

    return (
        <main className="main">
            <div className="">
                <nav className="">

                    {/* <a href="#profile"
                onClick={() => handlePageChange("Profile")}
                className={currentPage === "Profile" ? "nav-link active" : "nav-link"}>
                    Profile</a> */}
                    <Link to="/profile">Profile</Link>
                    {/* <a href="#profile"
                onClick={() => handlePageChange("Profile")}
                className={currentPage === "Profile" ? "nav-link active" : "nav-link"}>
                    Profile</a> */}
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>

                </nav>
            </div>
            <div>
                <CampaignList />
            </div>
        </main>
    );
};

export default Home;
