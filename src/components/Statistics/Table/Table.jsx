import { useSelector } from 'react-redux';
import {
  StyledIcon,
  StyledP,
  StyledSpanExpenses,
  StyledSpanIncome,
  StyledSum,
  StyledTbody,
  StyledText,
  StyledThead,
  StyledTotalWrapper,
  WrapperTable,
} from './Table.styled';
import {
  selectExpenseSummary,
  selectIncomeSummary,
} from 'redux/transaction/transactionSelectors';
import { useCategoriesType } from 'hooks/categoriesFilter';

export const Table = ({ colorStyle, data }) => {
  const [expenseCategories] = useCategoriesType(data);
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
          {expenseCategories.map((el, idx) => (
            <tr key={el.name}>
              <StyledIcon
                style={{ backgroundColor: colorStyle[idx] }}
              ></StyledIcon>
              <StyledText>{el.name}</StyledText>
              <StyledSum>{Number(el.total).toFixed(2) * -1}</StyledSum>
            </tr>
          ))}
        </StyledTbody>
      </WrapperTable>
      <StyledTotalWrapper>
        <StyledP>
          Expenses:
          <StyledSpanExpenses>
            {Number(expenseSummary).toFixed(2) * -1}
          </StyledSpanExpenses>
        </StyledP>
        <StyledP>
          Income:
          <StyledSpanIncome>
            {Number(incomeSummary).toFixed(2)}
          </StyledSpanIncome>
        </StyledP>
      </StyledTotalWrapper>
    </>
  );
};

// number.toFixed(2);
