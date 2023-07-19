import { useSelector } from 'react-redux';
import {
  StyledSpan,
  StyledTbody,
  StyledThead,
  WrapperTable,
} from './Table.styled';
import {
  selectExpenseSummary,
  selectIncomeSummary,
} from 'redux/transaction/transactionSelectors';

export const Table = ({ data, randomColors }) => {
  const incomeSummary = useSelector(selectIncomeSummary);
  const expenseSummary = useSelector(selectExpenseSummary);

  return (
    <>
      <WrapperTable>
        <StyledThead>
          <tr>
            <th>Category</th>
            <th>Sum</th>
          </tr>
        </StyledThead>
        <StyledTbody>
          {data.map(el => {
            <tr key={el.id}>
              <StyledSpan></StyledSpan>
              <td>{el.name}</td>
              <td>{el.total}</td>
            </tr>;
          })}
          <tr>
            <StyledSpan style={{ backgroundColor: randomColors }}></StyledSpan>
            <td>Car</td>
            <td>3500</td>
          </tr>

          {/* <tr>
            <StyledSpan></StyledSpan>
            <td>Car</td>
            <td>3500</td>
          </tr>
          <tr>
            <StyledSpan></StyledSpan>
            <td>Car</td>
            <td>3500</td>
          </tr> */}
        </StyledTbody>
      </WrapperTable>
      <div>
        <p>Expenses: {expenseSummary}</p>
        <p>Income: {incomeSummary}</p>
      </div>
    </>
  );
};
