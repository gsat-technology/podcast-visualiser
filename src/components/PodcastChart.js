import React from 'react'
import { connect } from 'react-redux'
import { Chart } from 'react-google-charts'
import PodcastTooltip from './PodcastTooltip'
import { convertDurationToSeconds, convertSecondsToDuration } from '../utils/index'
import { renderToString } from 'react-dom/server'

const styles = {
  tooltip: {
    width: '200px',
    height: '200px'
  }
}

const PodcastChart = ({ podcast }) => {
  
  if (podcast.items === undefined) {
    return (
      <div>
      </div>
    )
  }

  const data = [
    ['id',
    'length',
    { role: 'style', type: 'string'},
    {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}
    ]
  ]

  const options = {
    hAxis: { 
      baselineColor: '#fff',
      gridlines: {
        color: 'transparent'
      },
      textPosition: 'none'
    },
    vAxis: { 
      baselineColor: '#fff',
      gridlines: {
        color: 'transparent'
      },
      textPosition: 'none'
    },
    legend: 'none',
    backgroundColor: { fill:'transparent' },
    tooltip: {isHtml: true}
  }

  let accumulativeSeconds = 0

  podcast.items.reverse().forEach((item, index) => {

    const itemSeconds = convertDurationToSeconds(item['itunes:duration'])
    accumulativeSeconds += itemSeconds

    data.push(
      [ index,
        itemSeconds,
        'stroke-color: #00bcd4; stroke-width: 2;',
        renderToString(<PodcastTooltip 
          podcastItem={item} 
          duration={convertSecondsToDuration(accumulativeSeconds)}  
        />)
      ]
    )
  })

  return (
    <div>
      <Chart
          chartType="ColumnChart"
          data={data}
          options={options}
          graph_id="PodcastColumnChart"
          width="100%"
          height="400px"
          legend_toggle
        />
  </div>
  )
}

const mapStateToProps = state => ({
  podcast: state.podcast
})

export default connect(mapStateToProps)(PodcastChart)