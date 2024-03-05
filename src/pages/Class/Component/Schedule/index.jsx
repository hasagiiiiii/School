import React from 'react'
import './index.scss'
export const Schedule = () => {
    const [isActive,setIsActive] = React.useState(false);
  return (
    <div className='bg-green-500 h-screen'>
        <table id='schedule' border='1' className='w-full h-full border-collapse font-thin overflow-hidden shadow-sm'>
            <thead>
                <tr>
                    <th>MonDay</th>
                    <th>TuesDay</th>
                    <th>Wednesday</th>
                    <th>Thurday</th>
                    <th>Friday</th>
                    <th>Satuday</th>
                </tr>   
            </thead>
            <tbody className='relative'>
                <tr>
                    <td onClick={()=>setIsActive(!isActive)} className={isActive ? 'absolute top-0 ease-in-out duration-300 bottom-0 bg-slate-800 w-screen scale-400 z-10':'ease-in-out duration-300 w-[290px]  delay-10'}>Monday</td>
                    <td>Tues</td>
                    <td>Wednesday</td>
                    <td>Thurday</td>
                    <td>Friday</td>
                    <td>Satuday</td>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>TuesDay</td>
                    <td>Wednesday</td>
                    <td>Thurday</td>
                    <td>Friday</td>
                    <td>Satuday</td>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>TuesDay</td>
                    <td>Wednesday</td>
                    <td>Thurday</td>
                    <td>Friday</td>
                    <td>Satuday</td>
                </tr>
                <tr>
                    <td>Monday</td>
                    <td>TuesDay</td>
                    <td>Wednesday</td>
                    <td>Thurday</td>
                    <td>Friday</td>
                    <td>Satuday</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}
