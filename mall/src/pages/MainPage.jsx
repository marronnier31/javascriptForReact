import { Link } from "react-router-dom";
import Header from "../include/Header";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div>
          <Link to={"/todo/list?page=3&pageSize=30"}>List PAGE</Link> <br />
          <a href="/about">ABOUT PAGE</a>
        </div>
        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              Main Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default MainPage;
