import React from "react";
import { useHistory, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { useKeyPress } from "ahooks";
import { Button } from "react-bootstrap";
import { ChevronDown, ChevronLeft, ChevronRight } from "react-feather";

import data from "../data/lectures.json";

export default function Lecture() {
  const history = useHistory();
  const id = Number(useParams().id);

  useKeyPress("left", () => {
    if (id - 1) changeLecture(id - 1);
  });

  useKeyPress("right", () => {
    if (id < data.length) changeLecture(id + 1);
  });

  const { title, videoId, text } = data.find((item) => item.id === Number(id));

  let changeLecture = (id) => {
    history.push(`/lectures/${id}`);
  };

  return (
    <>
      <header className="ex-header">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <h1>
                {id}. {title}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="ex-basic-1 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <YouTube
                videoId={videoId}
                containerClassName={"youtubeContainer"}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ex-basic-1 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 left">
              <Button
                className="btn-solid-lg"
                disabled={!(id - 1 > 0)}
                onClick={() => changeLecture(id - 1)}
              >
                {<ChevronLeft />} Prev
              </Button>
            </div>
            <div className="col-lg-6 right">
              <Button
                className="btn-solid-lg float-end"
                onClick={() => changeLecture(id + 1)}
                disabled={id === data.length}
              >
                Next {<ChevronRight />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="ex-basic-1 pt-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
