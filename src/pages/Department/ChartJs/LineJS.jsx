import React from 'react'
import { Chart , defaults } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

defaults.plugins.title.display = false
defaults.plugins.title.align= "starts"
defaults.plugins.title.font.size=20
defaults.plugins.title.color="black"
defaults.maintainAspectRatio = false
defaults.responsive=true
defaults.animation.duration = 1000
defaults.animation.easing = 'easeOutElastic'
export const LineJS = () => {
  return (
    <div className='h-[300px]'>
        <Line
          height={500}
          data={{
            labels:["January","February","March","April","May","June","July","August","September","October","November","December"],
            datasets:[
            {label:"Student",data:[1000,2000,1900,4000,200,3000,5000,500,1200,3200,4000,3500],backgroundColor:"red", borderColor:"red"},
            {label:"Teacher",data:[100,200,100,400,200,180,50,5,12,32,40,35],backgroundColor:"blue", borderColor:"blue"}
            ]
        }} />
    </div>
  )
}
