
const authClient = require('../config/google-auth.config');
const sheetId = process.env.SHEET_ID
const { google } = require('googleapis');
const sheets = google.sheets('v4');
const range = 'Sheet2!A1:Z'
exports.register = async (req, res, next) => {
    const { username, email, age, phone } = req.body;
    const values = [[username, email, age, phone]];
    const resource = { values };
    // try {
    //     const response = await sheets.spreadsheets.values.update({
    //         auth:authClient,
    //         spreadsheetId: sheetId,
    //         range,
    //         valueInputOption: 'RAW',
    //         resource,
    //     });
    //     console.log(`${response.data.updatedCells} cells updated.`);
    //     res.json(`${response.data.updatedCells} cells updated.`);
    // } catch (err) {
    //     console.error(err);
    //     res.json(err);

    // }

    sheets.spreadsheets.values.append({
        auth: authClient,
        spreadsheetId: sheetId,
        range: range,
        valueInputOption: 'RAW',
        resource,
        insertDataOption: 'INSERT_ROWS',
    }, (err, response) => {
        if (err) {
            console.error(err);
            return;
        }
        res.json(`${response.data.updates.updatedCells} cells updated`)
        // res.json(response.data )

    });


}