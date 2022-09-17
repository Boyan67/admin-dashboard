import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';

import {ChartsHeader, Header} from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';

const Area = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg ">
            <Header category={"Charts"} title={"Area Chart"}/>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
            <ChartsHeader category="Area" title="Inflation Rate in percentage" />
            <div className="w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={areaPrimaryXAxis}
                    primaryYAxis={areaPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                    legendSettings={{ background: 'white' }}
                >
                    <Inject services={[SplineAreaSeries, DateTime, Legend]} />
                    <SeriesCollectionDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default Area;
