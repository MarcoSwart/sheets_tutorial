import { useEffect, useState } from "react";
import { createFolder } from "../services/google";
import Select from "./select";
import { getSheets, addSpreadSheetData } from "../services/google";

function AddDataToSheet({ style }) {
    const [name, setName] = useState("");
    const [sheets, setSheets] = useState([]);
    const [sheetId, setSheetId] = useState("");
    const [purchased, setPurchased] = useState("");

    useEffect(async () => {
        let sheets = await getSheets();
        setSheets(sheets);
    }, []);

    function onClick() {
        addSpreadSheetData(sheetId, name, purchased);
        setSheetId("");
        setName("");
        setPurchased("");
    }

    return (
        <div style={{ ...style, backgroundColor: "lightgrey", padding: "10px" }}>
            <h5>Add Data</h5>

            <Select
                label={"Spreadsheet"}
                data={sheets}
                value={sheetId}
                onChange={(e) => setSheetId(e.target.value)}
            />

            <label className="form-label mt-3">
                Product Name:
                    </label>
            <input
                type="text"
                placeholder="Enter your product name"
                className="form-control"
                value={name || ""}
                onChange={(e) => setName(e.target.value)} />
            <label className="form-label mt-3">
                Purchased:
            </label>
            <select
                className="form-select"
                value={purchased || ""}
                onChange={(e) => setPurchased(e.target.value)}>
                <option value="">Select</option>
                <option value="true">true</option>
                <option value="false">false</option>
            </select>

            <button
                className="btn btn-secondary  btn-sm mt-3"
                onClick={onClick}>
                Add to spreadsheet
            </button>
        </div>
    );
}

export default AddDataToSheet;