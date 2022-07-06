import React from 'react';
import CampaignList from "../components/CampaignList";

const Home = () => {

  return (
    <main className="main">
      <div className="">
       <nav className="">
       <ul>
                <li>
                {/* <a href="#profile"
                onClick={() => handlePageChange("Profile")}
                className={currentPage === "Profile" ? "nav-link active" : "nav-link"}>
                    Profile</a> */}
                    Profile
                </li>
                <li>
                {/* <a href="#profile"
                onClick={() => handlePageChange("Profile")}
                className={currentPage === "Profile" ? "nav-link active" : "nav-link"}>
                    Profile</a> */}
                    Login
                </li>
                </ul>
       </nav>
        </div>
        <div>
            <CampaignList />
        </div>
    </main>
  );
};

export default Home;
