import React from "react";
import "./Position.css";

export default function Position() {
  return (
    <div className='display'>
      {/* position */}
      <section className='section'>
        <h2>position 차이</h2>
        <div>static</div>
        <div className='releative'>releative</div>
        <br />
        <div className='absolute'>absolute</div>
        <br />
        <div className='sticky'>sticky</div>
        <br />
        <div className='fixed'>fixed</div>
      </section>
      {/* span 과 div 차이 */}
      <section className='section'>
        <h2>span과 div 차이</h2>
        <div />
        <br />
        <div>내용이 있는 div 태그</div>
        <br />
        <span />
        <br />
        <span>내용이 있는 span 태그</span>
      </section>
      <section className='section'>
        <h2>position 차이</h2>
        <div>static</div>
        <div className='releative'>releative</div>
        <br />
        <div className='absolute'>absolute</div>
        <br />
        <div className='sticky'>sticky</div>
        <br />
        <div className='fixed'>fixed</div>
      </section>
      <section className='section'>
        <h2>position 차이</h2>
        <div>static</div>
        <div className='releative'>releative</div>
        <br />
        <div className='absolute'>absolute</div>
        <br />
        <div className='sticky'>sticky</div>
        <br />
        <div className='fixed'>fixed</div>
      </section>
    </div>
  );
}
