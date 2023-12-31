import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class BbcItems extends Component {
  render() {
    let { imageUrl, title, description, newsUrl, author, date, source } = this.props;
    const trimDesc = description && description.length > 100 ? description.substring(0, 100) + "..." : description;
    const mytitle = title && title.length > 100 ? title.substring(0, 100) + "..." : title;
    const Author = author ? author : "Unknown";
    return (
      <>
        <div className="d-flex justify-content-center my-3">
          <div className="row  my-3 mx-3">
            <div className="col my-2 mx-6">
              <div className="card mx-3">
                <div className="card-body">
                  <img src={!imageUrl ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small/3d-world-news-background-loop-free-video.jpg" : imageUrl} className="card-img-top" style={{ height: '150px' }} alt="thisisimg" />
                  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" styel={{ left: '90%', zIndex: "1" }}>
                    {source}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                  <h5
                    className="card-title small my-3"
                    style={{ color: "black", fontSize: "15px" }}
                  >
                    {mytitle}
                  </h5>
                  <p className="card-text small my-2">{trimDesc}</p>
                  <p className="card-text"><small className="text-body-secondary">By {Author} on {new Date(date).toGMTString()}</small></p>
                  <div className="d-flex justify-content-center">
                    <Link
                      to={newsUrl}
                      className="btn btn-dark my-2 small"
                      style={{ width: "5" }}
                    >
                      Go to News
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
