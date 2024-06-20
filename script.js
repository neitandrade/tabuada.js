function tabuada() {

    var num = document.getElementById("number").value; // Obtenção do valor do número inserido pelo usuário
    var result = document.getElementById("table"); // Referência ao elemento HTML onde a tabuada será exibida

    result.innerHTML = ""; // Limpa o conteúdo anterior do elemento 'table'


    // Verificação se o campo de entrada está vazio
    if (num === "") {
        alert("Por favor, digite um número!"); // Exibe um alerta para o usuário caso o campo esteja vazio
        return; // Sai da função para evitar a execução do restante do código
    }

    // Inicializa a string HTML da tabela
    var tabela = "<table>";
    // Adiciona a linha de cabeçalho à tabela
    tabela += "<tr><th>Multiplicador</th><th>Resultado</th></tr>";

    // Loop para gerar as linhas da tabuada de 1 a 10
    for (var c = 1; c <= 10; c++) {
        // Adiciona cada linha da tabuada com o número, multiplicador e resultado
        tabela += "<tr><td>" + num + " x " + c + " = " + "</td><td>" + (num * c) + "</td></tr>";
    }

    // Fecha a tag da tabela
    tabela += "</table>";
    // Insere a tabela gerada no elemento 'result' do HTML
    result.innerHTML = tabela;
}