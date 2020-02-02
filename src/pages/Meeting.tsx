import React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import { useFirestoreDoc, useFirebaseApp, SuspenseWithPerf } from "reactfire";
import "firebase/firestore";

import { IMeeting } from "../interfaces";
import { MEETINGS_COLLECTION } from "../constants";
import { Button } from "../library";

interface Props extends RouteComponentProps {
  url_slug?: string;
}

const Meeting: React.FC<Props> = props => {
  const firebaseApp = useFirebaseApp();
  // @ts-ignore
  const meetingRef = firebaseApp
    .firestore()
    .collection(MEETINGS_COLLECTION)
    .doc("63k2v0KpUQXb3bR1cHz9");

  // subscribe to the doc
  // throws a Promise for Suspense to catch,
  // and then streams live updates
  const meetingDoc: any = useFirestoreDoc(meetingRef);

  const meeting: IMeeting = meetingDoc.data();
  return (
    <div>
      <h1 className="text-xl">{meeting.title}</h1>
      <p>Description: {meeting.description}</p>
      <Button className="mt-3">Start Meeting</Button>
    </div>
  );
};

const MeetingContainer: React.FC<Props> = props => {
  return (
    <>
      <div className="flex mb-3">
        <Link to="/" className="underline text-blue-500 mr-2">
          Home
        </Link>
        <span className="mr-2">></span>
        <p>Meeting Link: meetingmage.com/meet/{props.url_slug}</p>
      </div>
      <SuspenseWithPerf
        fallback={"loading meeting..."}
        traceId="load-meeting-status"
      >
        <Meeting {...props} />
      </SuspenseWithPerf>
    </>
  );
};

export default MeetingContainer;
