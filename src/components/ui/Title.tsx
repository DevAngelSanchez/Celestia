import * as React from "react";

interface TitleProps {
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <h2 className="text-2xl font-bold text-center">
      {children}
    </h2>
  );
};
