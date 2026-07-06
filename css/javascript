function calcularAgua() {
    const areaInput = document.getElementById('area');
    const resultadoDiv = document.getElementById('resultado');
    const area = areaInput.value;

    // Limpa as classes anteriores para não acumular erro/sucesso antigos
    resultadoDiv.className = "";

    // Valida se o usuário digitou um número válido
    if (area === '' || area <= 0) {
        resultadoDiv.classList.add('erro');
        resultadoDiv.innerHTML = '<strong>⚠️ Por favor, insira um tamanho de área válido (maior que 0)!</strong>';
        return;
    }

    // Cálculo: economia média de 12 litros de água por m²
    const aguaEconomizada = area * 12;

    // Aplica a classe de sucesso e exibe o resultado estruturado
    resultadoDiv.classList.add('sucesso');
    resultadoDiv.innerHTML = `
        <h3>🎉 Simulação Concluída!</h3>
        <p>Automatizando a irrigação em uma área de <strong>${area} m²</strong>, estima-se uma economia de até <strong>${aguaEconomizada} litros</strong> de água por ciclo de rega em relação aos sistemas tradicionais.</p>
    `;
}