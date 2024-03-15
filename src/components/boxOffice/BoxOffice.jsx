import React from "react";
import styles from "./BoxOffice.module.scss";
import BoxOfficeRow from "./boxOfficeRow/BoxOfficeRow";
import { useGetMovies } from "../../hooks/useGetMovies";

function BoxOffice() {
  const { data: boxOfficeData } = useGetMovies(
    import.meta.env.VITE_BOXOFFICE_URL,
    8
  );

  return (
    <div className={styles.boxOffice}>
      {boxOfficeData.map((boxoffice, index) => {
        return (
          <BoxOfficeRow
            key={boxoffice.id}
            index={index + 1}
            title={boxoffice.title}
            value={boxoffice.popularity}
          />
        );
      })}
    </div>
  );
}

export default BoxOffice;
