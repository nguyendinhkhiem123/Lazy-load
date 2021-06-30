import React, {  useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import { Row } from "antd";

import axios from 'axios'
import CardItem from './CardItem';
function Layout2(props) {
  const { Header, Content, Footer } = Layout;
  const [ map , setMap ] = useState([]);
  const url = 'https://api.unsplash.com/photos/random?client_id=ErW2ogn2ODMft-pAJimChlB2dHAHEuhD4V05bLwIXUk&count=30';
  
  const getImage = async ()=>{
        try{
              const res =await axios.get(url);
              setMap(res.data)
              console.log(res.data);
        }
        catch(err){
            console.log(err); 
        }
  }
  useEffect(()=>{
      getImage();
  },[])
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          {new Array(15).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row gutter={[16, 16]}>
                {map.map((value,index)=>{
                
                    return(     
                       
                            <CardItem key={index} url={value.urls.regular}/> 
                      
                    ) 
                  
                })}
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ng D. Khiem
      </Footer>
    </Layout>
  );
}

export default Layout2;
