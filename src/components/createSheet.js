import { useState } from "react";
import { createSpreadSheet } from "../services/google";

function CreateSheet({ style }) {
    const [name, setName] = useState("");

    function onClick() {
        createSpreadSheet(name);
        setName("");
    }

    return (
        <div style={{ ...style, backgroundColor: "lightgrey", padding: "10px" }}>
            <h5>Create Spreadsheet</h5>
            <label className="form-label mt-1">
                Name:
            </label>
            <input
                type="text"
                placeholder="Enter spreadsheet name"
                className="form-control"
                value={name || ""}
                onChange={(e) => setName(e.target.value)} />
            <button
                className="btn btn-secondary  btn-sm mt-3"
                onClick={onClick}>
                Create spreadsheet
            </button>
        </div>
    );
}

export default CreateSheet;