import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const PieChart = () => {
  const chartDetail = {
    series: [60, 28, 12],
    options: {
      chart: {
        type: "donut",
      },
      labels: ["Male", "Female", "Other"],
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                showAlways: true,
                show: true,
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: true,
        background: {
          enabled: true,
          foreColor: "#000000",
          borderRadius: "100%",
          padding: 4,
          borderWidth: 0,
          backgroundColor: "#ffffff",
        },
        offsetY: 30,
      },
      legend: {
        position: "bottom",
        horizontalAlign: "center",
        offsetY: 5,
        markers: {
          radius: 30,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };

  return (
    <ReactApexChart
      options={chartDetail?.options}
      series={chartDetail?.series}
      type="donut"
      width="350"
    />
  );
};

export default PieChart;
