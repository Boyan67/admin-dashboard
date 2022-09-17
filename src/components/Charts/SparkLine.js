import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip} from "@syncfusion/ej2-react-charts";
import {useStateContext} from "../../context/ContextProvider";


function SparkLine({id, height, width, color, data, type, currentColor}) {
    const { currentMode } = useStateContext();
    return (
        <SparklineComponent
            id={id}
            height={height}
            width={width}
            lineWidth={1}
            fill={color}
            valueType={"Numeric"}
            border={{color: currentColor, width: 2}}
            dataSource={data}
            xName={"xval"}
            yName={"yval"}
            type={type}
            tooltipSettings={{
                visible: true,
                trackLineSettings: {
                    visible: true
                }
            }}
        >
            <Inject services={[SparklineTooltip]} />

        </SparklineComponent>
    );
}

export default SparkLine;
