function HomePageView() {
    return (
        <>
            <div className="col-sm-6">
                <h4>Google Drive</h4>
                <div>
                    <button
                        className="btn btn-secondary btn-sm">
                        List Files
                    </button>
                </div>
                <div>
                    <button
                        className="btn btn-secondary  btn-sm mt-3 mb-3">
                        List Folders
                    </button>
                </div>
                <div style={{ backgroundColor: "lightgrey", padding: "10px" }}>
                    <h5>Create Folder</h5>
                    <label className="form-label mt-1">
                        Name:
                    </label>
                    <input
                        type="text"
                        placeholder="Enter folder name"
                        className="form-control" />
                    <button
                        className="btn btn-secondary  btn-sm mt-3">
                        Create Folder
                    </button>
                </div>
                <button
                    className="btn btn-secondary  btn-sm mt-3">
                    Sign Out
                    </button>
            </div>
            <div className="col-sm-6">

            </div>
        </>
    );
}

export default HomePageView;