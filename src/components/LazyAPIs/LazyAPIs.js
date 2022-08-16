import { CircularProgress, Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useLazyLoad, { RESET_HOOK } from "../../customhooks/useLazyLoad";
import { APIs_PER_PAGE } from "../../static/config/content";
import ApiCard from "../ApiCard/ApiCard";

const LazyAPIs = ({ entries }) => {
  const triggerRef = useRef(null);
  const TOTAL_PAGES = Math.ceil(entries.count / APIs_PER_PAGE);
  const [pageEnd, setPageEnd] = useState(false);

  const onGrabData = (currentPage) => {
    if(currentPage > TOTAL_PAGES) {
      return new Promise((resolve) => {
        setPageEnd(true);
        resolve([]);
      })
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        let data2 = entries.entries.slice(
          ((currentPage - 1) % TOTAL_PAGES) * APIs_PER_PAGE,
          APIs_PER_PAGE * (currentPage % TOTAL_PAGES)
        );
        if (!data2 || data2.length === 0) {
          data2 = [...entries.entries];
        }
        resolve(data2);
      });
    }, 1000);
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });

  useEffect(() => {
    RESET_HOOK();
  }, [entries]);

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
              (
                { API, Auth, Category, Cors, Description, HTTPS, Link },
                idx
              ) => (
                <ApiCard
                  key={`${Link}${idx}`}
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
          {/* {entries.entries.map(
            ({ API, Auth, Category, Cors, Description, HTTPS, Link }, idx) => (
              <ApiCard
                key={`${Link}${idx}`}
                API={API}
                Auth={Auth}
                Category={Category}
                Cors={Cors}
                Description={Description}
                HTTPS={HTTPS}
                Link={Link}
              />
            )
          )} */}
        </Grid>
      </div>
      <div
        ref={triggerRef}
        style={{ textAlign: "center", marginBottom: "3rem" }}
      >
        {!loading && !pageEnd && <CircularProgress />}
      </div>
    </>
  );
};

export default LazyAPIs;
