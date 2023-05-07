import React from "react";

const TopCardsApple = () => {
  return (
    <div className="grid grid-cols-4 gap-5 p-5">
      <div className="col-span-4 bg-white flex justify-between w-full border p-4 rounded-lg shadow-lg">
        <div className="flex flex-col w-full">
          <table className="text-left">
            <tbody>
              <tr>
                <div>
                  <img
                    alt="login_image"
                    src={"/appleblack.png"}
                    className="object-cover h-1/5 w-auto rounded-md"
                  />
                </div>
              </tr>
              <center>
                <th>APPLE</th>
              </center>
              <tr>
                <td className="text-justify">
                  Apple Inc. is an American multinational technology company
                  headquartered in Cupertino, California.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="lg:col-span-4 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg shadow-lg">
        <div className="flex flex-col w-full">
          <table>
            <tbody>
              <tr>
                <td></td>
                <td className="col2">Historical</td>
                <td className="col3">Sentiment</td>
              </tr>
              <tr>
                <td>Max</td>
                <td className="col2">55.585</td>
                <td className="col3">53.228</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td className="col2">33%</td>
                <td className="col3">91%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopCardsApple;
