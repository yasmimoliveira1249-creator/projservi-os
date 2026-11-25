function cadastrarCliente(d){if(!d.Nome||!d.Telefone)throw Error('Nome e telefone são obrigatórios.');d['ID Cliente']=gerarId('CLI');d.Status='Ativo';d['Data de cadastro']=new Date();return adicionarRegistro('Clientes',d);}
function listarClientes(){return lerTabela('Clientes').filter(x=>x.Status!=='Inativo');}
function editarCliente(id,d){return atualizarRegistro('Clientes','ID Cliente',id,d);}
function inativarCliente(id){const r=indicePorId('Clientes','ID Cliente',id);if(!r)throw Error('Cliente não encontrado');r.Status='Inativo';atualizarRegistro('Clientes','ID Cliente',id,r);}
