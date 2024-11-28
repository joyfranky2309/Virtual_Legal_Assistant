import React from "react";
import './blog.css';
import DownloadButton from './download';
const example = "rti.pdf";
function fir(){
  return(
    <div className="page-container">
    <h1 className="page-title">RTI</h1>
    <div className="page-content">
    <h2>Introduction</h2>
    <p>
        The Right to Information (RTI) is a fundamental right that empowers individuals to access information held by public authorities. It promotes transparency and accountability in government by allowing citizens to request and obtain information about the functioning and decisions of public institutions. By using RTI, people can better understand government actions, make informed decisions, and participate more effectively in democratic processes.
    </p>
    <h1>Steps to File RTI in India</h1>
    <ol>
        <li>Identify the Public Authority.</li>
        <li>Draft your RTI application.</li>
        <li>Provide required details (name, address, etc.).</li>
        <li>Submit the application to the PIO.</li>
        <li>Pay the application fee (if applicable).</li>
        <li>Wait for a response (30 days). </li>
    </ol>
    <DownloadButton name={example}/>
    </div>
  </div>
  )
}
export default fir;