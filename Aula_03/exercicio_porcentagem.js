// Amanda precisa digitar o salário bruto do funcionário
// Amanda precisa digitar o nome do funcionário
// VT - 0.06
// INSS - 0.08
// Salário Líquido

let nomeFuncionario = prompt("Digite o nome do funcionário: ");
let salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário: "));

let taxaValeTransporte = 0.06;
let taxaInssFuncionario = 0.08;

let valeTransporteFuncionario = salarioFuncionario * taxaValeTransporte;
let inssDoFuncionario = salarioFuncionario * taxaInssFuncionario;

let salarioLiquido = salarioFuncionario - valeTransporteFuncionario - inssDoFuncionario;

document.write("O funcionário " + nomeFuncionario + " teve um desconto de VT de R$"
                + valeTransporteFuncionario + " e o desconto de inss foi de R$"
                + inssDoFuncionario + ". O salário líquido é de R$" + salarioLiquido);

