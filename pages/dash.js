import React, { useEffect, useState, useRef } from "react";
import supabase from "@/utils/supabase";
import Free_chart from "@/components/free_charts";
import Header from "@/components/header";

function Dash() {
  const [azn, setAzn] = useState("");
  const [cvs, setCvs] = useState("");
  const [ford, setFord] = useState("");
  const [jpmc, setJpmc] = useState("");
  const [nvidia, setNvidia] = useState("");
  const [timestamp1, setTimestamp1] = useState("");
  const [actual1, setActual1] = useState("");
  const [pred1, setPred1] = useState("");
  const [timestamp2, setTimestamp2] = useState("");
  const [actual2, setActual2] = useState("");
  const [pred2, setPred2] = useState("");
  const [timestamp3, setTimestamp3] = useState("");
  const [actual3, setActual3] = useState("");
  const [pred3, setPred3] = useState("");
  const [timestamp4, setTimestamp4] = useState("");
  const [actual4, setActual4] = useState("");
  const [pred4, setPred4] = useState("");
  const [timestamp5, setTimestamp5] = useState("");
  const [actual5, setActual5] = useState("");
  const [pred5, setPred5] = useState("");

  useEffect(() => {
    async function getData() {
      getGlobalData();
    }
    getData();
  }, []);

  useEffect(() => {
    if (azn === "" || cvs === "" || ford === "" || jpmc === "" || nvidia === "")
      return;
    processData();
  }, [azn, cvs, ford, jpmc, nvidia]);

  async function getGlobalData() {
    try {
      const { data: azn, error: fetchError1 } = await supabase
        .from("AZN_stocks")
        .select("*");

      if (fetchError1) {
        throw fetchError1;
      }

      setAzn(azn);

      const { data: CVS, error: fetchError2 } = await supabase
        .from("CVS")
        .select("*");

      if (fetchError2) {
        throw fetchError2;
      }

      setCvs(CVS);
      const { data: Ford, error: fetchError3 } = await supabase
        .from("Ford_stocks")
        .select("*");

      if (fetchError3) {
        throw fetchError3;
      }

      setFord(Ford);
      const { data: Jpmc, error: fetchError4 } = await supabase
        .from("JPMC_stocks")
        .select("*");

      if (fetchError4) {
        throw fetchError4;
      }

      setJpmc(Jpmc);
      const { data: Nvidia, error: fetchError5 } = await supabase
        .from("nvidia_stocks")
        .select("*");

      if (fetchError5) {
        throw fetchError5;
      }

      setNvidia(Nvidia);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }
  function processData() {
    let temp1 = [];
    let temp2 = [];
    let temp3 = [];

    for (let i = 0; i < azn.length; i++) {
      let time = azn[i].date;
      temp1.push(time);

      let actual = azn[i].actual;
      temp2.push(actual);

      let hist = azn[i].predicted;
      temp3.push(hist);
    }
    setTimestamp1(temp1);
    setPred1(temp2);
    setActual1(temp3);

    temp1 = [];
    temp2 = [];
    temp3 = [];

    for (let i = 0; i < cvs.length; i++) {
      let time = cvs[i].date;
      temp1.push(time);

      let actual = cvs[i].actual;
      temp2.push(actual);

      let hist = cvs[i].predicted;
      temp3.push(hist);
    }
    setTimestamp2(temp1);
    setPred2(temp2);
    setActual2(temp3);

    temp1 = [];
    temp2 = [];
    temp3 = [];

    for (let i = 0; i < ford.length; i++) {
      let time = ford[i].date;
      temp1.push(time);

      let actual = ford[i].actual;
      temp2.push(actual);

      let hist = ford[i].predicted;
      temp3.push(hist);
    }
    setTimestamp3(temp1);
    setPred3(temp2);
    setActual3(temp3);

    temp1 = [];
    temp2 = [];
    temp3 = [];

    for (let i = 0; i < jpmc.length; i++) {
      let time = jpmc[i].date;
      temp1.push(time);

      let actual = jpmc[i].actual;
      temp2.push(actual);

      let hist = jpmc[i].predicted;
      temp3.push(hist);
    }
    setTimestamp4(temp1);
    setPred4(temp2);
    setActual4(temp3);

    temp1 = [];
    temp2 = [];
    temp3 = [];

    for (let i = 0; i < nvidia.length; i++) {
      let time = nvidia[i].date;
      temp1.push(time);

      let actual = nvidia[i].actual;
      temp2.push(actual);

      let hist = nvidia[i].predicted;
      temp3.push(hist);
    }
    setTimestamp5(temp1);
    setPred5(temp2);
    setActual5(temp3);

    console.log("processed");
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-100">
      <Header />
      <div class="grid grid-cols-4 p-10 h-full ">
        {timestamp1 && actual1 && pred1 && (
          <Free_chart
            timestamp={timestamp1}
            actual={actual1}
            pred={pred1}
            stock="AZN"
          />
        )}
        {timestamp2 && actual2 && pred2 && (
          <Free_chart
            timestamp={timestamp2}
            actual={actual2}
            pred={pred2}
            stock="CVS"
          />
        )}
        {timestamp3 && actual3 && pred3 && (
          <Free_chart
            timestamp={timestamp3}
            actual={actual3}
            pred={pred3}
            stock="FORD"
          />
        )}
        {timestamp4 && actual4 && pred4 && (
          <Free_chart
            timestamp={timestamp4}
            actual={actual4}
            pred={pred4}
            stock="JPMC"
          />
        )}
        {timestamp5 && actual5 && pred5 && (
          <Free_chart
            timestamp={timestamp5}
            actual={actual5}
            pred={pred5}
            stock="NVIDIA"
          />
        )}
      </div>
    </div>
  );
}

export default Dash;
