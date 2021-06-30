import React, { lazy, Suspense } from 'react';
import {  Col , Spin} from "antd";
import Card from './Card';
import { Link } from 'react-router-dom';
// const Card = lazy(() => import("./Card"))
function CardItem(props) {
  
    const { url } = props;
    return (
        
            <Col xs={24} sm={12} md={8} lg={6}>
                  {/* <Suspense fallback={<div style={{}}> 
                      <Spin tip="Loading...." style={{margin : "auto"}}></Spin>
                  </div>}>
                   
                    </Suspense>     */}
                    <Link to="/path/khiem">
                    
                             <Card url={url}></Card>
                    </Link>
                    
            </Col>
    
    );
}

export default CardItem;  