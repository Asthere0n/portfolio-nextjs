import React from 'react'
import mapData from './MapData.json'

const CELL_SIZE = 24

function getStyle(content: number) {
    switch (content) {
        case 0: return { fill: "#1e293b", fontWeight: "normal"}
        case 1: return { fill: "#334155", fontWeight: "bold"}
        case 2: return { fill: "#facc15", fontWeight: "bold" }
        default: return { fill: "#1e293b", fontWeight: "normal"}
    }
}

export default function WorldMap() {
    return (
        <div
            className="absolute inset-0 flex justify-center items-center overflow-hidden z-[-1]"
            style={{ width: "100vw", height: "100vh" }}
        >
            <svg
            width={mapData[0].length * CELL_SIZE}
            height={mapData.length * CELL_SIZE}
            className="flex justify-around items-center"
            >
            {mapData.map((row, rowIndex) => {
                if (row.length !== 124) {
                console.log(`Row ${rowIndex + 1}: ${row.length} elements`)
                }
                return row.map((cell, cellIndex) => {
                const randomContent = Math.random()
                const styles = getStyle(cell)
                return (
                    <text
                    key={`${rowIndex}-${cellIndex}`}
                    x={cellIndex * CELL_SIZE + CELL_SIZE / 2}
                    y={rowIndex * CELL_SIZE + CELL_SIZE / 2}
                    fontSize="18"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={styles.fill}
                    fontWeight={styles.fontWeight}
                    >
                    {Math.round(randomContent)}
                    </text>
                )
                })
            })}
            </svg>
        </div>
    )
}