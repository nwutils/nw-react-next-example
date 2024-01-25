import React from "react";

function App() {
    return (
        <div>
            NW.js Next.js Example
            <br />
            <ul>
                <li>NW.js: {nw.require('process').version['nw']}</li>
                <li>Chromium: {nw.require('process').version['chromium']}</li>
                <li>Node.js: {nw.require('process').version['node']}</li>
                <li>V8: {nw.require('process').version['v8']}</li>
            </ul>
        </div>
    );
};

export default App;