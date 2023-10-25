import { useRef } from "react";
import { styled } from "@stitches/react";
import useOnScreen from "../hooks/useOnScreen";
import { ConfigsType } from "../configs";

const isPortrait = window.matchMedia("(orientation: portrait)").matches;

const Layout = styled("div", {
  width: "100%",
  padding: isPortrait ? "15% 0% 15% 5%" : "5% 0% 5% 10%",
});

const Title = styled("p", {
  color: "#795548",
  width: "100%",
  fontSize: isPortrait ? "2.5em" : "3.5em",
  margin: 0,
  fontWeight: "500",
  textAlign: "center",
});

const SubTitle = styled("p", {
  color: "#795548",
  width: "100%",
  fontSize: isPortrait ? "1.0em" : "2em",
  margin: "24px 0",
  fontWeight: "300",
  textAlign: "center",
  lineHeight: 1.8,
});

const ExclamationMarkTitle = styled("span", {
  color: "#795548",
  width: "100%",
  fontSize: isPortrait ? "1.4em" : "2.2em",
  fontWeight: "500",
  lineHeight: 1.8,
});

type GreetingProps = {
  config: ConfigsType;
};

const Greeting = ({ config }: GreetingProps) => {
  const ref = useRef<HTMLSelectElement>(null);
  const onScreen: boolean = useOnScreen<HTMLDivElement>(ref, "-125px");

  return (
    <section
      ref={ref}
      style={{
        height: "60vh",
        background: onScreen ? "#EFEBE9" : "#DADADA",
        overflow: "hidden",
        position: "relative",
        transition: "background 1s ease-in",
      }}
    >
      <Layout>
        <Title>결혼합니다</Title>
        <SubTitle>
          <span>
            서로 다른 두 사람이 만나 함께 <ExclamationMarkTitle>성</ExclamationMarkTitle>장해 가려고 합니다.
          </span>
          <br />
          서로의 존<ExclamationMarkTitle>재</ExclamationMarkTitle>가 가장 큰 힘이 되어 주겠습니다.
          <br />
          함께하는 모든 <ExclamationMarkTitle>시</ExclamationMarkTitle>간 모든 순간
          <br />
          <ExclamationMarkTitle>온</ExclamationMarkTitle> 마음을 다해 사랑하며 살겠습니다.
          <br />
          <br />
          다름이 귀한 채움이 될 수 있게 살겠습니다.
          <br />
          시간이 흐를수록 깊어질 저희의 약속을 함께 축복해 주세요
          <br />
          <br />
          {config.groom.fatherName} · {config.groom.motherName}의 아들{" "}
          {config.groom.name}
          <br />
          {config.bride.fatherName} · {config.bride.motherName}의 딸{" "}
          {config.bride.name}
        </SubTitle>
      </Layout>
    </section>
  );
};

export default Greeting;
