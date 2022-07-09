import styled from 'styled-components';

const MainLayoutWrapper = styled.div``;

export const MainLayout = ({ children }: { children: React.ReactNode[] }) => {
  const [Header, Body, Footer] = children;
  return (
    <MainLayoutWrapper className="w-full font-serif">
      {/* <section>{Header}</section> */}
      <section>{Body}</section>
      {/* <section>{Footer}</section> */}
    </MainLayoutWrapper>
  );
};
