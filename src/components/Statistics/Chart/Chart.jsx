import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ChartWrapper, StyledSpan } from './Chart.styled';
import { getRandomHexColor } from 'services/randomColor/randomColor';

export const Chart = () => {
  // const randomColor = getRandomHexColor();
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: getRandomHexColor(),

        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '75%',
  };

  return (
    <ChartWrapper>
      <StyledSpan>24000</StyledSpan>
      <Doughnut data={data} options={options} />
    </ChartWrapper>
  );
};
