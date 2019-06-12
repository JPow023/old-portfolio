import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div id="side-bar">
            <div id="home-icon">
                <img id="home" src={(require('./Images/home-icon.png'))} />
            </div>
            <div id="pencil-and-paintbrush">
                <img id="pencil" src={(require('./Images/pencil-and-paintbrush.png'))} />
            </div>
            <div id="tools-icon">
                <img id="tools" src={(require('./Images/tools-icon.png'))} />
            </div>
            <div id="laptop-icon">
                <img id="laptop" src={(require('./Images/laptop-icon.png'))} />
            </div>
            <div id="person-icon">
                <img id="person" src={(require('./Images/person-icon.png'))} />
            </div>
        </div>
    )
}

export default Sidebar;