import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import {ChartsHeader, Header} from '../../components';
import { useStateContext } from '../../context/ContextProvider';

const ColorMapping = () => {
    const { currentMode } = useStateContext();

    return (
        <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg ">
            <Header category={"Charts"} title={"Color Mapping Chart"}/>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
            <ChartsHeader category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH" />
            <div className="w-full">
                <ChartComponent
                    id="charts"
                    primaryXAxis={ColorMappingPrimaryXAxis}
                    primaryYAxis={ColorMappingPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    legendSettings={{ mode: 'Range', background: 'white' }}
                    tooltip={{ enable: true }}
                    background={currentMode === 'Dark' ? '#33373E' : '#fff'}
                >
                    <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={colorMappingData[0]}
                            name="USA"
                            xName="x"
                            yName="y"
                            type="Column"
                            cornerRadius={{
                                topLeft: 10,
                                topRight: 10,
                            }}
                        />
                    </SeriesCollectionDirective>
                    <RangeColorSettingsDirective>
                        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                        {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
                    </RangeColorSettingsDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default ColorMapping;
