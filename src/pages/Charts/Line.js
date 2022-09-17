import React from 'react';

import {ChartsHeader, Header, LineChart} from '../../components';

const Line = () => (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg ">
        <Header category={"Charts"} title={"Line Chart"}/>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
        <ChartsHeader category="Line" title="Inflation Rate" />
        <div className="w-full">
            <LineChart />
        </div>
    </div>
);

export default Line;
