/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable radix */
const StringMasks = {
  documentToPartialView: (cpf) => {
    // Remove qualquer caractere que não seja número
    const cleanedCPF = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cleanedCPF.length !== 11) {
      throw new Error('CPF inválido. Deve conter 11 dígitos.');
    }

    // Retorna o CPF formatado no padrão desejado
    return `${cleanedCPF.substring(0, 3)}.***.***-${cleanedCPF.substring(9, 11)}`;
  },
  capitalizeFirstLetter: (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  },
  currencyBrl: (valor) =>
    parseFloat(valor || '0git s').toLocaleString('pt-br', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }),
    newCurrencyBrl: (valor) => {
  if (valor == null || valor === '') return '0,00';

  let str = String(valor).trim();

  if (/^\d{1,3}(\.\d{3})*,\d{2}$/.test(str)) {
    return str;
  }

  str = str.replace(/[^\d.,-]/g, '');


  if (str.includes(',') && str.includes('.')) {
    str = str.replace(/\./g, '').replace(',', '.');
  } else if (str.includes(',')) {
    str = str.replace(',', '.');
  }

  const num = parseFloat(str);
  if (isNaN(num)) return '0,00';

  return num.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
},

  clearFormater: (valor) => {
    const apenasNumeros = valor.replace(/\D/g, '');
    return apenasNumeros;
  },
  // TODO: Must that be only function to format values

  formataValores: (valor) => {
    if (!valor) return '';

    if (valor == 0) return '0,00';

    valor = valor.toString().replace(/[^\d]/g, '');

    if (valor.length === 3) {
      return valor.replace(/(\d{1})(\d{2})/, '$1,$2');
    }
    if (valor.length === 4) {
      return valor.replace(/(\d{2})(\d{2})/, '$1,$2');
    }
    if (valor.length === 5) {
      return valor.replace(/(\d{3})(\d{2})/, '$1,$2');
    }
    if (valor.length === 6) {
      return valor.replace(/(\d{1})(\d{3})(\d{2})/, '$1.$2,$3');
    }
    if (valor.length === 7) {
      return valor.replace(/(\d{2})(\d{3})(\d{2})/, '$1.$2,$3');
    }
    return valor.replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2,$3');
  },
  formataTaxa: (valor) => {
    if (!valor) return '';
    valor = valor.toString().replace(/[^\d]/g, '');

    if (valor.length > 1) {
      return valor.replace(/(\d{1})(\d{1})/, '$1,$2');
    }
    return valor;
  },

  formataNumeros: (valor) => {
    if (!valor) return '';
    valor = valor.replace(/[^\d]/g, '');

    if (valor.length === 4) {
      return valor.replace(/(\d{1})(\d{2})/, '$1.$2');
    }
    if (valor.length === 5) {
      return valor.replace(/(\d{2})(\d{2})/, '$1.$2');
    }
    if (valor.length === 6) {
      return valor.replace(/(\d{3})(\d{2})/, '$1.$2');
    }
    if (valor.length === 7) {
      return valor.replace(/(\d{1})(\d{3})(\d{3})/, '$1.$2.$3');
    }
    if (valor.length === 8) {
      return valor.replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2.$3');
    }
    return valor.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
  },

  onlyNumbers: (number) => {
    return number.match(/^[0-9]+$/);
  },
  coefficient: (value) => {
    if (!value) return '';
    // return value.replace(/^\d+(\.\d{1,15})?$/, '');
    // Remove any character that is not a digit or a dot
    let newValue = value.replace(/[^\d.]/g, '');

    if (newValue.length === 2 && !value.includes('.')) {
      newValue = `${newValue.substring(0, 1)}.${newValue.substring(1, 2)}`;
    }

    // Ensure only one dot is present
    const dotIndex = newValue.indexOf('.');
    if (dotIndex !== -1) {
      newValue =
        newValue.substring(0, dotIndex + 1) + newValue.substring(dotIndex + 1).replace(/\./g, '');
    }

    // Limit to six decimal places
    const [integerPart, decimalPart] = newValue.split('.');
    if (decimalPart && decimalPart.length > 15) {
      newValue = `${integerPart}.${decimalPart.substring(0, 15)}`;
    }

    return newValue;
  },

  formataCPF: (cpf) => {
    if (!cpf) return '';
    cpf = cpf.replace(/[^\d]/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  },
  formataCNPJ: (cnpj) => {
    if (!cnpj) return '';
    // cnpj = cnpj.replace(/[^\d]/g, '');
    return cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  },
  formatPhone: (value) => {
    if (!value) return '';
    const regex = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;
    const str = value.replace(/[^0-9]/g, '').slice(0, 11);

    return str.replace(regex, '($1)$2-$3');
  },
  incrementBarInDate: (dateString) => {
    if (!dateString) return '';
    return dateString.replace(/-/g, '/');
  },
  formataComissao: (valor) => {
    if (!valor) return '';
    valor = valor.replace(/[^\d]/g, '');
    return valor.replace(/^(\d)/, '$1,');
  },
  formatCep: (value) => {
    if (!value) return '';
    let newValue = value.toString();
    newValue = newValue?.replace(/\D/g, '');
    newValue = newValue?.replace(/(\d{5})(\d)/, '$1-$2');
    return newValue;
  },

  transformSpaceInBar: (value) => {
  if (!value) return '';

  return value
    .replace(/\s+/g, '-') 
    .toUpperCase();       
  },
  transformSpaceInUnderline: (value) => {
  if (!value) return '';

  return value
    .replace(/\s+/g, '_') 
    .toUpperCase();       
  },

  currentDate: () => {
    const currentDate = new Date();
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };
    return currentDate.toLocaleDateString('pt-BR', options);
  },
  formatData: (value) => {
    if (!value) return '';

    const separador = value?.includes('-') ? value?.split('-') : value.split('/');
    const ano = separador[0];
    const mes = separador[1];
    const dia = separador[2];
    const newPositionData = [];
    newPositionData[0] = dia;
    newPositionData[1] = mes;
    newPositionData[2] = ano;

    return newPositionData.join('/');
  },
  formatDataUS: (value) => {
    if (!value) return '';

    const separador = value.includes('-') ? value.split('-') : value.split('/');
    const ano = separador[0];
    const mes = separador[1];
    const dia = separador[2];
    const newPositionData = [];
    newPositionData[0] = mes;
    newPositionData[1] = dia;
    newPositionData[2] = ano;

    return newPositionData.join('/');
  },
  formatDataBR: (value_) => {
    if (!value_) return '';

    const value = value_.toString().includes('T') ? value_.split('T')[0] : value_;

    const separador = value.includes('-') ? value.split('-') : value.split('/');
    // const ano = separador[0];
    // const mes = separador[1];
    // const dia = separador[2];
    // const newPositionData = [];
    // newPositionData[0] = dia;
    // newPositionData[1] = mes;
    // newPositionData[2] = ano;

    return separador.join('/');
  },
  exibeDataBR: (value) => {
    if (!value) return '';

    // eslint-disable-next-line no-nested-ternary
    const separador = value.includes('-')
      ? value.split('-')
      : value.includes('/')
      ? value.split('/')
      : null;

    if (!separador) {
      return value;
    }

    const ano = separador[0];
    const mes = separador[1];
    const dia = separador[2];
    const newPositionData = [];
    newPositionData[0] = dia;
    newPositionData[1] = mes;
    newPositionData[2] = ano;

    return newPositionData.join('/');
  },

  cpfIsValid: (strCPF) => {
    if (typeof strCPF !== 'string') return null;
    strCPF = strCPF?.replace(/[^\d]/g, '');
    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF === '00000000000') return false;

    for (let i = 1; i <= 9; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if (Resto === 10 || Resto === 11) Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11))) return false;
    return true;
  },
  cnpjIsValid: (cnpj) => {
    cnpj = cnpj?.replace(/[^\d]/g, ''); // Remove caracteres não numéricos

    if (!cnpj || cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) {
      return false; // CNPJ inválido se estiver vazio, não tiver 14 dígitos ou todos os números forem iguais
    }

    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    const digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(0))) {
      return false;
    }

    tamanho += 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado !== parseInt(digitos.charAt(1))) {
      return false;
    }

    return true;
  },
  emailIsValid: (email) => {
    if (!email) return false; // Verifica se o e-mail está vazio

    // Regex para validar o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email); // Retorna true se o formato for válido, senão false
  },
  chaveAleatoriaPixIsValid: (key) => {
    if (!key) return false; // Verifica se a chave está vazia

    // Regex para validar o formato da chave Pix aleatória
    const pixRandomKeyRegex = /^[a-zA-Z0-9\-_]{32,36}$/;

    return pixRandomKeyRegex.test(key); // Retorna true se a chave for válida, senão false
  },
  // phoneIsValid: (phone) => {
  //   const expressao =
  //     "^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$";
  //     // "^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$"
  //   const regex = new RegExp(expressao);
  //   return regex.test("44998790120");
  // },

  phoneIsValid(phone) {
    if (!phone) return '';
    const value = phone
      .replaceAll('-', '')
      .replaceAll('(', '')
      .replaceAll(')', '')
      .replaceAll(' ', '');
    const mob = /^[1-9]{1}[0-9]{10}$/;
    return mob.test(value) !== false;
  },
  floatToBRLCurrency(value, showCurrency) {
    if (!value) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  },
};

export default StringMasks;
