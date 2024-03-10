import React from "react";
import { CrudFilter, useList } from "@refinedev/core";
import dayjs from "dayjs";
import Stats from "../../components/dashboard/Stats";
import { ResponsiveAreaChart } from "../../components/dashboard/ResponsiveAreaChart";
import { TabView } from "../../components/dashboard/TabView";
import { RecentSales } from "../../components/dashboard/RecentSales";
import { IChartDatum, TTab } from "../../interfaces";

const filters: CrudFilter[] = [
  {
    field: "start",
    operator: "eq",
    value: dayjs()?.subtract(7, "days")?.startOf("day"),
  },
  {
    field: "end",
    operator: "eq",
    value: dayjs().startOf("day"),
  },
];

const dataG = [
  {
    name: "Oct 2022",
    uv: 18000,
    pv: 25000,
    amt: 2400,
  },
  {
    name: "Dec 2022",
    uv: 23000,
    pv: 18800,
    amt: 2210,
  },
  {
    name: "Feb 2023",
    uv: 40000,
    pv: 36000,
    amt: 2290,
  },
  {
    name: "Apr 2023",
    uv: 21000,
    pv: 12800,
    amt: 2000,
  },
  {
    name: "Jun 2023",
    uv: 29000,
    pv: 24000,
    amt: 2000,
  },
  {
    name: "Aug 2023",
    uv: 22000,
    pv: 26000,
    amt: 2000,
  },
  {
    name: "Oct 2023",
    uv: 27000,
    pv: 30000,
    amt: 2000,
  },
  {
    name: "Dec 2023",
    uv: 6000,
    pv: 15000,
    amt: 2000,
  },
];
export const Dashboard: React.FC = () => {
  const { data: dailyRevenue } = useList<IChartDatum>({
    resource: "dailyRevenue",
    filters,
  });

  const { data: dailyOrders } = useList<IChartDatum>({
    resource: "dailyOrders",
    filters,
  });

  const { data: newCustomers } = useList<IChartDatum>({
    resource: "newCustomers",
    filters,
  });

  const tabs: TTab[] = [
    {
      id: 1,
      label: "Daily Revenue",
      content: (
        <ResponsiveAreaChart
          kpi="Daily revenue"
          data={dataG}
          colors={{
            stroke: "rgb(54, 162, 235)",
            fill: "rgb(0,0,0)",
          }}
        />
      ),
    },
  ];

  return (
    <div>
      <Stats
        dailyRevenue={dailyRevenue}
        dailyOrders={dailyOrders}
        newCustomers={newCustomers}
      />
      <TabView tabs={tabs} />
      <RecentSales />
    </div>
  );
};
