import { Fragment } from "react";
import {
  SvgJavascript,
  SvgNextjs,
  SvgRedux,
  SvgMaterialui,
  SvgMongodb,
  SvgHtml5,
  SvgCss,
  SvgNodeJs,
  SvgReact
} from "../icons/icons";

const Qualifications = () => {
  return (
    <Fragment>
      <div>Tools of choice:</div>
      <div>
        Javascript, HTML5, CSS, NodeJS, NextJS, React, Redux, MongoDB,
        Material-UI,
      </div>
      <div>Other Technologies:</div>
      <div>
        FireBase, PostgreSQL, Command Line, C#, Unity, Socket.IO, Rollbar
      </div>
      <SvgHtml5 size="5x" />
      <SvgCss size="5x" />
      <SvgJavascript height="55px" width="55px" />
      <SvgNodeJs size="5x" />
      <SvgNextjs height="55px" width="55px" />
      <SvgReact size="5x" />
      <SvgRedux height="55px" width="55px" />
      <SvgMongodb height="55px" width="55px" />
      <SvgMaterialui height="55px" width="55px" />
      <SvgHtml5 size="2x" />
      <SvgCss size="2x" />
      <SvgJavascript height="23px" width="23px" />
      <SvgNodeJs size="2x" />
      <SvgNextjs height="23px" width="23px" />
      <SvgReact size="2x" />
      <SvgRedux height="23px" width="23px" />
      <SvgMongodb height="23px" width="23px" />
      <SvgMaterialui height="23px" width="23px" />
    </Fragment>
  );
};

export default Qualifications;
