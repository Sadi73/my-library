export const CustomTreeCode = `
import React, { useState } from 'react';
import './CustomTree.css';

const orgData = {
    "employeeId": 200001,
    "name": "Rashed Haider",
    "title": "COO",
    "profilePicPath": "img/1676442104705_200001.jpg",
    "thumbnails_path_01": "img/200001thumb01.jpg",
    "thumbnails_path_02": "img/200001thumb02.jpg",
    "flag": false,
    "children": [
        {
            "employeeId": 200005,
            "name": "Raihana Zannat",
            "title": "Physical Design Manager",
            "profilePicPath": "img/1676443680500_200005.jpg",
            "thumbnails_path_01": "img/200005thumb01.jpg",
            "thumbnails_path_02": "img/200005thumb02.jpg",
            "flag": true,
            "children": [
                {
                    "employeeId": 200014,
                    "name": "Emon Podder",
                    "title": "Design Engineer",
                    "profilePicPath": "img/1676544205645_200014.jpg",
                    "thumbnails_path_01": "img/200014thumb01.jpg",
                    "thumbnails_path_02": "img/200014thumb02.jpg",
                    "flag": true,
                    "children": [
                        {
                            "employeeId": 200027,
                            "name": "Emran Hossain",
                            "title": "Engineer II",
                            "profilePicPath": "img/1676632391685_200027.jpg",
                            "thumbnails_path_01": "img/200027thumb01.jpg",
                            "thumbnails_path_02": "img/200027thumb02.jpg",
                            "flag": true,
                            "children": [],
                            "relationship": "110"
                        },
                        {
                            "employeeId": 200002,
                            "name": "Syed Mizanur",
                            "title": "Lead Software Engineer",
                            "profilePicPath": "img/1676544108979_200002.jpg",
                            "thumbnails_path_01": "img/200002thumb01.jpg",
                            "thumbnails_path_02": "img/200002thumb02.jpg",
                            "flag": true,
                            "children": [],
                            "relationship": "110"
                        },
                        {
                            "employeeId": 200003,
                            "name": "Tahsina Yasmin",
                            "title": "Analog Test Engineer",
                            "profilePicPath": "img/1676546774318_200003.jpg",
                            "thumbnails_path_01": "img/200003thumb01.jpg",
                            "thumbnails_path_02": "img/200003thumb02.jpg",
                            "flag": true,
                            "children": [
                                {
                                    "employeeId": 200009,
                                    "name": "Shohel Arman",
                                    "title": "Analog Circuit Designer",
                                    "profilePicPath": "img/1676454550957_200009.jpg",
                                    "thumbnails_path_01": "img/200009thumb01.jpg",
                                    "thumbnails_path_02": "img/200009thumb02.jpg",
                                    "flag": true,
                                    "children": [
                                        {
                                            "employeeId": 200034,
                                            "name": "Sheray Ray",
                                            "title": "Analog Circuit Designer",
                                            "profilePicPath": "img/1676632754412_200034.jpg",
                                            "thumbnails_path_01": "img/200034thumb01.jpg",
                                            "thumbnails_path_02": "img/200034thumb02.jpg",
                                            "flag": true,
                                            "children": [],
                                            "relationship": "110"
                                        },
                                        {
                                            "employeeId": 200023,
                                            "name": "Rounak Chowdhury",
                                            "title": "Associate Engineer (Trainee)",
                                            "profilePicPath": "img/1676544646685_200023.jpg",
                                            "thumbnails_path_01": "img/200023thumb01.jpg",
                                            "thumbnails_path_02": "img/200023thumb02.jpg",
                                            "flag": true,
                                            "children": [],
                                            "relationship": "110"
                                        }
                                    ],
                                    "relationship": "111"
                                },
                                {
                                    "employeeId": 200011,
                                    "name": "Joy Sheikh",
                                    "title": "Analog Product Engineer",
                                    "profilePicPath": "img/1676544154802_200011.jpg",
                                    "thumbnails_path_01": "img/200011thumb01.jpg",
                                    "thumbnails_path_02": "img/200011thumb02.jpg",
                                    "flag": true,
                                    "children": [
                                        {
                                            "employeeId": 200030,
                                            "name": "Abu Sayeed",
                                            "title": "Analog Test Engineer",
                                            "profilePicPath": "img/1676632600203_200030.jpg",
                                            "thumbnails_path_01": "img/200030thumb01.jpg",
                                            "thumbnails_path_02": "img/200030thumb02.jpg",
                                            "flag": true,
                                            "children": [],
                                            "relationship": "110"
                                        },
                                        {
                                            "employeeId": 200036,
                                            "name": "Jebunnesa Chowdhury",
                                            "title": "Analog Product Engineer",
                                            "profilePicPath": "img/1676633093666_200036.jpg",
                                            "thumbnails_path_01": "img/200036thumb01.jpg",
                                            "thumbnails_path_02": "img/200036thumb02.jpg",
                                            "flag": true,
                                            "children": [],
                                            "relationship": "110"
                                        }
                                    ],
                                    "relationship": "111"
                                },
                                {
                                    "employeeId": 200045,
                                    "name": "Firoz Hasan",
                                    "title": "Engineer III",
                                    "profilePicPath": "img/1677478590244_200045.jpg",
                                    "thumbnails_path_01": "img/200045thumb01.jpg",
                                    "thumbnails_path_02": "img/200045thumb02.jpg",
                                    "flag": true,
                                    "children": [],
                                    "relationship": "110"
                                }
                            ],
                            "relationship": "111"
                        },
                        {
                            "employeeId": 200040,
                            "name": "Mithila Jannath",
                            "title": "Design Engineer",
                            "profilePicPath": "img/1676633634869_200040.jpg",
                            "thumbnails_path_01": "img/200040thumb01.jpg",
                            "thumbnails_path_02": "img/200040thumb02.jpg",
                            "flag": true,
                            "children": [],
                            "relationship": "110"
                        }
                    ],
                    "relationship": "111"
                },
                {
                    "employeeId": 200017,
                    "name": "Rhul Paul",
                    "title": "Engineer III",
                    "profilePicPath": "img/1676544261881_200017.jpg",
                    "thumbnails_path_01": "img/200017thumb01.jpg",
                    "thumbnails_path_02": "img/200017thumb02.jpg",
                    "flag": true,
                    "children": [
                        {
                            "employeeId": 200028,
                            "name": "Eva Rahman",
                            "title": "Engineer II",
                            "profilePicPath": "img/1676632452246_200028.jpg",
                            "thumbnails_path_01": "img/200028thumb01.jpg",
                            "thumbnails_path_02": "img/200028thumb02.jpg",
                            "flag": true,
                            "children": [],
                            "relationship": "110"
                        },
                        {
                            "employeeId": 200055,
                            "name": "Afra Zahin",
                            "title": "Brand Manager",
                            "profilePicPath": "img/1714987997756_200055.jpg",
                            "thumbnails_path_01": "img/200055thumb01.jpg",
                            "thumbnails_path_02": "img/200055thumb02.jpg",
                            "flag": true,
                            "children": [],
                            "relationship": "110"
                        },
                        {
                            "employeeId": 700007,
                            "name": "Trishan Ahmed",
                            "title": "Physical Design Engineer",
                            "profilePicPath": "img/1710307053378_700007.jpg",
                            "thumbnails_path_01": "img/700007thumb01.jpg",
                            "thumbnails_path_02": "img/700007thumb02.jpg",
                            "flag": true,
                            "children": [],
                            "relationship": "110"
                        }
                    ],
                    "relationship": "111"
                }
            ],
            "relationship": "101"
        }
    ],
    "relationship": "001"
};

const TreeNode = ({ node }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li>
            <span onClick={handleClick}>{node.name}</span>
            {isOpen && node.children && node.children.length > 0 && (
                <ul>
                    {node.children.map(child => (
                        <TreeNode key={child.employeeId} node={child} />
                    ))}
                </ul>
            )}
        </li>
    );
};

const CustomTree = () => {
    return (
        <div className='tree1'>
            <ul>
                <TreeNode node={orgData} />
            </ul>
        </div>
    );
};

export default CustomTree;
`