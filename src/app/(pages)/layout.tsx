import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Wrapper from "@/components/layout/Wrapper";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <ReactQueryProvider>
      <Wrapper>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Wrapper>
    </ReactQueryProvider>
  );
}
