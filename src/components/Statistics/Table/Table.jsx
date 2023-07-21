import { useSelector } from 'react-redux';
import {
  StyledIcon,
  StyledP,
  StyledSpan,
  StyledSpanExpenses,
  StyledSpanIncome,
  StyledSpanTotal,
  StyledSum,
  StyledTbody,
  StyledText,
  StyledThead,
  StyledTotalWrapper,
  WrapperTable,
} from './Table.styled';
import {
  selectExpenseSummary,
  selectFilter,
  selectIncomeSummary,
} from 'redux/transaction/transactionSelectors';
import { useCategoriesType } from 'hook/categoriesFilter';

// const data = [
//   {
//     name: 'Car',
//     total: 1500,
//   },
//   {
//     name: 'Product',
//     total: 3700,
//   },
//   {
//     name: 'Dog',
//     total: 700,
//   },
// ];

export const Table = ({ colorStyle, user, data }) => {
  const incomeSummary = useSelector(selectIncomeSummary);
  const expenseSummary = useSelector(selectExpenseSummary);
  // const setFilter = useSelector(selectFilter);

  const [expenseCategories] = useCategoriesType(data);
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
          {expenseCategories.map((el, idx) => (
            <tr key={el.name}>
              <StyledIcon
                style={{ backgroundColor: colorStyle[idx] }}
              ></StyledIcon>
              <StyledText>{el.name}</StyledText>
              <StyledSum>{el.total}</StyledSum>
            </tr>
          ))}
        </StyledTbody>
      </WrapperTable>
      <StyledTotalWrapper>
        <StyledP>
          Expenses:<StyledSpanExpenses>{expenseSummary}</StyledSpanExpenses>
        </StyledP>
        <StyledP>
          Income:<StyledSpanIncome>{incomeSummary}</StyledSpanIncome>
        </StyledP>
      </StyledTotalWrapper>
    </>
  );
};
