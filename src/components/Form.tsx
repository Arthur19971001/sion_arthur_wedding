import { useRef } from "react";
import { styled } from "@stitches/react";
import { ConfigsType } from "../configs";
import { Fab, Action } from "react-tiny-fab";
import "react-tiny-fab/dist/styles.css";

const isPortrait = window.matchMedia("(orientation: portrait)").matches;

type LocationProps = {
  config: ConfigsType;
};

const SubTitle = styled("p", {
  color: "white",
  width: "100%",
  fontSize: isPortrait ? ".8em" : "2em",
  fontWeight: "700",
  textAlign: "center",
  lineHeight: 1.8,
});

const Form = ({ config }: LocationProps) => {

  return (
    <Fab
      mainButtonStyles={{
        borderRadius: 25,
        background: "#73AD21",
        padding: 20,
        width: 200,
        height: 50,
        margin: 10,
      }}
      style={{
        bottom: 0,
        left: 0,
        width: "100%",
        margin: 0,
        textAlign: "center",
      }}
      icon={<SubTitle>하객 참석 여부 작성하기</SubTitle>}
      alwaysShowTitle={true}
      onClick={() => {
        window.open(config.formUrl, "_blank");
      }}
    ></Fab>
  );
};

export default Form;