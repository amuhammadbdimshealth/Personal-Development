import Chart from 'chart.js/auto';
import { getDimensions } from './api';

(async function () {
    const data = await getDimensions();

    const chartAreaBorder = {
        id: 'chartAreaBorder',

        beforeDraw(chart, args, options) {
            const { ctx, chartArea: { left, top, width, height } } = chart;

            ctx.save();
            ctx.strokeStyle = options.borderColor;
            ctx.lineWidth = options.borderWidth;
            ctx.setLineDash(options.borderDash || []);
            ctx.lineDashOffset = options.borderDashOffset;
            ctx.strokeRect(left, top, width, height);
            ctx.restore();
        }
    };

    new Chart(
        document.getElementById('dimensions'),
        {
            type: 'bubble',
            plugins: [chartAreaBorder],
            options: {
                aspectRatio: 1,
                scales: {
                    x: {
                        max: 500,
                        ticks: {
                            callback: value => `${value / 100} m`
                        }
                    },
                    y: {
                        max: 500,
                        ticks: {
                            callback: value => `${value / 100} m`
                        }
                    }
                },
                plugins: {
                    chartAreaBorder: {
                        borderColor: 'red',
                        borderWidth: 2,
                        borderDash: [5, 5],
                        borderDashOffset: 2,
                    }
                },
            },
            data: {
                labels: data.map(x => x.year),

                /* Single dataset: */
                // datasets: [
                //     {
                //         label: 'Dimensions',
                //         data: data.map(row => ({
                //             x: row.width,
                //             y: row.height,
                //             r: row.count
                //         }))
                //     }
                // ]

                /* Multiple datasets */
                datasets: [
                    {
                        label: 'width = height',
                        //   backgroundColor: 'red',
                        data: data
                            .filter(row => row.width === row.height)
                            .map(row => ({
                                x: row.width,
                                y: row.height,
                                r: row.count
                            }))
                    },
                    {
                        label: 'width > height',
                        //   backgroundColor: 'blue',
                        data: data
                            .filter(row => row.width > row.height)
                            .map(row => ({
                                x: row.width,
                                y: row.height,
                                r: row.count
                            }))
                    },
                    {
                        label: 'width < height',
                        //   backgroundColor: 'orange',
                        data: data
                            .filter(row => row.width < row.height)
                            .map(row => ({
                                x: row.width,
                                y: row.height,
                                r: row.count
                            }))
                    }
                ]
            }
        }
    );
})();
