let ts = [];
let da = [];

function addChart() {
    let blabla = localStorage.getItem('productsInCart');
    blac = JSON.parse(blabla);
    keyss = Object.keys(blac);
    for (let i = 0; i < keyss.length; i++) {
        ts.push(blac[keyss[i]].tag);
        da.push(blac[keyss[i]].inCart);
    }
}

function pieChart() {
    addChart();

    document.querySelector("#chartReport").innerHTML = '<canvas id="myChart"></canvas>';

    let oilCanvas = document.getElementById("myChart");

    let oilData = {
        labels: ts,
        datasets: [
            {
                data: da,
                backgroundColor: [
                    "#FF6384",
                    "#63FF84",
                    "#84FF63",
                    "#8463FF",
                    "#6384FF"
                ]

            }]
    };

    let pieChart = new Chart(oilCanvas, {
        type: 'pie',
        data: oilData
    });
    ts.length = 0;
    da.length = 0;
}


function barChart() {
    document.querySelector("#chartReport").innerHTML = '<canvas id="myChart"></canvas>';
    let popCanvas = document.getElementById("myChart");
    addChart();
    let barChart = new Chart(popCanvas, {
        type: 'bar',
        data: {
            labels: ts,
            datasets: [{
                label: 'Count',
                data: da,
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 206, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)'
                ]
            }]
        }
    });
    ts.length = 0;
    da.length = 0;
}

function GraphChart() {
    document.querySelector("#chartReport").innerHTML = '<canvas id="myChart"></canvas>';
    var densityCanvas = document.getElementById("myChart");
    addChart();

   let densityData = {

        label: 'Count',
        data: da,
        backgroundColor: [
            'rgba(0, 99, 132, 0.6)',
            'rgba(30, 99, 132, 0.6)',
            'rgba(60, 99, 132, 0.6)',
            'rgba(90, 99, 132, 0.6)',
            'rgba(120, 99, 132, 0.6)',
            'rgba(150, 99, 132, 0.6)',
            'rgba(180, 99, 132, 0.6)',
            'rgba(210, 99, 132, 0.6)',
            'rgba(240, 99, 132, 0.6)'
        ],
        borderColor: [
            'rgba(0, 99, 132, 1)',
            'rgba(30, 99, 132, 1)',
            'rgba(60, 99, 132, 1)',
            'rgba(90, 99, 132, 1)',
            'rgba(120, 99, 132, 1)',
            'rgba(150, 99, 132, 1)',
            'rgba(180, 99, 132, 1)',
            'rgba(210, 99, 132, 1)',
            'rgba(240, 99, 132, 1)'
        ],
        borderWidth: 2,
        hoverBorderWidth: 0
    };

    let chartOptions = {
        scales: {
            yAxes: [{
                barPercentage: 0.5,
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "black",
                    zeroLineWidth: 2
                },
                ticks: {
                    min: 0,
                    max: 6500,
                    stepSize: 1300
                },
                scaleLabel: {
                    display: true,
                    labelString: "Density in kg/m3"
                }
            }]
        },
        elements: {
            rectangle: {
                borderSkipped: 'left',
            }
        }
    };

    let bubleChart = new Chart(densityCanvas, {
        type: 'line',
        data: {
            labels: ts,
            datasets: [densityData],
        },
        options: chartOptions
    });
    ts.length = 0;
    da.length = 0;
}

function selectChanged(value) {

    switch (value) {

        case '1':

            pieChart();

            break;


        case '2':

            barChart();

            break;

        case '3':

            GraphChart();

            break;

    }

};
