import { describe, it, expect, beforeEach, jest } from '@jest/globals';
import { SetReferenceMonthUseCase } from '../../../../src/application/certificate/use-cases/SetReferenceMonthUseCase';

// Mock do Prisma
const mockFindFirst = jest.fn();

jest.mock('@prisma/client', () => {
    return {
        PrismaClient: jest.fn().mockImplementation(() => {
            return {
                periodoTutoria: {
                    findFirst: mockFindFirst
                }
            };
        })
    };
});

describe('SetReferenceMonthUseCase', () => {
    let useCase: SetReferenceMonthUseCase;

    beforeEach(() => {
        useCase = new SetReferenceMonthUseCase();
        jest.clearAllMocks();
    });

    it('Deve definir mês de referência com sucesso', async () => {
        (mockFindFirst as any).mockResolvedValue({ id: 'periodo-1', ativo: true });
        await useCase.execute({ month: 5, year: 2024 });
        expect(mockFindFirst).toHaveBeenCalled();
    });

    it('Deve validar mês inválido', async () => {
        await expect(useCase.execute({ month: 13, year: 2024 }))
            .rejects.toThrow('Invalid month');
    });
});