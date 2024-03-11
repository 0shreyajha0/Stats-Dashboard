import { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { SessionCard } from "./SessionCard";
import DateAndTimePicker from "./DateAndTimePicker";

type TResponsiveAreaChartProps = {
  kpi: string;
  data: any[];
  colors: {
    stroke: string;
    fill: string;
  };
};

export const ResponsiveAreaChart = ({ data }: TResponsiveAreaChartProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleShowChart = () => {
    const element = document.getElementById("my-collapse") as HTMLInputElement;
    if (element) {
      element.checked = !isOpen;
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    handleShowChart();
  }, []);

  const DataFormater = (number: any) => {
    if (number > 1000000000) {
      return (number / 1000000000).toString() + "B";
    } else if (number > 1000000) {
      return (number / 1000000).toString() + "M";
    } else if (number > 1000) {
      return (number / 1000).toString() + "K";
    } else {
      return number.toString();
    }
  };

  return (
    <div className="bg-white">
      <DateAndTimePicker />
      <div className="collapse collapse-arrow bg-white">
        <input
          onClick={handleShowChart}
          id="my-collapse"
          type="checkbox"
          className="peer w-32 justify-self-end"
        />
        <div className="collapse-title ">
          <div className="flex pb-4">
            <SessionCard cardName={"Online store session"} />
            <SessionCard cardName={"Net Return Value"} />
            <SessionCard cardName={" Total Orders"} />
            <SessionCard cardName={" Conversion Rate"} />
          </div>
        </div>
        <div className="collapse-content">
          <ResponsiveContainer height={400}>
            <LineChart
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 30,
                bottom: 5,
              }}
            >
              <CartesianGrid vertical={false} stroke="#ebebeb" />
              <XAxis axisLine={false} tickLine={false} dataKey="name" />
              <YAxis
                tickFormatter={DataFormater}
                tickCount={4}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                strokeOpacity={0.6}
                stroke="#9fcbfc"
                strokeDasharray="10"
                dot={false}
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                dot={false}
                stroke="#0377fc"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex gap-x-2 justify-end">
            <div className="flex items-center justify-center bg-gray-100 py-2 px-4 rounded">
              <div className="flex items-center justify-center mr-2">
                <div className="h-0.5 w-6 bg-blue-500"></div>
              </div>
              <p className="text-sm color text-slate-600">
                Oct 1, 2022 - Feb 21, 2024
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-100 py-2 px-4 rounded">
              <div className="flex items-center justify-center mr-2">
                <div className="h-0.5 w-6 bg-blue-300"></div>
              </div>
              <p className="text-sm color text-slate-600">
                Oct 1, 2021 - Feb 21, 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
