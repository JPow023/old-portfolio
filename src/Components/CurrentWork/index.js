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
                                Freelance website for The Rocky Grill (In Progress)
                        </div>
                    </div>
                    <div class="col-4 current-two">
                    <div class="current-one-two">
                            <img class="rg" src={(require('./Images/action-sports.png'))} />
                                Freelance website for Action Sports and Gaming
                        </div>
                    </div>
                    <div class="col-4 current-three">
                    <div class="current-one-two">
                            <img class="rg" src={(require('./Images/wvn.png'))} />
                                Rendering for Woodside Village's new home page
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentWork;