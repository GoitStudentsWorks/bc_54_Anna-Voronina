import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, HrvnIcon, StyledSpan } from './Chart.styled';
import { LiaHryvniaSolid } from 'react-icons/lia';
import { useCategoriesType } from 'hook/categoriesFilter';

export const Chart = ({ colorStyle, user, resp }) => {
  const [expenseCategories] = useCategoriesType(resp);

  console.log(resp);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [],
    datasets: [
      {
        // data: resp.length === 0 ? [100] : resp,
        data: expenseCategories.map(item => item.total),
        backgroundColor: colorStyle,
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: '75%',
  };

  return (
    <ChartWrapper>
      <StyledSpan>
        <HrvnIcon />
        24000
      </StyledSpan>
      <Doughnut data={data} options={options} />
    </ChartWrapper>
  );
};
