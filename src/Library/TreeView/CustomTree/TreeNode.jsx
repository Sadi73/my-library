import React, { useState } from 'react';

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
}

export default TreeNode;