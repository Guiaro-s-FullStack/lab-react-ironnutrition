import {Radio,Divider } from "antd"
import React from 'react'

const LoadFoodForm= ({toggleHide}) => {
    return (
        <div>
            <Divider>Add Food Entry</Divider>
            <div>
            <Radio.Button value="large" style={{ marginTop: 10 }} onClick={toggleHide}>Show Form</Radio.Button>
                </div>
        </div>
    )
}

export default LoadFoodForm
