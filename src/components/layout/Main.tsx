import { ReactNode } from "react";

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full flex-1 bg-gray-200 flex items-center justify-center relative">
      {children}
    </main>
  );
};

export default Main;
