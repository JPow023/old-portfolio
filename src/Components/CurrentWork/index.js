import React from 'react';
import './CurrentWork.css';

const CurrentWork = () => {
    return (
        <div class="container-fluid current">
            <div id="current-work">
                <div id="current-work-div">
                    What I'm Currently Doing
                </div>
                <div class="row">
                    <div class="col-4 current-one">
                        <div class="current-one-two">
                            <img class="rg" src={(require('./Images/rocky-grill.png'))} />

                            <ul>
                                <li>Blah Blah Blah</li>
                                <li>Blah Blah Blah</li>
                                <li>Blah Blah Blah</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 current-two">
                    <div class="current-one-two">
                            <img class="rg" src={(require('./Images/action-sports.png'))} />
                            <ul>
                                <li>Blah Blah Blah</li>
                                <li>Blah Blah Blah</li>
                                <li>Blah Blah Blah</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-4 current-three">
                    <div class="current-one-two">
                            <img class="rg" src={(require('./Images/wvn.png'))} />
                            <ul>
                                <li>Blah Blah Blah</li>
                                <li>Blah Blah Blah</li>
                                <li>Blah Blah Blah</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWork;