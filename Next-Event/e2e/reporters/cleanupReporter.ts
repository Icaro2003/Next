import type { FullResult, Reporter } from '@playwright/test/reporter';
import { globalCleanupService } from '../support/CleanupService';

class CleanupReporter implements Reporter {
  async onEnd(result: FullResult) {
    if (result.status !== 'passed') {
      console.log('[Cleanup] A execução terminou com falhas; pulando a remoção dos usuários criados.');
      return;
    }

    console.log('[Cleanup] Execução concluída com sucesso. Removendo usuários registrados...');
    await globalCleanupService.cleanup();
  }
}

export default CleanupReporter;
