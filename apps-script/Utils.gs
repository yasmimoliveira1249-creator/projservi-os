function obterAba(nome){const sh=SpreadsheetApp.getActive().getSheetByName(nome);if(!sh)throw new Error('Aba não encontrada: '+nome);return sh;}
function gerarId(prefixo){return prefixo+Utilities.getUuid().replace(/-/g,'').slice(0,10).toUpperCase();}
