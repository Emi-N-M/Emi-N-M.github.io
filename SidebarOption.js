import React from 'react';
import './SidebarOption.css';

function SidebarOption({active, text, Icon}){
    return(
        //active funciona como modificador para "sidebarOption", modifica su estado
        <div className={`sidebarOption ${active && 'SidebarOption--active'}`}>      
            <Icon />
            <h2> {text}</h2>
        </div>

    )
}

export default SidebarOption;
