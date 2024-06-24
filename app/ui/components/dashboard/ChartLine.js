import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
export default function ChartLine({title='Mi gráfico de Highcharts',data, xAxisConfig}) {
  const chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: title
    },
    xAxis: xAxisConfig,
    yAxis:{title : null} ,
    series:  data,
    subtitle : {text : 'Fuente: Estación Meteorológica UDEP'},
  };
  return (
    <HighchartsReact
    highcharts={Highcharts}
    options={chartOptions}
  />
  )
}
