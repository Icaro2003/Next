export function formatCPF(val) {
    if (!val) {
        return '';
    }

    let cpf = val.replace(/\D/g, '').slice(0, 11);

    cpf = cpf
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');

    return cpf;
}