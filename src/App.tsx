import React from 'react';
// import {ChartComponent,Inject,LineSeries, SeriesCollectionDirective, SeriesDirective,Category,Legend,DataLabel,Tooltip} from '@syncfusion/ej2-react-charts';
// import { salesData } from './data';
// import './App.css';
import { Line } from './line';

function App() {
  return (
   <div>
    {/* <ChartComponent title="Sales Analysis" primaryXAxis={{valueType:"Category",title:"Month"}}
    primaryYAxis={{title:"Sales",}} legendSetting={{visible:true}} tooltip={{enable:true}}>
       <Inject services={[LineSeries,Category,Legend,DataLabel,Tooltip]}></Inject>
   
    <SeriesCollectionDirective>
    <SeriesDirective type="Line" dataSource={salesData}
    xName="month" yName="sales" name="Sales"
    marker={{DataLabel:{visible:true},visible:true}} ></SeriesDirective>
   
    </SeriesCollectionDirective>
    </ChartComponent>
    */}
    <Line></Line>
    
   </div>
  );
}

export default App;
