export const TreeViewCode = `
import React from 'react';
import './TreeView.css'

const TreeView = () => {
    return (
        <div class="container">
            <div className="tree">
                <ul>
                    <li><span>World</span>
                        <ul>
                            <li><span>Bangladesh</span>
                                <ul>
                                    <li><span>Dhaka</span>
                                        <ul>
                                            <li><span>Uttara</span></li>
                                            <li><span>Khilgaon</span></li>
                                            <li><span>Banani</span></li>
                                        </ul>
                                    </li>
                                    <li><span>Rajshahi</span>
                                        <ul>
                                            <li><span>Rajpara</span></li>
                                            <li><span>Talaimari</span></li>
                                            <li><span>Vodra</span></li>
                                        </ul>
                                    </li>
                                    <li><span>Khulna</span></li>
                                </ul>
                            </li>
                            <li><span>India</span>
                                <ul>
                                    <li><span>Delhi</span></li>
                                    <li><span>Kolkata</span>
                                        <ul>
                                            <li><span>Domdom</span></li>
                                            <li><span>Hawra</span></li>
                                            <li><span>Hugli</span></li>
                                        </ul>
                                    </li>
                                    <li><span>Mumbai</span></li>
                                </ul>
                            </li>
                            <li><span>China</span>
                                <ul>
                                    <li><span>Beijing</span></li>
                                    <li><span>Shanghai</span></li>
                                    <li><span>Nanjing</span></li>
                                </ul>
                            </li>
                            <li><span>Australia</span>
                                <ul>
                                    <li><span>Sidney</span></li>
                                    <li><span>Canbera</span></li>
                                    <li><span>Melbourne</span></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    );
};

export default TreeView;
`