import React, { useState } from 'react'
import reactLogo from '../assets/react.svg'
import ExpandIcon from '../assets/Expand.svg'

const Accordion = () => {
    const [info, setInfo] = useState({
        "id": 1,
        "accomplished": false,
        "clearance": {
            "id": 1,
            "companyId": 1,
            "clearanceDepartment": [
                {
                    "id": 1,
                    "name": "Own Department",
                    "assignedEmployeeIds": [
                        200002
                    ],
                    "clearanceId": 1,
                    "departmentActivities": [
                        {
                            "id": 1,
                            "activity": "Job Holder",
                            "description": "Did he handed over projects?",
                            "clearanceDepartmentId": 1
                        }
                    ]
                },
                {
                    "id": 2,
                    "name": "IT",
                    "assignedEmployeeIds": [
                        200003
                    ],
                    "clearanceId": 1,
                    "departmentActivities": [
                        {
                            "id": 2,
                            "activity": "Laptop/ Desktop",
                            "description": "",
                            "clearanceDepartmentId": 2
                        },
                        {
                            "id": 3,
                            "activity": "Other Devices",
                            "description": "",
                            "clearanceDepartmentId": 2
                        },
                        {
                            "id": 4,
                            "activity": "E-mail Deactivation",
                            "description": "",
                            "clearanceDepartmentId": 2
                        },
                        {
                            "id": 5,
                            "activity": "EBS Deactivation",
                            "description": "",
                            "clearanceDepartmentId": 2
                        },
                        {
                            "id": 6,
                            "activity": "Access Control Deactivation",
                            "description": "",
                            "clearanceDepartmentId": 2
                        }
                    ]
                },
                {
                    "id": 3,
                    "name": "Accounts",
                    "assignedEmployeeIds": [
                        200004
                    ],
                    "clearanceId": 1,
                    "departmentActivities": [
                        {
                            "id": 7,
                            "activity": "Petty Cash",
                            "description": "",
                            "clearanceDepartmentId": 3
                        },
                        {
                            "id": 8,
                            "activity": "Accounts Payable",
                            "description": "",
                            "clearanceDepartmentId": 3
                        },
                        {
                            "id": 9,
                            "activity": "PF Loan",
                            "description": "",
                            "clearanceDepartmentId": 3
                        },
                        {
                            "id": 10,
                            "activity": "Market Dues",
                            "description": "",
                            "clearanceDepartmentId": 3
                        },
                        {
                            "id": 11,
                            "activity": "Bandhan",
                            "description": "",
                            "clearanceDepartmentId": 3
                        },
                        {
                            "id": 12,
                            "activity": "Canteen Bill",
                            "description": "",
                            "clearanceDepartmentId": 3
                        },
                        {
                            "id": 13,
                            "activity": "Medicine Bill",
                            "description": "",
                            "clearanceDepartmentId": 3
                        },
                        {
                            "id": 14,
                            "activity": "Fish and others Bill",
                            "description": "",
                            "clearanceDepartmentId": 3
                        }
                    ]
                },
                {
                    "id": 4,
                    "name": "HR",
                    "assignedEmployeeIds": [
                        200005
                    ],
                    "clearanceId": 1,
                    "departmentActivities": [
                        {
                            "id": 15,
                            "activity": "Payroll",
                            "description": "",
                            "clearanceDepartmentId": 4
                        },
                        {
                            "id": 16,
                            "activity": "Salary Advance",
                            "description": "",
                            "clearanceDepartmentId": 4
                        },
                        {
                            "id": 17,
                            "activity": "ID Card",
                            "description": "",
                            "clearanceDepartmentId": 4
                        },
                        {
                            "id": 18,
                            "activity": "Sim Card",
                            "description": "",
                            "clearanceDepartmentId": 4
                        }
                    ]
                },
                {
                    "id": 5,
                    "name": "Admin",
                    "assignedEmployeeIds": [
                        200005
                    ],
                    "clearanceId": 1,
                    "departmentActivities": [
                        {
                            "id": 19,
                            "activity": "Stationary",
                            "description": "",
                            "clearanceDepartmentId": 5
                        },
                        {
                            "id": 20,
                            "activity": "Equipment",
                            "description": "",
                            "clearanceDepartmentId": 5
                        },
                        {
                            "id": 21,
                            "activity": "Desk Keys",
                            "description": "",
                            "clearanceDepartmentId": 5
                        }
                    ]
                },
                {
                    "id": 6,
                    "name": "Transport",
                    "assignedEmployeeIds": [
                        200005
                    ],
                    "clearanceId": 1,
                    "departmentActivities": [
                        {
                            "id": 22,
                            "activity": "Vehicle",
                            "description": "",
                            "clearanceDepartmentId": 6
                        },
                        {
                            "id": 23,
                            "activity": "Vehicle Keys",
                            "description": "",
                            "clearanceDepartmentId": 6
                        },
                        {
                            "id": 24,
                            "activity": "Blue Book/ Registration Card",
                            "description": "",
                            "clearanceDepartmentId": 6
                        },
                        {
                            "id": 25,
                            "activity": "Tax Token",
                            "description": "",
                            "clearanceDepartmentId": 6
                        },
                        {
                            "id": 26,
                            "activity": "Fitness Certificate",
                            "description": "",
                            "clearanceDepartmentId": 6
                        },
                        {
                            "id": 27,
                            "activity": "Insurance Certificate",
                            "description": "",
                            "clearanceDepartmentId": 6
                        }
                    ]
                }
            ]
        },
        "effectiveDateFrom": "2023-09-13",
        "effectiveDateTo": "2023-09-20",
        "employeeId": 200009,
        "resignationId": 2,
        "departmentActivityResponses": [
            {
                "id": 1,
                "departmentActivity": {
                    "id": 15,
                    "activity": "Payroll",
                    "description": "",
                    "clearanceDepartmentId": 4
                },
                "activityResponse": true,
                "remarks": "",
                "createdBy": null
            },
            {
                "id": 2,
                "departmentActivity": {
                    "id": 16,
                    "activity": "Salary Advance",
                    "description": "",
                    "clearanceDepartmentId": 4
                },
                "activityResponse": true,
                "remarks": "",
                "createdBy": null
            },
            {
                "id": 3,
                "departmentActivity": {
                    "id": 17,
                    "activity": "ID Card",
                    "description": "",
                    "clearanceDepartmentId": 4
                },
                "activityResponse": true,
                "remarks": "",
                "createdBy": null
            },
            {
                "id": 4,
                "departmentActivity": {
                    "id": 18,
                    "activity": "Sim Card",
                    "description": "",
                    "clearanceDepartmentId": 4
                },
                "activityResponse": true,
                "remarks": "",
                "createdBy": null
            }
        ],
        "employeeClearanceDepartmentDTOs": [
            {
                "id": 1,
                "name": "Own Department",
                "assignedEmployeeIds": [
                    200002
                ],
                "departmentActivityResponse": []
            },
            {
                "id": 2,
                "name": "IT",
                "assignedEmployeeIds": [
                    200003
                ],
                "departmentActivityResponse": []
            },
            {
                "id": 3,
                "name": "Accounts",
                "assignedEmployeeIds": [
                    200004
                ],
                "departmentActivityResponse": []
            },
            {
                "id": 4,
                "name": "HR",
                "assignedEmployeeIds": [
                    200005
                ],
                "departmentActivityResponse": [
                    {
                        "id": 1,
                        "departmentActivity": {
                            "id": 15,
                            "activity": "Payroll",
                            "description": "",
                            "clearanceDepartmentId": 4
                        },
                        "activityResponse": true,
                        "remarks": "",
                        "createdBy": null
                    },
                    {
                        "id": 2,
                        "departmentActivity": {
                            "id": 16,
                            "activity": "Salary Advance",
                            "description": "",
                            "clearanceDepartmentId": 4
                        },
                        "activityResponse": false,
                        "remarks": "",
                        "createdBy": null
                    },
                    {
                        "id": 3,
                        "departmentActivity": {
                            "id": 17,
                            "activity": "ID Card",
                            "description": "",
                            "clearanceDepartmentId": 4
                        },
                        "activityResponse": true,
                        "remarks": "",
                        "createdBy": null
                    },
                    {
                        "id": 4,
                        "departmentActivity": {
                            "id": 18,
                            "activity": "Sim Card",
                            "description": "",
                            "clearanceDepartmentId": 4
                        },
                        "activityResponse": true,
                        "remarks": "",
                        "createdBy": null
                    }
                ]
            },
            {
                "id": 5,
                "name": "Admin",
                "assignedEmployeeIds": [
                    200005
                ],
                "departmentActivityResponse": []
            },
            {
                "id": 6,
                "name": "Transport",
                "assignedEmployeeIds": [
                    200005
                ],
                "departmentActivityResponse": []
            }
        ]
    });

    const [sectionIndex, setSectionIndex] = useState(null);

    const toggleDept = index => {
        if (index === sectionIndex) {
            // If the clicked section is already open, close it.
            setSectionIndex(null);
        } else {
            // Otherwise, open the clicked section.
            setSectionIndex(index);
        }
    }


    return (
        <>
            <div>
                {
                    info.clearance.clearanceDepartment.map((dept, deptIndex) =>
                        <div key={dept.id} style={{ marginBottom: '20px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d8dbe0' }}>
                                <div style={{ fontSize: '18px', fontWeight: '600' }}>{dept.name}</div>
                                <div onClick={() => {
                                    toggleDept(deptIndex);
                                }}>
                                    <img src={ExpandIcon} style={{ transform: deptIndex === sectionIndex && 'rotate(180deg)' }} alt='img' />
                                </div>

                            </div>

                            {/* --------------------------- Content -------------------------- */}
                            {
                                deptIndex === sectionIndex &&
                                <div style={{ border: '1px solid #d8dbe0', borderTop: '0' }}>
                                    <div style={{ background: '#d8dbe0', fontSize: '16px', fontWeight: '800', padding: '10px 0' }}>
                                        <div md='6'>Activities</div>
                                        <div md='6'>Settlement Status</div>
                                    </div>

                                    {
                                        dept.departmentActivities.map(activity =>
                                            <div key={activity.id} style={{ borderBottom: '1px solid #d8dbe0', padding: '10px 0', fontWeight: '600' }}>
                                                <div md='6'>
                                                    {activity.activity}

                                                </div>
                                                <div md='6'>
                                                    <div>
                                                        <div>
                                                            <input type='checkbox'
                                                                defaultChecked={info.employeeClearanceDepartmentDTOs.filter(item => item.name === dept.name)?.[0]?.departmentActivityResponse?.filter(item => item.departmentActivity.activity === activity.activity)?.[0]?.activityResponse}
                                                                disabled
                                                            />
                                                            <label style={{ marginLeft: '5px' }}>Yes</label>
                                                        </div>
                                                        <div>
                                                            <input type='checkbox' disabled />
                                                            <label style={{ marginLeft: '5px' }}>No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>)
                                    }

                                </div>
                            }
                        </div>)
                }

            </div>
        </>
    )
}

export default Accordion