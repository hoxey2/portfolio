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
          ? { backgroundColor: "rgba(140, 82, 255, 0.7)" }
          : { backgroundColor: "rgba(140, 82, 255, 0.5)" }
      }
    >
      <div className="flexBox">
        <h2>포트폴리오 구조 및 기능 소개</h2>
        <SlArrowDown
          className="accordion_arrow"
          style={
            isShown
              ? {
                  backgroundColor: "rgba(85, 26, 139, 0.3)",
                  rotate: "180deg",
                }
              : {
                  backgroundColor: "rgba(85, 26, 139, 0.7)",
                  rotate: "0deg",
                }
          }
          onClick={() => {
            setShown((e) => !e);
          }}
        />
      </div>
      <div
        className="accordion"
        style={isShown ? { maxHeight: "max-content" } : { maxHeight: 0 }}
      >
        <div className="structure">
          <img src="image/structure.png" />
          <p>
            <h2>1. 포트폴리오 구조 (* 상단 이미지 참조)</h2>
            <li>
              <h3>
                <strong>Component</strong>와 <strong>UI</strong>로 디자인을
                분리하여 <mark>반응형으로 제작</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Layout</strong>을 설정하여 전체적인{" "}
                <mark>틀에 맞춰 제작</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Header</strong> 왼쪽부터 <mark>Logo, Navbar 배치 </mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Guide</strong>로 포트폴리오{" "}
                <mark>구조 및 기능 설명</mark>
                <strong> (* 현재 화면)</strong>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Component</strong>는{" "}
                <mark>Card 형식 내부에 Label과 InnerCard로 제작</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Footer</strong>에 간단한 <mark>인적사항 작성</mark>
              </h3>
            </li>
          </p>
          <p>
            <h2>2. 포트폴리오 기능 설명</h2>
            <li>
              <h3>
                <strong>Logo</strong>에 <u>text-shadow</u>로{" "}
                <mark>개성있는 로고 표현</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Navbar</strong>는 <u>모바일 화면</u>에서{" "}
                <mark>햄버거 아이콘으로 변경</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Card hover</strong>시 <u>shadow 효과</u>에서{" "}
                <mark>border 효과로 변경</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>InnerCard hover</strong>시 <u>색상 변경하여</u>{" "}
                <mark>border 강조</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Image hover</strong>시 <u>확대</u>되며{" "}
                <mark>역동적이게 표현</mark>
              </h3>
            </li>
            <li>
              <h3>
                <strong>Icon hover</strong>시 <u>애니메이션</u>과{" "}
                <mark>추가 text 표시</mark>
              </h3>
            </li>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guide;
