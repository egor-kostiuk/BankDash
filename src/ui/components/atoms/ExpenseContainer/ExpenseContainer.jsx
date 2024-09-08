import test from '/src/assets/img/test.svg';

import './ExpenseContainer.css';

const bankData = [ // TODO: colors.css
  { name: 'DBL Bank', color: '#4C78FF' },
  { name: 'ABM Bank', color: '#16DBCC' },
  { name: 'BRC Bank', color: '#FF82AC' },
  { name: 'MCP Bank', color: '#FFBB38' },
];

export const ExpenseContainer = () => {
  return (
    <div className={'expense-container container'}> {/* TODO: Delete img */}
      <img src={test} alt={'test'} style={{ width: '188px' }}/>
      <div className={'expense-container-banks'}>
        {bankData.map((bank, index) => (
          <span key={index}>
            <div className={'bank-circle'} style={{ backgroundColor: bank.color }}></div>
            {bank.name}
          </span>
        ))}
      </div>
    </div>
  )
}