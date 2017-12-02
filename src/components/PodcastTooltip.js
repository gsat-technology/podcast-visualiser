import React, { Component } from 'react'
import { convertDurationToSeconds, convertSecondsToDuration } from '../utils/index'

const styles = {
    outer: {
        width: '200px',
        height: '100%',
        padding: '10px 5px 10px 5px'
    }
}

const PodcastTooltip = ({ podcastItem, duration }) => {

    return (
      <div style={styles.outer}> 
        <span>length: {podcastItem['itunes:duration']}</span><br />
        <span>accumulative: {duration}</span>
      </div>
    )
}


export default PodcastTooltip
