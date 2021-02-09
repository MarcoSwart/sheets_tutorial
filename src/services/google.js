export async function getFiles() {
    let res = await window.gapi.client.request({
        path: "https://www.googleapis.com/drive/v3/files?q=mimeType != 'application/vnd.google-apps.folder'"
    });
    return res.result.files;
}

export async function getFolders() {
    let res = await window.gapi.client.request({
        path: "https://www.googleapis.com/drive/v3/files?q=mimeType = 'application/vnd.google-apps.folder'"
    });
    return res.result.files;
}

export async function getSheets() {
    let res = await window.gapi.client.request({
        path: "https://www.googleapis.com/drive/v3/files?q=mimeType = 'application/vnd.google-apps.spreadsheet'"
    });
    return res.result.files;
}

export function createFolder(folderName) {
    window.gapi.client.request({
        path: 'https://www.googleapis.com/drive/v3/files',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: {
            name: `${folderName}`,
            mimeType: "application/vnd.google-apps.folder",
        }
    }).then(function (response) {
        //add toast
    });
}

export function createSpreadSheet(sheetName) {
    window.gapi.client.request({
        path: 'https://sheets.googleapis.com/v4/spreadsheets',
        method: 'POST',
        body: {
            properties: {
                title: `${sheetName}`,
            }
        }
    }).then(function (response) {
        //add toast
    });
}

export function addSpreadSheetData(spreadsheetId, productName, purchase) {
    window.gapi.client.request({
        path: `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Sheet1!A1:B1:append?valueInputOption=USER_ENTERED`,
        method: 'POST',
        body: {
            values: [
                [`${productName}`, purchase],
            ],
        }
    }).then(function (response) {

    });

}