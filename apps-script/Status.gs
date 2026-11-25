function listarStatus(){return lerTabela('Status').filter(x=>x.Ativo!==false&&String(x.Ativo).toLowerCase()!=='false');}
function configurarStatusPadrao(){const sh=obterAba('Status');if(sh.getLastRow()>1)return;['Agendado','Confirmado','Em atendimento','Concluído','Cancelado','Não compareceu'].forEach((s,i)=>sh.appendRow([s,i+1,true]));}
