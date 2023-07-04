import React from "react";
import { Watch } from "react-loader-spinner";

export const Loader = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Watch
        height="80"
        width="80"
        radius="48"
        color="#4fa94d"
        ariaLabel="watch-loading"
        wrapperStyle={{}}
        // wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
