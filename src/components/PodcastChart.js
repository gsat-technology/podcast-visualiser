import React from 'react'
import { connect } from 'react-redux'
import { Chart } from 'react-google-charts'


const convertDuration = duration => {
  const split = duration.split(':')

  let mins = 0
  mins += parseInt(split[0]) * 60
  mins += parseInt(split[1])
  return mins
}

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

  const podcastDetailsHTML = podcastItem => {
    return (
      `<div>` +
        `<span>length: ${podcastItem['itunes:duration']}</span>` +
      `</div>`
    )
  }

  podcast.items.forEach((item, index) => {

    data.push(
      [ index,
        convertDuration(item['itunes:duration']),
        'stroke-color: #00bcd4; stroke-width: 2;',
        podcastDetailsHTML(item)
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