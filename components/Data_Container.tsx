import React from "react";

interface DataContainerInterface {
  children?: React.ReactNode;
}

const Data: React.FC<DataContainerInterface> = ({ children }) => {
  return (
    <div className="absolute top-0 right-0 h-[200vh]  w-[calc(100vw-23rem)]">
      {children}
    </div>
  );
};

export default Data;
