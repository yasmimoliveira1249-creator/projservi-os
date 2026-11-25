function instalarSistema() { prepararAbas(); configurarMenu(); SpreadsheetApp.getUi().alert('Estrutura inicial preparada.'); }
function onOpen() { configurarMenu(); }
