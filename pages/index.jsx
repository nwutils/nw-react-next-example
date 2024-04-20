"use client"

import React from "react";

/**
 * React hook to use NW.js object.
 * 
 * @returns {object | undefined} NW.js object
 */
function useNW() {
    if (typeof window !== "undefined" && typeof window.nw !== "undefined") {
        return window.nw;
    } else {
        return undefined;
    }
}

function App() {
    const nw = useNW();
    return (
        <div>
            NW.js Next.js Example
            <br />
            <ul>
                <li>NW.js: {nw && nw.require('process').version['nw']}</li>
                <li>Chromium: {nw && nw.require('process').version['chromium']}</li>
                <li>Node.js: {nw && nw.require('process').version['node']}</li>
                <li>V8: {nw && nw.require('process').version['v8']}</li>
            </ul>
        </div>
    );
};

export default App;