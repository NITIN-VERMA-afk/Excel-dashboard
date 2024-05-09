import EmailMarketingData from "./EmailMarketingData";
import LineChart from "./LineCharts";
import GoogleData from "./GData";
import ESubscribers from "./ESubscribers";

const MarketingDashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4">
        <div className="bg-lime-500 flex justify-center items-center gap-11">
          <p>Emailmarketing</p>
          <button className="bg-black text-lime-500">Results</button>
        </div>
        <div className="bg-gray-500 flex justify-center mt-4">
          <h2 className="text-black">SUBSCRIBERS </h2>
        </div>
        <div className="flex justify-center">
          <h1 className="text-black">6,537</h1>
        </div>
        <div className="text-black flex justify-center items-center gap-5">
          <p>
            vs YESTERDAY <br /> +3
          </p>
          <p>
            vs Last Week <br /> +5
          </p>
        </div>
        <div>
          <LineChart />
        </div>
      </div>

      <div className="bg-white p-4">
        <div className="bg-lime-500 flex justify-center items-center gap-11">
          <p>Emailmarketing</p>
          <button className="bg-black text-lime-500">Results</button>
        </div>
        <div>
          <EmailMarketingData />
        </div>
      </div>

      <div className="bg-white p-4">
        <div className="bg-lime-500 flex justify-center items-center gap-11">
          <p>Google Analytics</p>
          <button className="bg-black text-lime-500">Main Sources Last 30 Days</button>
        </div>
        <div>
          <div className="bg-gray-500 flex justify-center mt-4">
            <h2 className="text-black">SESSIONS </h2>
          </div>
          <div className="flex justify-center">
            <h1 className="text-black">6,537</h1>
          </div>
          <div className="text-black flex justify-center items-center gap-5">
            <p>
              vs YESTERDAY <br /> +3
            </p>
            <p>
              vs Last Week <br /> +5{" "}
            </p>
          </div>
        </div>
        <ESubscribers />
      </div>

      {/* chart 4 */}
      <div className="bg-white p-4">
        <div className="bg-lime-500 flex justify-center items-center gap-11">
          <p>Google Analytics</p>
          <button className="bg-black text-lime-500">Main Sources Last 30 Days
</button>
        </div>
        <div className="flex justify-between p-4">
          <div>
            DIRECT <br /> 2,848
          </div>
          <div>
            ORGANIC <br /> 2,396
          </div>
          <div>
            REFERRAL <br /> 2,220
          </div>
          <div>
            PAID <br /> 872
          </div>
          <br />
        </div>
        <div>
          <GoogleData />
        </div>
      </div>
    </div>
  );
};

export default MarketingDashboard;
