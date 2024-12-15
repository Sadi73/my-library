import React, { useEffect, useRef, useState } from "react";

const PentagonColorPicker = () => {
    const canvasRef = useRef(null);
    const [hue, setHue] = useState(0); // Single slider controls hue
    const [selectedColor, setSelectedColor] = useState(null);

    // Convert HSL to RGB
    const hslToRgb = (h, s, l) => {
        s /= 100;
        l /= 100;

        const c = (1 - Math.abs(2 * l - 1)) * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = l - c / 2;
        let r = 0, g = 0, b = 0;

        if (h < 60) [r, g, b] = [c, x, 0];
        else if (h < 120) [r, g, b] = [x, c, 0];
        else if (h < 180) [r, g, b] = [0, c, x];
        else if (h < 240) [r, g, b] = [0, x, c];
        else if (h < 300) [r, g, b] = [x, 0, c];
        else[r, g, b] = [c, 0, x];

        return [
            Math.round((r + m) * 255),
            Math.round((g + m) * 255),
            Math.round((b + m) * 255),
        ];
    };

    // Draw the pentagon with gradient shades
    const drawPentagon = (canvas, baseHue) => {
        const ctx = canvas.getContext("2d");
        const width = canvas.width;
        const height = canvas.height;

        const centerX = width / 2;
        const centerY = height / 2;
        const radius = Math.min(width, height) / 2.2;

        // Define pentagon path
        ctx.clearRect(0, 0, width, height); // Clear canvas
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const angle = (Math.PI / 2) + (i * 2 * Math.PI) / 5;
            const x = centerX + radius * Math.cos(angle);
            const y = centerY - radius * Math.sin(angle);
            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.clip();

        const imageData = ctx.createImageData(width, height);

        for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
                const dx = x - centerX;
                const dy = y - centerY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const angle = (Math.atan2(dy, dx) * (180 / Math.PI) + 360) % 360;

                // Check if the point is inside the pentagon
                if (ctx.isPointInPath(x, y)) {
                    const saturation = distance / radius;
                    const lightness = 1 - y / height;

                    const [r, g, b] = hslToRgb(baseHue, saturation * 100, lightness * 100);

                    const index = (y * width + x) * 4;
                    imageData.data[index] = r; // Red
                    imageData.data[index + 1] = g; // Green
                    imageData.data[index + 2] = b; // Blue
                    imageData.data[index + 3] = 255; // Alpha
                }
            }
        }

        ctx.putImageData(imageData, 0, 0);
    };

    // Handle color selection on click
    const handleClick = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Get color from clicked pixel
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        if (pixel[3] !== 0) {
            setSelectedColor(`rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            drawPentagon(canvas, hue);
        }
    }, [hue]);

    return (
        <div className="text-center m-5">
            <canvas
                ref={canvasRef}
                width={500}
                height={500}
                className="border cursor-pointer"
                onClick={handleClick}
            />
            {selectedColor && (
                <div className="mt-5 text-lg">
                    Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span>
                </div>
            )}
            <div className="mt-5">
                <label>
                    {/* Hue: */}
                    <input
                        type="range"
                        min="0"
                        max="360"
                        value={hue}
                        onChange={(e) => setHue(Number(e.target.value))}
                    />
                </label>
            </div>
        </div>
    );
};

export default PentagonColorPicker;
