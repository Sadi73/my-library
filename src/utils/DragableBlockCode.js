export const DragableBlockCode = `
import React, { useState, useRef, useEffect } from "react";

const getRandomPosition = (containerWidth, containerHeight) => ({
    x: Math.floor(Math.random() * (containerWidth - 100)), // Subtract block width
    y: Math.floor(Math.random() * (containerHeight - 100)), // Subtract block height
});

const Dragable = () => {
    const [blocks, setBlocks] = useState([]);
    const containerRef = useRef(null);

    // Set the initial block with random position when the component mounts
    useEffect(() => {
        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;
            setBlocks([
                { id: 1, position: getRandomPosition(offsetWidth, offsetHeight), parentId: null },
            ]);
        }
    }, []);

    const addBlock = (parentId) => {
        if (containerRef.current) {
            const { offsetWidth, offsetHeight } = containerRef.current;
            setBlocks((prevBlocks) => [
                ...prevBlocks,
                {
                    id: Date.now(),
                    position: getRandomPosition(offsetWidth, offsetHeight),
                    parentId,
                },
            ]);
        }
    };

    const handleDragStart = (id, event) => {
        const block = blocks.find((b) => b.id === id);
        const offsetX = event.clientX - block.position.x;
        const offsetY = event.clientY - block.position.y;

        const handleMouseMove = (e) => {
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            if (containerRef.current) {
                const { offsetWidth, offsetHeight } = containerRef.current;

                // Ensure the block stays within the container
                const boundedX = Math.max(
                    0,
                    Math.min(newX, offsetWidth - 100) // Block width = 100
                );
                const boundedY = Math.max(
                    0,
                    Math.min(newY, offsetHeight - 100) // Block height = 100
                );

                setBlocks((prevBlocks) =>
                    prevBlocks.map((b) =>
                        b.id === id
                            ? { ...b, position: { x: boundedX, y: boundedY } }
                            : b
                    )
                );
            }
        };

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const renderLines = () =>
        blocks
            .filter((block) => block.parentId !== null)
            .map((block) => {
                const parent = blocks.find((b) => b.id === block.parentId);
                if (!parent) return null;

                const parentX = parent.position.x + 50; // Center of parent block
                const parentY = parent.position.y + 50; // Center of parent block
                const childX = block.position.x + 50; // Center of child block
                const childY = block.position.y + 50; // Center of child block

                return (
                    <line
                        key={\`line-\${block.id}\`}
                        x1={parentX}
                        y1={parentY}
                        x2={childX}
                        y2={childY}
                        stroke="black"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                    />
                );
            });

    return (
        <div
            ref={containerRef}
            className="relative overflow-hidden w-full h-[500px] border border-gray-400"
        >
            <svg className="absolute top-0 left-0 w-full h-full z-0">
                {renderLines()}
            </svg>

            {blocks.map((block) => (
                <div
                    key={block.id}
                    className="absolute w-24 h-24 bg-blue-300 border border-blue-500 rounded-md flex items-center justify-center cursor-move z-10"
                    onMouseDown={(e) => handleDragStart(block.id, e)}
                    style={{
                        left: block.position.x,
                        top: block.position.y,
                    }}
                >
                    <button
                        className="bg-white border border-blue-900 rounded cursor-pointer px-2 py-1"
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent dragging when button is clicked
                            addBlock(block.id);
                        }}
                    >
                        +
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Dragable;

`