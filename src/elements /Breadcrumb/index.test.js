
import React from 'react'
import {render} from '@testing-library/react'
import Breadcrumb from './index'
import {BrowserRouter as Router} from 'react-router-dom'
 
const setup = () =>{
    const breadcrumbList = [
        {pageTitle: "Home", pageHref: ""},
        {pageTitle: "House Details", pageHref: ""}
    ];
    const {container} = render (
        <Router>
            <Breadcrumb data={breadcrumbList}/>
        </Router>
    );
    const breadcrumb = container.querySelector(`.breadcumb`);

    return{
        breadcrumb
    };
};

test("should have <ol> with classname .breadcumb and have text home & house details", ()=>{
    const {breadcrumb} = setup();

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toBeInTheDocument("Home");
    expect(breadcrumb).toBeInTheDocument("House Details");
});
