import { CircularProgress, Grid } from "@mui/material";
import { useRef } from "react";
import useLazyLoad from "../../customhooks/useLazyLoad";
import { APIs_PER_PAGE } from "../../static/config/content";
import ApiCard from "../ApiCard/ApiCard";

const LazyAPIs = ({ entries }) => {
  const triggerRef = useRef(null);
  const TOTAL_PAGES = Math.ceil(entries.count / APIs_PER_PAGE);

  const onGrabData = (currentPage) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data2 = entries.entries.slice(
          ((currentPage - 1) % TOTAL_PAGES) * APIs_PER_PAGE,
          APIs_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        resolve(data2);
      });
    }, 1000);
  };

  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  return (
    <>
      <div className="cards">
        <Grid
          container
          justifyContent="space-evenly"
          style={{ marginTop: "2rem" }}
        >
          {data &&
            data.map(
              ({ API, Auth, Category, Cors, Description, HTTPS, Link }) => (
                <ApiCard
                  key={Link}
                  API={API}
                  Auth={Auth}
                  Category={Category}
                  Cors={Cors}
                  Description={Description}
                  HTTPS={HTTPS}
                  Link={Link}
                />
              )
            )}
        </Grid>
      </div>
      <div
        ref={triggerRef}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        {!loading && <CircularProgress />}
      </div>
    </>
  );
};

export default LazyAPIs;
