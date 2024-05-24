import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';

const orgData = {
    name: 'Company',
    toggled: true,
    children: [
        {
            name: 'HR Department',
            children: [
                { name: 'Recruitment Team', children: [{ name: 'John Doe' }, { name: 'Jane Smith' }] },
                { name: 'Employee Relations Team', children: [{ name: 'Emma Brown' }, { name: 'Liam Johnson' }] }
            ]
        },
        {
            name: 'IT Department',
            children: [
                { name: 'Development Team', children: [{ name: 'Michael Lee' }, { name: 'Sarah Wilson' }] },
                { name: 'Support Team', children: [{ name: 'David Miller' }, { name: 'Anna Davis' }] }
            ]
        },
        {
            name: 'Finance Department',
            children: [
                { name: 'Accounts Payable', children: [{ name: 'Sophia Martinez' }, { name: 'James Anderson' }] },
                { name: 'Accounts Receivable', children: [{ name: 'Isabella Garcia' }, { name: 'Benjamin Harris' }] }
            ]
        }
    ]
};

const TreeBeard = () => {
    const [treeData, setTreeData] = useState(orgData);
    const [cursor, setCursor] = useState(null);

    const onToggle = (node, toggled) => {
        if (cursor) {
            cursor.active = false;
        }
        node.active = true;
        if (node.children) {
            node.toggled = toggled;
        }
        setCursor(node);
        setTreeData(Object.assign({}, treeData));
    };

    return (
        <Treebeard
            data={treeData}
            onToggle={onToggle}
        />
    );
};

export default TreeBeard;
