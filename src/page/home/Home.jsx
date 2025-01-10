import React, { useEffect, useRef } from "react";
import SkipNavigation from "../../components/skipNavigation/SkipNavigation";
import Layout from "../../components/layout/Layout";
import "./Home.css";

const SKIP_NAVIGATION_ID = [
  { id: 0, href: "cc1" },
  { id: 1, href: "cc2" },
  { id: 2, href: "cc3" },
];

export default function Home() {
  const mainContentRef = useRef(null);

  // 페이지 로드 시 주요 콘텐츠로 포커스 이동
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  }, []);

  return (
    <>
      {SKIP_NAVIGATION_ID.map((item) => (
        <SkipNavigation key={item.id} targetId={item.href} />
      ))}

      <Layout>
        <div id='cc1' className='home cc1'></div>
        <div id='cc2' className='home cc2'>
          About Me
        </div>
        <div id='cc3' className='home cc3'>
          Category
        </div>
      </Layout>
    </>
  );
}
