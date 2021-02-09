import { useState } from "react";
import { createFolder } from "../services/google";

function CreateFolder({ style }) {
    const [name, setName] = useState("");

    function onClick() {
        createFolder(name);
        setName("");
    }

    return (
        <div style={{ ...style, backgroundColor: "lightgrey", padding: "10px" }}>
            <h5>Create Folder</h5>
            <label className="form-label mt-1">
                Name:
            </label>
            <input
                type="text"
                placeholder="Enter folder name"
                className="form-control"
                value={name || ""}
                onChange={(e) => setName(e.target.value)} />
            <button
                className="btn btn-secondary  btn-sm mt-3"
                onClick={onClick}>
                Create Folder
            </button>
        </div>
    );
}

export default CreateFolder;