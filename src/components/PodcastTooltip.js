import React, { Component } from 'react'
import { convertDurationToSeconds, convertSecondsToDuration } from '../utils/index'

const styles = {
    outer: {
        width: '300px',
        height: '100%',
        padding: '10px 5px 10px 5px'
    }
}

const PodcastTooltip = ({ podcastItem, duration }) => {

    return (
      <div style={styles.outer}> 
        <h5>{podcastItem.title}</h5>
        <h6>{podcastItem['itunes:subtitle']}</h6>
        <span>length: {podcastItem['itunes:duration']}</span><br />
        <span>accumulative: {duration}</span>
      </div>
    )
}


export default PodcastTooltip
