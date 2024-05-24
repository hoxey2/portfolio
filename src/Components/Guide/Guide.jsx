import React from "react";
import "./style.scss";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";

const Guide = () => {
  let [isShown, setShown] = useState(false);
  return (
    <section
      className="guideBox"
      style={
        isShown
          ? { backgroundColor: "rgba(140, 82, 255, 0.5)" }
          : { backgroundColor: "rgba(140, 82, 255, 0.7)" }
      }
    >
      <div className="flexBox">
        <h2>포트폴리오 구조 및 기능 소개</h2>
        <SlArrowDown
          className={isShown ? "svg_up" : "svg_down"}
          onClick={() => {
            setShown((e) => !e);
          }}
        />
      </div>
      <div
        className="accordion"
        style={isShown ? { maxHeight: 0 } : { maxHeight: "max-content" }}
      >
        <div className="structure">
          <img src="projects/structure.png" />
          <div>
            <h2>1. 포트폴리오 구조 (* 상단 이미지 참조)</h2>
            <h3>
              <li>Component와 UI로 디자인을 분리하여 반응형으로 제작</li>
              <li>Layout을 설정하여 전체적인 틀에 맞춰 제작</li>
              <li>Header의 왼쪽에 Logo, 오른쪽에 Navbar 배치</li>
              <li>
                Header 밑에 Guide로 포트폴리오 구조,기능 설명
                <span> (* 현재 화면)</span>
              </li>
              <li>Component는 Card내부에 만들고, Label과 InnerCard로 제작</li>
              <li>Footer에 간단한 인적사항 작성</li>
            </h3>
          </div>
          <div>
            <h2>2. 포트폴리오 기능 설명</h2>
            <h3>
              <li>Logo에 text-shadow를 넣어 개성있는 로고표현</li>
              <li>Navbar는 모바일 화면에서 햄버거 아이콘으로 변경</li>
              <li>Card hover시 shadow 효과에서 border 효과로 강조</li>
              <li>InnerCard hover시 색상을 진하게 하여 강조</li>
              <li>Image hover시 확대되며 역동적이게 표현</li>
              <li>Icon hover시 애니메이션과 text 표시</li>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
