import styled from 'styled-components';
import Image from 'next/image';

export const Header = ({
  Logo,
}: {
  Logo: React.ReactNode;
}) => {
  return (
    <div className="relative h-[60px] w-full flex flex-1 justify-center items-center">
      <div className="absolute left-8">{Logo}</div>
      <div>{}</div>
      <div className="absolute right-8 h-[60px] w-[33%] flex justify-between items-center">
        {}
        {}
      </div>
    </div>
  );
};
