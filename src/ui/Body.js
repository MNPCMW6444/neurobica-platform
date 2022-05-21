import React, { useState } from "react";
import { MuseClient } from "muse-js";

export default function Body() {
  async function main() {
    try {
      let client = new MuseClient();
      await client.connect();
      await client.start();

      client.telemetryData.subscribe((telemetry) => {
        console.log(telemetry);
        setEeg1(telemetry);
      });

      client.eegReadings
        .filter((r) => r.electrode === leftEyeChannel)
        .subscribe((value) => {
          setEeg2(value);
        });

      client.accelerometerData.subscribe((acceleration) => {
        console.log(acceleration);
        setEeg3(acceleration);
      });
    } catch (e) {}
  }

  const [eeg1, setEeg1] = useState("will be here if conected");
  const [eeg2, setEeg2] = useState("will be here if conected");
  const [eeg3, setEeg3] = useState("will be here if conected");

  return (
    <>
      {" "}
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
            //await main();
            await main();
          }}
        >
          {" "}
          connect to muse
        </button>
        <p>EEG data:</p>
        <p>{JSON.stringify(eeg1)}</p>
        <p>{JSON.stringify(eeg2)}</p>
        <p>{JSON.stringify(eeg3)}</p>
      </div>
    </>
  );
}
