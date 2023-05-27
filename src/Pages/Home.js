import React from 'react';
import DynamicForm from "../Components/DynamicForm";
import { formConfig } from '../Data/SiteData';
function Home(props) {

    return (
        <div className='container'>
            <h1>Dynamic Form Generation</h1>
            <DynamicForm formConfig={formConfig} />
        </div>
    );
}

export default Home;