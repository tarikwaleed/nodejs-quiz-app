
const authClient = require('../config/google-auth.config');
const sheetId = process.env.SHEET_ID
const { google } = require('googleapis');
const sheets = google.sheets('v4');
exports.get_all_quizes = (req, res, next) => {
    // res.send(sheetId)
    sheets.spreadsheets.values.get({
        auth: authClient,
        spreadsheetId: sheetId,
        range: 'Sheet1!A1:Z',
    }, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        const data = response.data.values
        const header = data[0];
        const rows = data.slice(1);
        const jsonData = rows.map((row) => {
            return header.reduce((obj, key, index) => {
                obj[key] = row[index];
                return obj;
            }, {});
        });
        const result = {}
        result.length=jsonData.length
        result.data=jsonData

        res.json(result)

    });

}