import Chart from 'chart.js/auto';
import { getAquisitionsByYear } from './api'

(async function () {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    const data2 = await getAquisitionsByYear();

    new Chart(
        document.getElementById('acquisitions'),
        {
            type: 'bar',
            options: {
                animation: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            },
            data: {
                labels: data2.map(row => row.year),
                datasets: [
                    {
                        label: 'Acquisitions by year',
                        data: data2.map(row => row.count)
                    }
                ]
            }
        }
    );
})();


