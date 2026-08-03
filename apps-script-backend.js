/*
  Backup copy of the Google Apps Script backend for the contact form.
  This file does NOT run from here — it's a reference copy only.
  The live version lives in Google Apps Script, attached to the
  "Tamaki Portfolio Contacts" Google Sheet (Extensions → Apps Script).

  Deployed Web App URL:
  https://script.google.com/macros/s/AKfycbzo-V1YzIoEfORQQ7k-EsYFzcI_E8DlCtANXnDE6N9DU8idzhs4Z7FriWFvZsn3hJfDuQ/exec

  To update the live version: edit the code in the Apps Script editor,
  then Deploy → Manage deployments → edit the existing deployment →
  Version: "New version" → Deploy.
*/

function sanitize(value) {
  if (typeof value !== 'string') return value;
  return /^[=+\-@\t\r]/.test(value) ? "'" + value : value;
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date(),
    sanitize(e.parameter.name),
    sanitize(e.parameter.email),
    sanitize(e.parameter.message)
  ]);
  return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}