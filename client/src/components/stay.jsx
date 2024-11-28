import React from "react";
import './blog.css';
import DownloadButton from './download';
const example = "rti.pdf";
function stay(){
  return(
    <div className="page-container">
    <h1 className="page-title">STAY - ORDER</h1>
    <div className="page-content">
    <h2>Introduction</h2>
    <p>
        A stay order is a court-issued directive that temporarily halts the execution of a judicial proceeding or the enforcement of a court judgment or order, pending further review or appeal. Stay orders are typically issued to prevent irreparable harm or injustice from occurring while a case is pending. They can be granted in a variety of legal contexts, including civil, criminal, and administrative proceedings. Stay orders are an important tool for protecting the rights of parties involved in legal disputes and ensuring that the judicial process is fair and just.
    </p>
    <h1>Steps to File Stay-Order in India</h1>
    <ol>
        <li> File a petition
        File a petition in the relevant court, along with any supporting documents, and pay any applicable court fees. The petition should clearly state the reasons for seeking a stay order and the relief you're requesting.</li>
        <li> Serve the petition
        Serve the petition and supporting documents on the opposing party.</li>
        <li> Attend the hearing
        Attend the scheduled hearing in court, present your case, and argue why a stay order should be granted.</li>
        <li>Provide security
        You'll need to prove that you've provided enough security for the case to come to a verdict and that you'll consider it binding.</li>
        <li>Meet other criteria
        You'll also need to prove that if a stay order isn't issued, you may face irreversible damage or make the judicial process more complicated, and that you made the application without unnecessary delayaft your RTI application.</li>
    </ol>
    <DownloadButton name={example}/>
    </div>
  </div>
  )
}
export default stay;