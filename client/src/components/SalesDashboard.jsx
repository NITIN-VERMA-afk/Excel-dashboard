import React from "react";
import RoundChart from "./RoundChart";
import LocationButtons from "./LocationButtons";
import Revenue from "./Revenue";
import RevenueUkPh from "./RevennueUkPh";
import CallsStatistics from "./Callsstatics";
import FeedbackChart from "./Feedbackchart";
import SalesDataUk from "./SalesDataUk";
import TotalCallsuk from "./TotalCallsuk";

const SalesDashboard = () => {
  return (
    <div className="bg-purple-500 min-h-screen w-full">
      <div className="flex justify-between p-4">
        <div>
          <LocationButtons />
        </div>

        <div className="flex items-center space-x-2">
          <span>Client Satisfaction UK:</span>
          <RoundChart />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 p-4">
        <div>
          <h1 className="text-white text-xl font-bold mb-2 text-center">
            Revenue Statistics
          </h1>
          <Revenue />
        </div>

        <div>
          <div className="flex justify-evenly">
            <span>Revenue UK</span>
            <span>Revenue pk</span>
          </div>
          <RevenueUkPh />
        </div>
        <div>
          <h1>CALLS STATISTICS</h1>
          <CallsStatistics />
        </div>
        <div>
          <div className="flex justify-between">
            <h1>feedback uk</h1>
            <p> nagative positive</p>
          </div>
          <div> <FeedbackChart/></div>
        </div>
        <div>
          <SalesDataUk/>
        </div>
        <div>
          <TotalCallsuk/>
        </div>
      </div>
    </div>
  );
};

export default SalesDashboard;
