import "@google/model-viewer";
import React, { useState } from "react";

const Models = [
    "https://modelviewer.dev/shared-assets/models/Astronaut.glb",
    "https://modelviewer.dev/shared-assets/models/shishkebab.glb",
    "https://modelviewer.dev/shared-assets/models/RobotExpressive.glb",
];

const App = () => {
    const [currentModelIndex, setCurrentModel] = useState(0);

    return (
        <>
            <h2
                style={{
                    textAlign: "center",
                }}
            >
                A Model
            </h2>
            <button
                onClick={() => {
                    if (currentModelIndex + 1 > Models.length - 1) {
                        setCurrentModel(0);
                    } else {
                        setCurrentModel((prev) => prev + 1);
                    }
                }}
            >
                Next
            </button>
            <model-viewer
                src={Models[currentModelIndex]}
                alt="A 3D model of an astronaut"
                ar
                ar-modes="webxr scene-viewer quick-look"
                environment-image="neutral"
                camera-controls
                class="model-view"
                autoplay
            />
        </>
    );
};

export default App;