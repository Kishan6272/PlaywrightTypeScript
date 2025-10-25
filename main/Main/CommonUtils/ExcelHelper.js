// dataUtils.js


import * as fs from 'fs';
import path from 'path';
import XLSX from 'xlsx';

const excelFolderPath = 'test-data' + path.sep;


export function readDataFromExcelFile(fileName) {
  const fullPath = "D:\\PlaywrightTypeScript\\tests\\test-data\\" + fileName;

  //const fullPath = path.join(__dirname, 'test-data', fileName);
  console.log(`READING XLSX FILE ${fullPath}`)
  if (!fs.existsSync(fullPath)) {
    throw new Error(`CANNOT FIND FILE ${fullPath}. PLEASE MAKE SURE IT EXISTS!`);
  }
  const workbook = XLSX.readFile(fullPath);
  const dataFromFirstSheet = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]], {raw: true});
  return dataFromFirstSheet;

 

// if (!fs.existsSync(fullPath)) {
//         throw new Error(`CANNOT FIND FILE at ${fullPath}. Make sure it exists!`);
//     }

//     try {
//         const workbook = XLSX.readFile(fullPath);
//         const firstSheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[firstSheetName];

//         // --- Key Configuration for Reading ALL Rows ---
//         const data = XLSX.utils.sheet_to_json(worksheet, {
//             // raw: true preserves the data format (e.g., dates as numbers)
//             raw: true,
//             // defval: null ensures empty cells are represented as 'null' 
//             // instead of being skipped, forcing the row to be read.
//             defval: null, 
//             // header: 1 means use the content of the first row (A1, B1, C1, ...) as headers
//             header: 1
//         });
        
//         // If your Excel file has a header row (A1, B1, C1, etc.), 
//         // the result will include it as the first item in the array.
//         // You might need to remove the header row:
//         const headers = data[0];
//         const actualDataRows = data.slice(1);

//         // Map the data rows to objects using the extracted headers
//         const finalData = actualDataRows.map(row => {
//             const rowObject = {};
//             headers.forEach((header, index) => {
//                 // Use the header (column name) as the key
//                 rowObject[header] = row[index];
//             });
//             return rowObject;
//         });

//         return finalData;

//     } catch (error) {
//         console.error(`Error reading Excel file ${fullPath}:`, error.message);
//         throw new Error(`Failed to process Excel file: ${error.message}`);
//     }



 
}


module.exports = {
  readDataFromExcelFile
};  

