import {
  StyledTbody,
  StyledThead,
  StyledTr,
  WrapperTable,
} from './Category.styled';

export const Category = () => {
  return (
    <>
      <WrapperTable>
        <StyledThead>
          <th>Category</th>
          <th>Sum</th>
        </StyledThead>
        <StyledTbody>
          <tr>
            <td>color</td>
            <td>Car</td>
            <td>3500</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Products</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Products</td>
            <td>1500</td>
          </tr>
          <tr>
            <td>color</td>
            <td>Products</td>
            <td>1500</td>
          </tr>
        </StyledTbody>
      </WrapperTable>
      <div>
        <p>Expenses:</p>
        <p>Income:</p>
      </div>
    </>
  );
};
