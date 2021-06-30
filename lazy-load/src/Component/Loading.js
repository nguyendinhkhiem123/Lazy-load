import React from 'react';
import { Spin } from 'antd';
import "antd/dist/antd.css";
function Loading(props) {
    return (
        <div style={{
            display : 'flex' ,
            position : 'fixed' ,
            top : 0 ,
            right : 0 ,
            bottom : 0,
            left : 0,
            zIndex : '1000',

        }}>
              <Spin tip="Loading..." style={{

                    margin : 'auto'
              }}>

              </Spin>
        </div>
      
    );
}

export default Loading;
