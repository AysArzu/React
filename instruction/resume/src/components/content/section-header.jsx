import React from "react";
import "./section-header.css";
import { ButtonResumeDownload } from "./about/button-resume-download";

export const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};
