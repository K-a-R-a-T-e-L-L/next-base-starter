import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full max-w-7xl min-h-screen flex flex-col items-center justify-center bg-amber-50 px-2.5 relative">
      {children}
    </div>
  );
};

export default Wrapper;
