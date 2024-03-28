import React from "react";

const NewsItem = ({ title, description, urlToImage, url, source, author, date }) => {
  return (
    <div>
      <div className="card shadow">
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:'80%', zIndex:'1'}}>
    {source}
  </span>
        <img
          src={
            !urlToImage
              ? "https://imgs.search.brave.com/LQnVRAaMYvoAgMQnHt86sFrH4CmAUZPP6w-CvAIttSY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMzU5MTQy/OS83NDcwL2kvNDUw/L2RlcG9zaXRwaG90/b3NfNzQ3MDE5NDMt/c3RvY2stcGhvdG8t/ZGlnaXRhbC1jb21t/dW5pY2F0aW9uLXNl/YXJjaGluZy1zaGFy/aW5nLW5ld3MuanBn"
              : urlToImage
          }
          style={{ aspectRatio: "2" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{!description?"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum dummy text ever since the 1500s,  when an unknown printer took a galley of type and scrambled it to make a type specimen book.":description}</p>
          <p className="card-text"><small className="text-body-secondary">By: {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
          <a href={url} rel="noreferrer" target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
