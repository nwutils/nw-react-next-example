import React from "react";

function useNW () {
    const [nw, setNW] = React.useState(null);

    React.useEffect(() => {
        if (window.require) {
            setNW(window.nw);
        }
    }, []);

    return nw;
}

function App() {

    const nw = useNW();

    return (
        <div>
            NW.js Next.js Example
            <br />
            <ul>
                <li>NW.js: {nw?.require('process')?.version['nw']}</li>
                <li>Chromium: {nw?.require('process')?.version['chromium']}</li>
                <li>Node.js: {nw?.require('process')?.version['node']}</li>
                <li>V8: {nw?.require('process')?.version['v8']}</li>
            </ul>
        </div>
    );
};

export default App;