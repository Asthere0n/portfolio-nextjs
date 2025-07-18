import React from 'react'
import mapData from './MapData.json'

const CELL_SIZE = 20

function getStyle(content: number) {
    switch (content) {
        case 0: return { fill: "#0f172a", fontWeight: "normal" }
        case 1: return { fill: "#334155", fontWeight: "bold" }
        case 2: return { fill: "#facc15", fontWeight: "bold" }
        default: return { fill: "#000", fontWeight: "normal" }
    }
}

export default function WorldMap() {
    return (
        <div className="w-screen overflow-hidden flex justify-center items-center z-[-1] absolute">
            <svg
                width={mapData[0].length * CELL_SIZE}
                height={mapData.length * CELL_SIZE}
                className="flex justify-around items-center w-full"
            >
                {mapData.map((row, rowIndex) => {
                    if (row.length !== 124) {
                        console.log(`Row ${rowIndex + 1}: ${row.length} elements`)
                    }
                    return row.map((cell, cellIndex) => {
                        const style = getStyle(cell)
                        const randomContent = Math.random()
                        return (
                            <text
                                key={`${rowIndex}-${cellIndex}`}
                                x={cellIndex * CELL_SIZE + CELL_SIZE / 2}
                                y={rowIndex * CELL_SIZE + CELL_SIZE / 2}
                                fontSize="18"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fill={style.fill}
                                fontWeight={style.fontWeight}
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