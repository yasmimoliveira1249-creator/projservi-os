function cadastrarServico(d){if(!d.Nome||!Number(d['Duração padrão (min)']))throw Error('Nome e duração são obrigatórios.');d['ID Serviço']=gerarId('SER');d.Status='Ativo';return adicionarRegistro('Serviços',d);}
function listarServicos(){return lerTabela('Serviços').filter(x=>x.Status!=='Inativo');}
function editarServico(id,d){return atualizarRegistro('Serviços','ID Serviço',id,d);}
function inativarServico(id){const r=indicePorId('Serviços','ID Serviço',id);if(!r)throw Error('Serviço não encontrado');r.Status='Inativo';atualizarRegistro('Serviços','ID Serviço',id,r);}
