import XLSX from 'xlsx';
const workbook = XLSX.readFile('telephoneData.xls', opts);
const sheetNames = workbook.SheetNames;
const worksheet = workbook.Sheets[sheetNames[0]];
