import { CreateUsuarioDTO } from '../dtos/CreateUserDTO';

export class CreateUserValidator {
    static validate(data: CreateUsuarioDTO): string | null {
        if (!data.nome || data.nome.trim() === '') {
            return 'Preencha o campo nome';
        } else if (data.nome.trim().length < 3) {
            return 'O nome deve conter pelo menos 3 caracteres.';
        } else if (data.nome.trim().length > 100) {
            return 'O nome não pode exceder 100 caracteres.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!data.email || data.email.trim() === '') {
            return 'Preencha o campo e-mail'
        } else if (!emailRegex.test(data.email)) {
            return 'E-mail inválido'
        }

        if (!data.senha || data.senha.trim() === '') {
            return 'Preencha o campo senha'
        } else if (data.senha.length < 6) {
            return 'A senha deve conter pelo menos 6 caracteres'
        }

        const cpfRegex = /^[0-9]{11}$/;

        if (!data.cpf || data.cpf.trim() === '') {
            return 'Preencha o campo cpf';
        } else if (!cpfRegex.test(data.cpf)) {
            return 'O cpf deve conter 11 dígitos';
        }

        const anoIngressoRegex = /^[0-9]{4}$/;

        if (!data.bolsista?.anoIngresso || data.bolsista.anoIngresso > new Date().getFullYear()) {
            return 'Preencha o campo ano de ingresso';
        } else if (!anoIngressoRegex.test(data.bolsista.anoIngresso.toString())) {
            return 'O ano de ingresso deve conter 4 dígitos';
        }

        const cursoRegex = /^[A-Za-zÀ-ÿ\s]+$/;
        if (!data.bolsista?.curso || data.bolsista.curso.trim() === '') {
            return 'Preencha o campo curso';
        } else if (!cursoRegex.test(data.bolsista.curso.trim())) {
            return 'O curso deve conter apenas letras';
        } else if (data.bolsista.curso.trim().length < 10) {
            return 'O curso deve conter pelo menos 10 caracteres';
        }

        return null;
    }
}