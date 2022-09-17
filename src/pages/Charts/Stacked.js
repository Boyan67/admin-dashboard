import React from 'react';

import {ChartsHeader, Header, Stacked as StackedChart} from '../../components';
import {useStateContext} from "../../context/ContextProvider";

const Stacked = () => {
    const { currentMode } = useStateContext();
    return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg ">
        <Header category={"Stacked Chart"} title={"Line Chart"}/>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
        <ChartsHeader category="Stacked" title="Revenue Breakdown" />
        <div className="w-full">
            <StackedChart background={currentMode === 'Dark' ? '#33373E' : '#fff'}/>
        </div>
    </div>)
}
export default Stacked;
