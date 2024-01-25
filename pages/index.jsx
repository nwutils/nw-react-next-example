function useNW () {
    if (typeof nw !== "undefined") {
        return nw;
    } else {
        return null;
    }
}

function App() {

    const nw = useNW();

    return (
        <div>
            NW.js Next.js Example
            <br />
            <ul>
                <li>NW.js: {nw && nw.require('node:process').versions['nw']}</li>
                <li>Chromium: {nw && nw.require('node:process').versions['chromium']}</li>
                <li>Node.js: {nw && nw.require('node:process').versions['node']}</li>
                <li>V8: {nw && nw.require('node:process').versions['v8']}</li>
            </ul>
        </div>
    );
};

export default App;