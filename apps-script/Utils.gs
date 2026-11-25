function obterAba(nome){const sh=SpreadsheetApp.getActive().getSheetByName(nome);if(!sh)throw new Error('Aba não encontrada: '+nome);return sh;}
function gerarId(prefixo){return prefixo+Utilities.getUuid().replace(/-/g,'').slice(0,10).toUpperCase();}
function lerTabela(nome){const sh=obterAba(nome),v=sh.getDataRange().getValues();return v.length<2?[]:v.slice(1).filter(r=>r.some(c=>c!=="")).map(r=>Object.fromEntries(v[0].map((h,i)=>[h,r[i]])));}
function adicionarRegistro(nome,obj){const sh=obterAba(nome),h=sh.getRange(1,1,1,sh.getLastColumn()).getValues()[0];sh.appendRow(h.map(k=>obj[k]??""));return obj;}
function atualizarRegistro(nome,colId,id,obj){const sh=obterAba(nome),v=sh.getDataRange().getValues(),h=v[0],ix=h.indexOf(colId);if(ix<0)throw Error('Coluna identificadora inválida');for(let r=1;r<v.length;r++)if(String(v[r][ix])===String(id)){sh.getRange(r+1,1,1,h.length).setValues([h.map(k=>obj[k]??v[r][h.indexOf(k)])]);return true;}throw Error('Registro não encontrado');}
function indicePorId(nome,colId,id){return lerTabela(nome).find(r=>String(r[colId])===String(id));}
function normalizarData(d){return d instanceof Date?d:new Date(d);}
function horarioMinutos(v){if(v instanceof Date)return v.getHours()*60+v.getMinutes();if(typeof v==="number")return Math.round(v*1440);const p=String(v).split(":");return Number(p[0])*60+Number(p[1]||0);}
function formatarHora(m){return Utilities.formatString("%02d:%02d",Math.floor(m/60),m%60);}
