import React, { useEffect, useState, useRef } from "react";
import supabase from "@/utils/supabase";
import FV_LineChart from "@/components/fv_linechart";
import TopCards from "@/components/topcards";
import TopCardsApple from "@/components/topcardsApple";
import Header from "@/components/header";

function Dash2() {
  const formRef = useRef(null);
  const [stock, setStock] = useState("TESLA");
  const [teslaSentiment, setTeslaSentiment] = useState("");
  const [appleSentiment, setAppleSentiment] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const [actual, setActual] = useState("");
  const [pred, setPred] = useState("");
  const [predHist, setPredHist] = useState("");
  const [buffer, setBuffer] = useState(false);

  useEffect(() => {
    async function getData() {
      getGlobalData();
    }
    getData();
  }, []);

  useEffect(() => {
    if (teslaSentiment === "") return;
    processData();
  }, [teslaSentiment, appleSentiment, stock]);

  useEffect(() => {
    console.log("buffer changed", buffer);
  }, [buffer]);

  async function getGlobalData() {
    try {
      const { data: tesla_sentiment, error: fetchError1 } = await supabase
        .from("Tesla_stocks")
        .select("*");

      if (fetchError1) {
        throw fetchError1;
      }

      setTeslaSentiment(tesla_sentiment);

      const { data: apple_sentiment, error: fetchError2 } = await supabase
        .from("Apple_stocks")
        .select("*");

      if (fetchError2) {
        throw fetchError2;
      }

      setAppleSentiment(apple_sentiment);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  }
  function processData() {
    if (stock === "TESLA") {
      const temp1 = [];
      const temp2 = [];
      const temp3 = [];
      const temp4 = [];

      for (let i = 0; i < teslaSentiment.length; i++) {
        let time = teslaSentiment[i].date;
        temp1.push(time);

        let actual = teslaSentiment[i].Close;
        temp2.push(actual);

        let hist = teslaSentiment[i].pred_w_historical;
        temp3.push(hist);

        let sent = teslaSentiment[i].pred_w_sentiment;
        temp4.push(sent);
      }
      setTimestamp(temp1);
      setActual(temp2);
      setPredHist(temp4);
      setPred(temp3);

      setBuffer(false);
    } else {
      console.log("appleSentiment", appleSentiment);
      const temp1 = [];
      const temp2 = [];
      const temp3 = [];
      const temp4 = [];

      for (let i = 0; i < appleSentiment.length; i++) {
        let time = appleSentiment[i].Date;
        temp1.push(time);

        let actual = appleSentiment[i].Close;
        temp2.push(actual);

        let hist = appleSentiment[i].pred_w_historical;
        temp3.push(hist);

        let sent = appleSentiment[i].pred_w_sentiment;
        temp4.push(sent);
      }
      setTimestamp(temp1);
      setActual(temp2);
      setPredHist(temp3);
      setPred(temp4);

      setBuffer(false);
    }
  }

  function handleStock(e) {
    e.preventDefault();
    console.log(formRef.current.value);
    setStock(formRef.current.value);
    processData();
    setBuffer(true);
  }

  return (
    <div className="bg-gradient-to-r from-blue-400 to-cyan-100">
      <Header />
      <div className="flex justify-center py-4">
        <form onSubmit={handleStock}>
          <label for="fruits">Choose a stock: </label>
          <input
            list="fruit-list"
            id="fruits"
            name="fruits"
            class="border rounded p-2"
            ref={formRef}
          />
          <input type="submit" class="border rounded p-2 bg-white shadow-md" />
          <datalist
            id="fruit-list"
            class="absolute z-10 bg-white rounded-md shadow-md"
          >
            <option value="APPLE"></option>
            <option value="TESLA"></option>
          </datalist>
        </form>
      </div>
      <div class="grid grid-cols-4 gap-4 px-4 h-screen ">
        {timestamp && actual && pred && predHist && !buffer && (
          <FV_LineChart
            timestamp={timestamp}
            actual={actual}
            pred={pred}
            predHist={predHist}
            stock={stock}
          />
        )}
        <div>{stock === "TESLA" ? <TopCards /> : <TopCardsApple />}</div>
      </div>
    </div>
  );
}

export default Dash2;
