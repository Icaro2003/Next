import { DbHelper } from './database/dbHelper';

/**
 * CleanupService gerencia uma pilha de itens que precisam ser removidos após os testes.
 * Evita que o banco fique sujo em caso de falhas e resolve o problema de múltiplas deleções.
 */
export class CleanupService {
  private emailsToDelete: Set<string> = new Set();

  addEmail(email: string) {
    this.emailsToDelete.add(email);
  }

  async cleanup() {
    const emails = Array.from(this.emailsToDelete);
    if (emails.length === 0) return;

    console.log(`[Cleanup] Iniciando limpeza de ${emails.length} registro(s)...`);

    const results = await Promise.allSettled(
      emails.map((email) => DbHelper.deleteUserByEmail(email))
    );

    const failures = results.filter((result) => result.status === 'rejected');
    if (failures.length > 0) {
      console.warn(`[Cleanup] ${failures.length} remoção(ões) falharam.`);
    }

    this.emailsToDelete.clear();
  }
}

export const globalCleanupService = new CleanupService();
