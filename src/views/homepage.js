import { useContext, useState } from "react";
import AddDataToSheet from "../components/addDataToSheet";
import CreateFolder from "../components/createFolder";
import CreateSheet from "../components/createSheet";
import { getFiles, getFolders, getSheets, } from "../services/google";
import { ClientContext } from "../providers/client";

function HomePageView() {
    const { signOut } = useContext(ClientContext);
    const [data, setData] = useState([]);

    async function listFiles() {
        let files = await getFiles();
        setData(files);
    }

    async function listFolders() {
        let folders = await getFolders();
        setData(folders);
    }

    async function listSheets() {
        let sheets = await getSheets();
        setData(sheets);
    }

    function buildList(item, i) {
        let name = item.name
        let id = item.id
        return (
            <div key={i}>
                {name + "(" + id + ")" + "\n"}
            </div>
        )
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4">
                    <h4>Google Drive</h4>
                    <div>
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={listFiles}>
                            List Files
                    </button>
                    </div>
                    <div>
                        <button
                            className="btn btn-secondary  btn-sm mt-3 mb-3"
                            onClick={listFolders}>
                            List Folders
                    </button>
                    </div>
                    <CreateFolder />
                    <button
                        className="btn btn-secondary  btn-sm mt-3"
                        onClick={signOut}>
                        Sign Out
                    </button>
                </div>
                <div className="col-md-4">
                    <h4>Google Sheets</h4>
                    <button
                        className="btn btn-secondary  btn-sm mb-3"
                        onClick={listSheets}>
                        List Sheets
                </button>
                    <CreateSheet />
                    <AddDataToSheet style={{ marginTop: "15px" }} />
                </div>
                <div className="col-md-4">
                    <h3>Output</h3>
                    <pre style={{ whiteSpace: "pre-wrap" }}>
                        {
                            data.map((item, i) => buildList(item, i))
                        }
                    </pre>
                </div>
            </div>

        </>
    );
}

export default HomePageView;