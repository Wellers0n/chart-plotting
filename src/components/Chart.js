import React from "react";
import ReactApexChart from "react-apexcharts";
import {getResponseMax, getResponseMin} from './../helpers/getResponseTime'

const LineChart = ({data}) => {
 
    const state = {
      options: {
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 8, 5]
        },

        title: {
          text: "Page Statistics",
          align: "left"
        },
        markers: {
          size: 0,

          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          categories: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08"
          ]
        },
        // tooltip: {
        //   y: [
        //     {
        //       title: {
        //         formatter: function(val) {
        //           return val + " (mins)";
        //         }
        //       }
        //     },
        //     {
        //       title: {
        //         formatter: function(val) {
        //           return val + " per session";
        //         }
        //       }
        //     },
        //     {
        //       title: {
        //         formatter: function(val) {
        //           return val;
        //         }
        //       }
        //     }
        //   ]
        // },
        grid: {
          borderColor: "#f1f1f1"
        }
      },
      series: [
        {
          name: "Mac chrome min response time",
          data: getResponseMin(data, "mac", "chrome")
        },
        {
          name: "Mac chrome max response time",
          data: getResponseMax(data, "mac", "chrome")
        },
        {
          name: "Mac firefox min response time",
          data: getResponseMin(data, "mac", "firefox")
        },
        {
          name: "Mac firefox max response time",
          data: getResponseMax(data, "mac", "firefox")
        },
        {
          name: "Linux chrome min response time",
          data: getResponseMin(data, "linux", "chrome")
        },
        {
          name: "Linux chrome max response time",
          data: getResponseMax(data, "linux", "chrome")
        },
        {
          name: "Linux firefox min response time",
          data: getResponseMin(data, "linux", "firefox")
        },
        {
          name: "Linux firefox max response time",
          data: getResponseMax(data, "linux", "firefox")
        }
      ]
    };
  
    return (
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height="250"
          
        />
      </div>
    );
}

export default LineChart;
