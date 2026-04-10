import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const HeaderComponent = () => {
  console.log("[HeaderComponent] - Rendered");
  return (
    <div className="container">
      <b>
        <u>
          <h2 className="text-left">useCallback() Hook Demo</h2>
        </u>
      </b>
    </div>
  );
};

export default React.memo(HeaderComponent);
