// The Google Sheets API packages
import {google} from "googleapis";

const getStudents = async (request, response) => {   

      const client = await google.auth.getClient({
        keyFile: "service-account.json",
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
      const sheets = google.sheets({version: "v4", auth: client});
      const googleSheetsId = process.env.GOOGLE_SHEETS_ID;

      // Check through whole sheet to find if user is already present
      const res = await sheets.spreadsheets.values.get({
        auth: client,
        spreadsheetId: googleSheetsId,
        range: "Sheet1!A2:A",
      });

      const rows = res.data.values;
      const uids = rows?.map((row) => row[0]);
      const index = uids?.indexOf(userId) ?? -1;

      if (index === -1) {
        // User not present, append user data
        await sheets.spreadsheets.values.append({
          auth: client,
          spreadsheetId: googleSheetsId,
          range: "Sheet1!A1",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                userId,
                name,
                phoneNumber,
                email,
                address,
                personalScribble,
                contribution,
                intro,
                referralBy,
                photoUrl,
                change.after.data()?.createdAt.toDate() ?? null,
                change.after.data()?.updatedAt.toDate() ?? null,
              ],
            ],
          },
        });
      } else {
        // User present, update user data
        await sheets.spreadsheets.values.update({
          auth: client,
          spreadsheetId: googleSheetsId,
          range: `Sheet1!A${index + 2}:L${index + 2}`,
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [
              [
                userId,
                name,
                phoneNumber,
                email,
                address,
                personalScribble,
                contribution,
                intro,
                referralBy,
                photoUrl,
                change.after.data()?.createdAt.toDate() ?? null,
                change.after.data()?.updatedAt.toDate() ?? null,
              ],
            ],
          },
        });
      }
    };
