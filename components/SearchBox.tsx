import { Input } from 'antd';
import styled from 'styled-components';
import Image from 'next/image';

const SearchBoxWrapper = styled.div`
  .ant-input-affix-wrapper:focus {
    border-color: #009fa1 !important;
    box-shadow: none !important;
  }
  .ant-input-affix-wrapper-focused {
    border-color: #009fa1 !important;
    box-shadow: none !important;
  }
  .ant-input-affix-wrapper:hover {
    border-color: #009fa1 !important;
    box-shadow: none !important;
  }

  .ant-input-affix-wrapper {
    box-shadow: none !important;
  }
`;

export const SearchBox = () => {
  return (
    <SearchBoxWrapper>
      <Input
        suffix={
          <div className="h-[26px] w-[40px]  rounded bg-bgGrey flex justify-center items-center cursor-pointer">
            {/* <Image src={} alt="search icon" /> */}
          </div>
        }
        className="rounded w-[275px] h-[40px]"
      ></Input>
    </SearchBoxWrapper>
  );
};
