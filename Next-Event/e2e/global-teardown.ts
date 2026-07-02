import { globalCleanupService } from './support/CleanupService';

export default async function globalTeardown() {
  if (process.exitCode !== 0 && process.exitCode !== undefined) {
    console.log('[Cleanup] A execução terminou com falhas; pulando limpeza de usuários.');
    return;
  }

  console.log('[Cleanup] Execução concluída com sucesso. Removendo usuários registrados...');
  await globalCleanupService.cleanup();
}
