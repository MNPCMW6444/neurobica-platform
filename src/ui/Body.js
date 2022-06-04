import React, { useState } from "react";
import { MuseClient } from "muse-js";

export default function Body() {
  
  
  const [eeg1, setEeg1] = useState("will be here if conected");
  const [eeg2, setEeg2] = useState("will be here if conected");
  const [eeg3, setEeg3] = useState("will be here if conected");

  async function connect() {
    try {
      let client = new MuseClient();
      await client.connect();
      await client.start();


      
      client.eegReadings.subscribe(reading => {
        console.log(reading);
        setEeg1(reading);
      });



/* 
      client.telemetryData.subscribe(telemetry => {
        console.log(telemetry);
        setEeg2(telemetry);
      });
      
      client.accelerometerData.subscribe(acceleration => {
        console.log(acceleration);
        setEeg3(acceleration);
      });
 */
      
    } catch (e) {}
  }


  return (
    <>
      <div>
        <button
          style={{
            position: "absolute",
            width: "200px",
            top: "100px",
            left: "100px",
            height: "100px",
            fontSize: "26pt",
            color: "red",
          }}
          onClick={async () => {
            await connect();
          }}
        >
          {" "}
          connect to muse
        </button>
        <br/>        <br/>
        <p>EEG data:</p>
        <p>
        <p style={{fontSize:"16pt"}}>{eeg1.electrode}</p>
        <p style={{fontSize:"16pt"}}>{eeg1.index}</p>
        {eeg1.samples && eeg1.samples.map((sample, index)=><p style={{fontSize:"8pt"}}>{"sample "+index+": "+sample}</p>)}
        <p style={{fontSize:"16pt"}}>{eeg1.timestamp}</p>
           
          </p>
     {/*    <p>{JSON.stringify(eeg2)}</p>
        <p>{JSON.stringify(eeg3)}</p> */}
      </div>
    </>
  );
}
