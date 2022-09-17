import React from 'react';
import {GridComponent, ColumnDirective, ColumnsDirective, Resize, Sort, ContextMenu,
Filter, Page, ExcelExport, PdfExport, Edit, Inject} from "@syncfusion/ej2-react-grids";

import {ordersData, contextMenuItems, ordersGrid} from "../data/dummy";
import {Header} from '../components'
import {useStateContext} from "../context/ContextProvider";

function Orders(props) {
    const { currentMode } = useStateContext();
    return (
        <div className={"m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg"}>
            <Header title={"Orders"} category={"Page"}></Header>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded" style={{height: "3px", width: "100%", marginBottom: 50, marginTop: 10}}/>
            <GridComponent id={"gridcomp"}
                           dataSource={ordersData}
                           allowPaging
                           allowSorting
                           background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
                <ColumnsDirective>
                    {ordersGrid.map((item, index) => (
                        <ColumnDirective key={index} {...item}/>
                    ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]}/>
            </GridComponent>
        </div>
    );
}

export default Orders;
