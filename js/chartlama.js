// Start chart-transaction-number
var ctx = document.getElementById("chart-transaction-number").getContext("2d");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "01 Okt",
            "02 Okt",
            "03 Okt",
            "04 Okt",
            "05 Okt",
            "06 Okt",
            "07 Okt",
            "08 Okt",
            "09 Okt",
            "10 Okt",
            "11 Okt",
            "12 Okt",
            "13 Okt",
            "14 Okt",
            "15 Okt",
        ],
        datasets: [
            {
                label: "#of Votes",
                data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2, 12, 19, 3, 5, 2],
                backgroundColor: [
                    "rgba(0, 0, 0, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 0.2)",
                ],
                borderWidth: 1,
                fill: true
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    drawBorder: false
                }
            }
        },
        layout: {
            padding: {
                bottom: 50
            }
        },
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        }
    },
});
// Akhir chart-transaction-number

// Start    
var ctx = document.getElementById("chart-transaction-value").getContext("2d");
var myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [
            "01 Okt",
            "02 Okt",
            "03 Okt",
            "04 Okt",
            "05 Okt",
            "06 Okt",
            "07 Okt",
            "08 Okt",
            "09 Okt",
            "10 Okt",
            "11 Okt",
            "12 Okt",
            "13 Okt",
            "14 Okt",
            "15 Okt",
        ],
        datasets: [
            {
                label: "#of Votes",
                data: [12, 19, 3, 5, 2, 12, 19, 3, 5, 2, 12, 19, 3, 5, 2],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
                fill: true
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        layout: {
            padding: {
                bottom: 50
            }
        },
        maintainAspectRatio: false,
        elements: {
            point: {
                radius: 0
            }
        }
    },
});
// Akhir chart-transaction-value

// Start chart-transaction-channel
var ctx = document.getElementById("chart-transaction-channel").getContext("2d");
var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: [
            "Alfamart",
            "Octo Clicks",
            "Go Mobile",
            "LinkAja",
            "VA Permata",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    "#ff9d69",
                    "#7d00b5",
                    "#39d5cf",
                    "#ff007c",
                    "#2d62ed",
                ],
                borderWidth: 0,

            },
        ],
    },
    options: {
        plugins: {
            legend: {
                labels: {
                    boxWidth: 36,
                    borderRadius: 20
                },
                position: 'right'
            }
        },
        layout: {
            padding: {
                bottom: 50
            }
        },
        maintainAspectRatio: false,
    },
});
// Akhir chart-transaction-channel