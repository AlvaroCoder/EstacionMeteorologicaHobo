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
    series:  data
  };
  return (
    <div className='w-full h-full rounded-lg flex items-center'>
      <section className='w-full' >
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />

      </section>
    </div>
  )
}
