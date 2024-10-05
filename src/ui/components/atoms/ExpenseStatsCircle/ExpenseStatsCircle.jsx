import { useCalcSize } from '/src/hooks/useCalcSize.js';
import { BanksUsingStatsList } from '/src/helpers/banksUsingStatsList.js';

import './ExpenseStatsCircle.css';

export const ExpenseStatsCircle = () => {
  const { bank } = BanksUsingStatsList();

  const DBLSize = useCalcSize(bank.DBL);
  const ABMSize = useCalcSize(bank.ABM);
  const MCPSize = useCalcSize(bank.MCP);
  const BRCSize = useCalcSize(bank.BRC);

  return (
    <div className={'expense-stats-circle'}>
      <div
        className={`section section-1 ${bank.DBL === 0 ? 'gray' : ''}`}
        style={DBLSize}
      >
      </div>
      <div
        className={`section section-2 ${bank.ABM === 0 ? 'gray' : ''}`}
        style={ABMSize}
      >
      </div>
      <div className='center'></div>
      <div
        className={`section section-3 ${bank.MCP === 0 ? 'gray' : ''}`}
        style={MCPSize}
      >
      </div>
      <div
        className={`section section-4 ${bank.BRC === 0 ? 'gray' : ''}`}
        style={BRCSize}
      >
      </div>
    </div>
  )
}