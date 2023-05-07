import React from "react";

const TopCards = () => {
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
                    src={"/pngwing.com.png"}
                    className="object-cover h-1/5 w-auto rounded-md"
                  />
                </div>
              </tr>
              <center>
                <th>TESLA</th>
              </center>
              <tr>
                <td className="text-justify">
                  Tesla, Inc. is an American multinational automotive and clean
                  energy company headquartered in Austin, Texas.
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
                <td className="col2">299.795</td>
                <td className="col3">292.482</td>
              </tr>
              <tr>
                <td>Accuracy</td>
                <td className="col2">67%</td>
                <td className="col3">76%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
