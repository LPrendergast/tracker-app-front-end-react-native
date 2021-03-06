import React from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter Track Name" />
      </Spacer>
      <Spacer>
        <Button title="Start recording track.." />
      </Spacer>
    </>
  );
};

export default TrackForm;
