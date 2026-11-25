function cadastrarFuncionario(d){if(!d.Nome)throw Error('Nome obrigatório.');d['ID Funcionário']=gerarId('FUN');d.Status='Ativo';return adicionarRegistro('Funcionários',d);}
function listarFuncionarios(){return lerTabela('Funcionários').filter(x=>x.Status!=='Inativo');}
function editarFuncionario(id,d){return atualizarRegistro('Funcionários','ID Funcionário',id,d);}
function inativarFuncionario(id){const r=indicePorId('Funcionários','ID Funcionário',id);if(!r)throw Error('Funcionário não encontrado');r.Status='Inativo';atualizarRegistro('Funcionários','ID Funcionário',id,r);}
