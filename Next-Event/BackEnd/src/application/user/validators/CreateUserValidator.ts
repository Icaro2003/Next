import { CreateUsuarioDTO } from '../dtos/CreateUserDTO';

export class CreateUserValidator {
    static validate(data: CreateUsuarioDTO) {
        const errors: string[] = [];

        if (!data.nome || data.nome.trim() === '') {
            errors.push('Preencha o campo nome');
        } else if (data.nome.trim().length < 3) {
            errors.push('O nome deve conter pelo menos 3 caracteres.');
        } else if (data.nome.trim().length > 100) {
            errors.push('O nome não pode exceder 100 caracteres.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email || data.email.trim() === '') {
            errors.push('Preencha o campo e-mail')
        } else if (!emailRegex.test(data.email)) {
            errors.push('E-mail inválido')
        }

        if (!data.senha || data.senha.trim() === '') {
            errors.push('Preencha o campo senha')
        } else if (data.senha.length < 6) {
            errors.push('A senha deve conter pelo menos 6 caracteres')
        }

        const cpfRegex = /^[0-9]{11}$/;

        if (!data.cpf || data.cpf.trim() === '') {
            errors.push('Preencha o campo cpf');
        } else if (!cpfRegex.test(data.cpf)) {
            errors.push('O cpf deve conter 11 dígitos');
        }

        const anoIngressoRegex = /^[0-9]{4}$/;

        if (!data.bolsista?.anoIngresso || data.bolsista.anoIngresso > new Date().getFullYear()) {
            errors.push('Preencha o campo ano de ingresso');
        } else if (!anoIngressoRegex.test(data.bolsista.anoIngresso.toString())) {
            errors.push('O ano de ingresso deve conter 4 dígitos');
        }

        const cursoRegex = /^[A-Za-zÀ-ÿ\s]+$/;
        if (!data.bolsista?.curso || data.bolsista.curso.trim() === '') {
            errors.push('Preencha o campo curso');
        } else if (!cursoRegex.test(data.bolsista.curso.trim())) {
            errors.push('O curso deve conter apenas letras');
        } else if (data.bolsista.curso.trim().length < 10) {
            errors.push('O curso deve conter pelo menos 10 caracteres');
        }

        return errors;
    }
}