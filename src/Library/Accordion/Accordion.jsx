import React, { useState } from 'react';
import ExpandIcon from '../../assets/Expand.svg';

const info = {
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
};

const Accordion = () => {

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
                {info.clearance.clearanceDepartment.map((dept, deptIndex) =>
                    <div key={dept.id} className='mb-5'>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #d8dbe0' }}>
                            <div style={{ fontSize: '18px', fontWeight: '600' }}>{dept.name}</div>
                            <div onClick={() => {
                                toggleDept(deptIndex);
                            }}>
                                <img src={ExpandIcon} style={{ transform: deptIndex === sectionIndex && 'rotate(180deg)', transition: 'transform 0.3s ease' }} alt='img' />
                            </div>

                        </div>

                        {/* --------------------------- Content -------------------------- */}
                        <div
                            // style={{ border: '1px solid #d8dbe0', borderTop: '0' }}
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${deptIndex === sectionIndex ? 'max-h-screen py-2' : 'max-h-0'
                                } border border-t-0 border-gray-300`}
                        >
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

                    </div>)
                }

            </div>
        </>
    )
}

export default Accordion