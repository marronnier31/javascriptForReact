import Header from "../../include/Header";
import { useSearchParams } from "react-router-dom";
import "./ListPage.css";

const ListPage = () => {
  const [queryParams] = useSearchParams();
  const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  const pageSize = queryParams.get("pageSize")
    ? parseInt(queryParams.get("pageSize"))
    : 10;
  return (
    <>
      <div className="main-container">
        <Header />
        <p>
          Todo List page={page} size={pageSize}{" "}
        </p>
        <main className="content-area">
          <div className="button-wrapper">
            <button className="custom-btn-outline" type="button">
              List Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ListPage;
