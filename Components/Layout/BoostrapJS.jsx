"use client";
import { useEffect } from "react";
const BoostrapJS = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("@popperjs/core/dist/umd/popper");
      require("bootstrap/dist/js/bootstrap");
    }
  }, []);
  return <></>;
};

export default BoostrapJS;
