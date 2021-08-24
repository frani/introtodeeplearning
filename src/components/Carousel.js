import React from "react";

import Siema from "siema";

const Carousel = ({
  children,
  rtl = false,
  perPage = { 0: 4 },
  onChangeCallback = () => console.log(""),
}) => {
  React.useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const mySiema = new Siema({
      perPage: perPage,
      startIndex: 0,
      rtl,
      onChange: onChangeCallback,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div className="siema">{children}</div>;
};

export default Carousel;
