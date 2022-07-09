import Image from 'next/image';
import Link from 'next/link';

import toTop from 'assets/img/totop.svg';
import bilibili from 'assets/img/bilibili.svg';
import weibo from 'assets/img/weibo.svg';
import tiktok from 'assets/img/tiktok.svg';
import weixin from 'assets/img/weixin.svg';

export const Footer = () => {
  return (
    <div>
      <div className="relative w-full h-[237px] bg-bgBlack ">
        <div className="absolute left-[208px] top-[34px]">
          <div className="text-xl font-bold text-[#fff]">锐目社区</div>
          <div className="text-lg w-[660px] text-bearlyWhite my-[17px]">
            我们存在的意义在于布道、推广、普及远程的工作方式。我们致力
            于为朋友们打通获取远程工作的最后一百米跑道。为了让朋友们获得更加舒适、公平 的工作机会，我们在努力服务。
          </div>
        </div>
        <div className="absolute bottom-8 right-8 text-lg flex items-center text-bearlyWhite cursor-pointer">
          回到顶部
          <Image src={toTop} alt="to top" />
        </div>
      </div>
      <div className="bg-[#eee] h-[60px] relative flex justify-center items-center text-[14px]">
        <div>Copyright © 2022 锐目</div>
        <div className="flex justify-between absolute items-center w-[140px] right-[108px]">
          <Link href="">
            <Image className="cursor-pointer" src={weibo} alt="weibo"></Image>
          </Link>
          <Link href="">
            <Image className="cursor-pointer" src={tiktok} alt="tiktok"></Image>
          </Link>
          <Link href="">
            <Image className="cursor-pointer" src={weixin} alt="weixin"></Image>
          </Link>
          <Link href="">
            <Image className="cursor-pointer" src={bilibili} alt="bilibili"></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};
