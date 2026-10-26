"use client";

import React from 'react'
import { m, useReducedMotion } from "motion/react";
import mapData from './MapData.json'

const CELL_SIZE = 24

/** Delay between the reveal of each horizontal line, in seconds. */
const ROW_STAGGER = 0.03
/** Delay before the first line appears. */
const ROW_START_DELAY = 0.1

function getStyle(content: number) {
    switch (content) {
        case 0: return { fill: "#1e293b", fontWeight: "normal"}
        case 1: return { fill: "#334155", fontWeight: "bold"}
        case 2: return { fill: "#facc15", fontWeight: "bold" }
        default: return { fill: "#1e293b", fontWeight: "normal"}
    }
}

export default function WorldMap() {
    const prefersReducedMotion = useReducedMotion()

    return (

        <div
            className="absolute flex inset-0 justify-center overflow-hidden w-[100dvw] items-center z-[-1]"
            style={{ width: "100vw", height: "100vh" }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100vw",
                    height: "100vh",
                    overflow: "hidden",
                    position: "relative",
                }}
            >
                <svg
                    width={mapData[0].length * CELL_SIZE}
                    height={mapData.length * CELL_SIZE}
                    style={{
                        display: "block",
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                    className="flex justify-around items-center"
                >
                    {mapData.map((row, rowIndex) => {
                        return (
                            <m.g
                                key={rowIndex}
                                initial={
                                    prefersReducedMotion
                                        ? false
                                        : { opacity: 0 }
                                }
                                animate={
                                    prefersReducedMotion
                                        ? undefined
                                        : { opacity: 1 }
                                }
                                transition={
                                    prefersReducedMotion
                                        ? undefined
                                        : {
                                            duration: 0.5,
                                            ease: "easeOut",
                                            delay: ROW_START_DELAY + rowIndex * ROW_STAGGER,
                                        }
                                }
                            >
                                {row.map((cell, cellIndex) => {
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
                                            {cell}
                                        </text>
                                    )
                                })}
                            </m.g>
                        )
                    })}
                </svg>
            </div>
        </div>
    )
}
