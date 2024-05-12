import React from 'react'
import { Chart ,defaults} from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
defaults.plugins.title.display = false
defaults.plugins.title.align= "starts"
defaults.plugins.title.font.size=20
defaults.plugins.title.color="black"
defaults.maintainAspectRatio = false
defaults.responsive=true
defaults.animation.duration = 1000
defaults.animation.easing = 'easeOutElastic'
export const DoughnutJS = () => {
  return (
    <div className='h-full w-full'>
        <Doughnut
        height={300}
         data={{
            labels:["2021","2022","2023","2024"],
            datasets:[
            {label:"Student",data:[1000,2000,3000,4000]}
            ]
        }}
        />
    </div>
  )
}
