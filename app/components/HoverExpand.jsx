"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

/**
 * ExpandableGallery - An interactive image gallery with hover expansion
 * Desktop and mobile responsive
 */
const HoverExpand = ({ items, className = "" }) => {
    const [hoveredIndex, setHoveredIndex] = useState(0);

    const collapsedWidth = 80;
    const expandedWidth = 400;
    const itemHeight = 500;

    return (
        <>
            {/* Desktop Version - Hidden on mobile */}
            <div className={`hidden md:flex items-center justify-center gap-2 ${className}`}>
                {items.map((item, idx) => {
                    const isExpanded = hoveredIndex === idx;

                    return (
                        <motion.div
                            key={idx}
                            className="relative overflow-hidden rounded-2xl cursor-pointer"
                            style={{
                                height: itemHeight,
                            }}
                            animate={{
                                width: isExpanded ? expandedWidth : collapsedWidth,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onClick={() => setHoveredIndex(idx)}
                        >
                            {/* Background Image */}
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay gradient - only show when expanded */}
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"
                                />
                            )}

                            {/* Content overlay - only show when expanded */}
                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.1 }}
                                    className="absolute bottom-0 left-0 right-0 p-6 text-white"
                                >
                                    <p className="text-sm mb-2" style={{ color: '#F59E0B' }}>{item.date}</p>
                                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'samarkan, serif' }}>{item.title}</h3>
                                    <p className="text-base opacity-90">{item.artist}</p>
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>

            {/* Mobile Version - Vertical scrollable cards */}
            <div className="md:hidden flex flex-col gap-4 w-full px-4">
                {items.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="relative overflow-hidden rounded-2xl cursor-pointer w-full h-80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        {/* Background Image */}
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <p className="text-sm mb-2" style={{ color: '#F59E0B' }}>{item.date}</p>
                            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'samarkan, serif' }}>{item.title}</h3>
                            <p className="text-base opacity-90">{item.artist}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default HoverExpand;