import React from "react";

interface DataContainerInterface {
  children?: React.ReactNode;
}

const Data: React.FC<DataContainerInterface> = ({ children }) => {
  return (
    <div className="absolute top-0 right-0 z-20 bg-transparent h-[200vh]  w-[calc(100vw-23rem)] py-[5rem] px-[10rem]">
      {children}
    </div>
  );
};

export default Data;
