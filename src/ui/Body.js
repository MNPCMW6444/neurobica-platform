import React, { useState } from "react";
import { MuseClient } from "muse-js";
import Chart from "./Chart";

export default function Body() {
  let c = 0;
  const [eeg1, setEeg1] = useState(
    new Array(
      {
        name: "electrode0",
        sample0: 0,
        sample1: 0,
        sample2: 0,
        sample3: 0,
        sample4: 0,
        sample5: 0,
        sample6: 0,
        sample7: 0,
        sample8: 0,
        sample9: 0,
        sample10: 0,
        sample11: 0,
      },
      {
        name: "electrode1",
        sample0: 0,
        sample1: 0,
        sample2: 0,
        sample3: 0,
        sample4: 0,
        sample5: 0,
        sample6: 0,
        sample7: 0,
        sample8: 0,
        sample9: 0,
        sample10: 0,
        sample11: 0,
      },

      {
        name: "electrode2",
        sample0: 0,
        sample1: 0,
        sample2: 0,
        sample3: 0,
        sample4: 0,
        sample5: 0,
        sample6: 0,
        sample7: 0,
        sample8: 0,
        sample9: 0,
        sample10: 0,
        sample11: 0,
      },
      {
        name: "electrode3",
        sample0: 0,
        sample1: 0,
        sample2: 0,
        sample3: 0,
        sample4: 0,
        sample5: 0,
        sample6: 0,
        sample7: 0,
        sample8: 0,
        sample9: 0,
        sample10: 0,
        sample11: 0,
      }
    )
  );

  async function connect() {
    try {
      let client = new MuseClient();
      await client.connect();
      await client.start();

      client.eegReadings.subscribe((reading) => {
        console.log(reading);
        c++;
        let electrode0Samples;
        let electrode1Samples;
        let electrode2Samples;
        let electrode3Samples;

        switch (reading.electrode) {
          case 0:
            electrode0Samples = reading.samples;
            let objectofsamples0 = new Object();
            objectofsamples0.name = "electrode0";
            objectofsamples0.sample0 = electrode0Samples[0];
            objectofsamples0.sample1 = electrode0Samples[1];
            objectofsamples0.sample2 = electrode0Samples[2];
            objectofsamples0.sample3 = electrode0Samples[3];
            objectofsamples0.sample4 = electrode0Samples[4];
            objectofsamples0.sample5 = electrode0Samples[5];
            objectofsamples0.sample6 = electrode0Samples[6];
            objectofsamples0.sample7 = electrode0Samples[7];
            objectofsamples0.sample8 = electrode0Samples[8];
            objectofsamples0.sample9 = electrode0Samples[9];
            objectofsamples0.sample10 = electrode0Samples[10];
            objectofsamples0.sample11 = electrode0Samples[11];
            electrode0Samples = objectofsamples0;
            break;

          case 1:
            electrode1Samples = reading.samples;
            let objectofsamples1 = new Object();
            objectofsamples1.name = "electrode1";
            objectofsamples1.sample0 = electrode1Samples[0];
            objectofsamples1.sample1 = electrode1Samples[1];
            objectofsamples1.sample1 = electrode1Samples[2];
            objectofsamples1.sample3 = electrode1Samples[3];
            objectofsamples1.sample4 = electrode1Samples[4];
            objectofsamples1.sample5 = electrode1Samples[5];
            objectofsamples1.sample6 = electrode1Samples[6];
            objectofsamples1.sample7 = electrode1Samples[7];
            objectofsamples1.sample8 = electrode1Samples[8];
            objectofsamples1.sample9 = electrode1Samples[9];
            objectofsamples1.sample10 = electrode1Samples[10];
            objectofsamples1.sample11 = electrode1Samples[11];
            electrode1Samples = objectofsamples1;
            break;
          case 2:
            electrode2Samples = reading.samples;
            let objectofsamples2 = new Object();
            objectofsamples2.name = "electrode2";
            objectofsamples2.sample0 = electrode2Samples[0];
            objectofsamples2.sample1 = electrode2Samples[1];
            objectofsamples2.sample2 = electrode2Samples[2];
            objectofsamples2.sample3 = electrode2Samples[3];
            objectofsamples2.sample4 = electrode2Samples[4];
            objectofsamples2.sample5 = electrode2Samples[5];
            objectofsamples2.sample6 = electrode2Samples[6];
            objectofsamples2.sample7 = electrode2Samples[7];
            objectofsamples2.sample8 = electrode2Samples[8];
            objectofsamples2.sample9 = electrode2Samples[9];
            objectofsamples2.sample10 = electrode2Samples[10];
            objectofsamples2.sample11 = electrode2Samples[11];
            electrode2Samples = objectofsamples2;
            break;
          case 3:
            electrode3Samples = reading.samples;
            let objectofsamples3 = new Object();
            objectofsamples3.name = "electrode3";
            objectofsamples3.sample0 = electrode3Samples[0];
            objectofsamples3.sample1 = electrode3Samples[1];
            objectofsamples3.sample2 = electrode3Samples[2];
            objectofsamples3.sample3 = electrode3Samples[3];
            objectofsamples3.sample4 = electrode3Samples[4];
            objectofsamples3.sample5 = electrode3Samples[5];
            objectofsamples3.sample6 = electrode3Samples[6];
            objectofsamples3.sample7 = electrode3Samples[7];
            objectofsamples3.sample8 = electrode3Samples[8];
            objectofsamples3.sample9 = electrode3Samples[9];
            objectofsamples3.sample10 = electrode3Samples[10];
            objectofsamples3.sample11 = electrode3Samples[11];
            electrode3Samples = objectofsamples3;
            break;

          default:
            break;
        }
        let eeg = eeg1;
        if (electrode0Samples) eeg[0] = electrode0Samples;
        if (electrode1Samples) eeg[1] = electrode1Samples;
        if (electrode2Samples) eeg[2] = electrode2Samples;
        if (electrode3Samples) eeg[3] = electrode3Samples;
        if (c === 300) {
          c = 0;
          setEeg1(eeg);
          console.log(" setEeg1(eeg);");
        } else console.log("c is still " + c);
      });
    } catch (e) {
      console.log("ERRORRR");
    }
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
        <br /> <br />
        EEG data:
        <Chart data={eeg1} />
      </div>
    </>
  );
}
