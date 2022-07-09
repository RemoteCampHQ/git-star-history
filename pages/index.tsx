import type { NextPage } from "next";
import { useEffect } from "react";
import Image from "next/image";

import { MainLayout, Header, SearchBox } from "components";
import logo from "assets/img/logo.svg";
import { MetaType } from "schema";

import { Footer } from "components/Footer";
import { Main } from "components/Main";
import { StartChart } from "components/Chart";

type HomeProps = {
  meta: MetaType;
};

const Home: NextPage<HomeProps> = ({ meta }) => {
  const { menu } = meta;
  useEffect(() => {
    // let _hmt = _hmt || [];
    (function () {
      const hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?ecdb408a54193e7147621e97b217e200";
      const s = document.getElementsByTagName("script")[0];
      s.parentNode?.insertBefore(hm, s);
    })();
  });

  return (
    <>
      <MainLayout>
        <Header Logo={<Image src={logo} alt="远程工作-logo" />} />
        <Main chart={<StartChart />}></Main>
        <Footer></Footer>
      </MainLayout>
    </>
  );
};

export async function getStaticProps() {
  // const { status, data } = await axios.get(`${envConfig.basicApi}/remote/meta`);
  return {
    props: {
      meta: {
        menu: [
          {
            key: "home",
            name: "首页",
          },
          {
            key: "community",
            name: "社区",
            children: [
              {
                key: "podcast",
              },
              {
                key: "blog",
              },
            ],
          },
          {
            key: "seeker",
            name: "求职者",
          },
          {
            key: "employer",
            name: "雇主",
          },
        ],
      },
    },
  };
}

export default Home;
