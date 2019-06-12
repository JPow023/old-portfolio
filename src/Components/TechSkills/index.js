import React from 'react';
import './TechSkills.css';

const TechSkills = () => {
    return (
        <div id="tech-skills">
            <div class="container-fluid">
                <div id="tech-skills-div">
                    How I Do It
                </div>
                <div class="row">
                    <div class="col-3 tech-skills-one">
                        <div class="tech-skills">
                            HTML / CSS
                            <div class="icon-tile">
                                <img id="html-icon" src={(require('./Images/html.png'))} />
                                <img class="icon" src={(require('./Images/css.png'))} />
                            </div>
                        </div>
                    </div>
                    <div class="col-3 tech-skills-two">
                        <div class="tech-skills">
                            React JS
                            <div class="icon-tile">
                                <img class="icon" src={(require('./Images/react.png'))} />
                            </div>
                        </div>
                    </div>
                    <div class="col-3 tech-skills-three">
                        <div class="tech-skills">
                            Node JS
                            <div id="node-js">
                                <img id="node-icon" src={(require('./Images/node.png'))} />
                            </div>
                        </div>
                    </div>
                    <div class="col-3 tech-skills-four">
                        <div class="tech-skills">
                            Express JS
                            <div class="icon-tile">
                                <img class="icon" src={(require('./Images/express.png'))} />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-3 tech-skills-five">
                        <div class="tech-skills">
                            MySQL
                            <div class="icon-tile">
                                <img class="icon" src={(require('./Images/mysql.png'))} />
                            </div>
                        </div>
                    </div>
                    <div class="col-3 tech-skills-six">
                        <div class="tech-skills">
                            MongoDB
                            <div class="icon-tile">
                                <img class="icon" src={(require('./Images/mongodb.png'))} />
                            </div>
                        </div>
                    </div>
                    <div class="col-3 tech-skills-fourseven">
                        <div class="tech-skills">
                            Agile Development
                            <div class="icon-tile">
                                <img class="icon" src={(require('./Images/agile-development.png'))} />
                            </div>
                        </div>
                    </div>
                    <div class="col-3 tech-skills-eight">
                        <div class="tech-skills">
                            Photoshop
                            <div class="icon-tile">
                                <img class="icon" src={(require('./Images/photoshop.png'))} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechSkills;