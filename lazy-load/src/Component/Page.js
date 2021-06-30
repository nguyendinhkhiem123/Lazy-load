import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Loading from './Loading';
import "antd/dist/antd.css";
const Layout = lazy(()=> import('./Layout'));
function Page(props) {
    return (
        <Router>
            <Suspense fallback={<Loading></Loading>}>
                <Switch>
                  <Route exact path="/" render={()=>{
                       return ( <div>
                            Ấn vào đây 
                            <a href="/layout">đến trang layout</a>
                        </div>
                       )
                    }}
                    ></Route>
                    <Route path="/layout" component={Layout}></Route>
                 
                </Switch>
            </Suspense>
        </Router>
    );
}

export default Page;