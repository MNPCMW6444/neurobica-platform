import React, { useState } from "react";
import { MuseClient } from "muse-js";

export default function Body() {
  async function main() {
    let client = new MuseClient();
    await client.connect();
    await client.start();
    client.eegReadings.subscribe((reading) => {
      console.log(reading);
      setEeg1(reading);
    });
    client.telemetryData.subscribe((telemetry) => {
      console.log(telemetry);
      setEeg2(telemetry);
    });
    client.accelerometerData.subscribe((acceleration) => {
      console.log(acceleration);
      setEeg3(acceleration);
    });
  }

  const [eeg1, setEeg1] = useState("will be here if conected");
  const [eeg2, setEeg2] = useState("will be here if conected");
  const [eeg3, setEeg3] = useState("will be here if conected");

  return (
    <div>
      <h2
        style={{
          position: "absolute",
          top: "60px",
          left: "75px",
          color: "black",
        }}
      >
        Comming Soon!
      </h2>
      <button
        style={{
          position: "absolute",
          width: "200px",
          top: "170px",
          left: "100px",
          height: "100px",
          fontSize: "26pt",
          color: "red",
        }}
        onClick={async () => {
          await main();
        }}
      >
        connect to muse
      </button>
      <p>EEG data:</p>
      <p>{eeg1}</p>
      <p>{eeg2}</p>
      <p>{eeg3}</p>
    </div>
  );
}
