
function Select({ label, data, value, onChange }) {
    function buildOptions(item, i) {
        let value = item.id
        let name = item.name
        return (
            <option key={i} value={value}>{name}</option>
        );
    }
    return (
        <>
            <label className="form-label">{label}</label>
            <select
                id="spreadsheet_select"
                className="form-select"
                value={value || ""}
                onChange={onChange}>
                <option value="">Select a spreadsheet</option>
                {
                    data.map((item, i) => buildOptions(item, i))
                }
            </select>
        </>
    );
}

export default Select;