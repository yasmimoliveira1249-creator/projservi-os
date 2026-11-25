function prepararAbas() {
  const ss=SpreadsheetApp.getActive(), schemas=schemasAbas();
  Object.keys(schemas).forEach(nome=>{
    let sh=ss.getSheetByName(nome); if(!sh) sh=ss.insertSheet(nome);
    const h=schemas[nome]; if(sh.getLastRow()===0) sh.getRange(1,1,1,h.length).setValues([h]); sh.setFrozenRows(1);
  });
}
function schemasAbas(){return {
'Configurações':['Chave','Valor','Descrição'],
'Clientes':['ID Cliente','Nome','CPF','Telefone','E-mail','Data de nascimento','Observações','Status','Data de cadastro'],
'Funcionários':['ID Funcionário','Nome','Telefone','E-mail','Especialidade','Data de admissão','Status','Observações'],
'Serviços':['ID Serviço','Nome','Categoria','Descrição','Duração padrão (min)','Preço padrão','Status'],
'Agenda':['ID Agendamento','Data','Hora inicial','Hora final','ID Cliente','ID Funcionário','ID Serviço','Valor','Status','Observações','Data de criação'],
'Disponibilidade':['ID','ID Funcionário (vazio=geral)','Dia da semana','Hora inicial','Hora final','Intervalo inicial','Intervalo final','Status'],
'Bloqueios':['ID Bloqueio','ID Funcionário (vazio=todos)','Data inicial','Data final','Hora inicial','Hora final','Motivo','Status'],
'Status':['Status','Ordem','Ativo']};}
