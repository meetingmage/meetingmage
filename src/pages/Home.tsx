import React, { useState } from "react";
import { RouteComponentProps, Link } from "@reach/router";
import axios from "axios";

import { IMeeting } from "../interfaces";
import {
  INITIAL_STATUS,
  IN_PROGRESS_STATUS,
  SUCCESS_STATUS,
  FAILED_STATUS
} from "../constants";

import { Button } from "../library";

const Home: React.FC<RouteComponentProps> = props => {
  const [meeting, setMeeting] = useState<IMeeting | null>(null);
  const [createMeetingStatus, setCreateMeetingStatus] = useState(
    INITIAL_STATUS
  );
  const [errorMessage, setErrorMessage] = useState("");
  function createMeeting() {
    setErrorMessage("");
    setCreateMeetingStatus(IN_PROGRESS_STATUS);
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}meeting`)
      .then(res => {
        console.log("createMeeting ✅", res.data);
        setMeeting(res.data.data);
        setCreateMeetingStatus(SUCCESS_STATUS);
      })
      .catch(err => {
        console.error("createMeeting failed.", err);
        setErrorMessage("Failed to create meeting.");
        setCreateMeetingStatus(FAILED_STATUS);
      });
  }

  return (
    <div>
      <p className="text-xl">Ready to get started?</p>
      <Button
        onClick={createMeeting}
        disabled={
          createMeetingStatus === IN_PROGRESS_STATUS ||
          createMeetingStatus === SUCCESS_STATUS
        }
        className="mt-3"
      >
        {createMeetingStatus === INITIAL_STATUS && "Create New Meeting"}
        {createMeetingStatus === IN_PROGRESS_STATUS && "Creating Meeting..."}
        {createMeetingStatus === SUCCESS_STATUS && "Done!"}
        {createMeetingStatus === FAILED_STATUS && "Oops. Try Again?"}
      </Button>
      {createMeetingStatus === SUCCESS_STATUS && meeting && (
        <p className="mt-3">
          Meeting created!{" "}
          <Link
            to={`meet/${meeting.url_slug}`}
            className="text-blue-500 underline"
          >
            meetingmage.com/meet/{meeting.url_slug}
          </Link>
        </p>
      )}
      {!!errorMessage && (
        <p className="mt-3 text-red-500">Error: {errorMessage}</p>
      )}
    </div>
  );
};

export default Home;
