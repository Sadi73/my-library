import React from 'react';
import './TreeView.css'

const TreeView = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="tree">
                    <ul>
                        <li> <a href="#"><img src="images/1.jpg" /><span>Root</span></a>
                            <ul>
                                <li><a href="#"><img src="images/2.jpg" /><span> Child</span></a>
                                    <ul>
                                        <li> <a href="#"><img src="images/3.jpg" /><span>Great Grand Child</span></a> </li>
                                        <li> <a href="#"><img src="images/4.jpg" /><span>Great Grand Child</span></a> </li>
                                    </ul>
                                </li>
                                <li> <a href="#"><img src="images/5.jpg" /><span> Child</span></a>
                                    <ul>
                                        <li> <a href="#"><img src="images/6.jpg" /><span>Great Grand Child</span></a> </li>
                                        <li> <a href="#"><img src="images/7.jpg" /><span>Great Grand Child</span></a> </li>
                                        <li> <a href="#"><img src="images/8.jpg" /><span>Great Grand Child</span></a> </li>
                                    </ul>
                                </li>
                                <li><a href="#"><img src="images/9.jpg" /><span> Child</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default TreeView;