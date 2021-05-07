// Start chart-transaction-number
let ctn = document.getElementById("chart-transaction-number").getContext("2d");
let gradient_trans_number = ctn.createLinearGradient(0, 255, 0, 0);
gradient_trans_number.addColorStop(0, 'rgb(251, 237, 246, 0.5)');
gradient_trans_number.addColorStop(1, 'rgba(255,0,124,0.1)');
let chart_transaction_number = new Chart(ctn, {
    type: 'line',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [1000, 2000, 4000, 5000, 2000, 3000, 5000, 6000, 4000, 5000, 1000, 2000, 9000, 4000, 8000],
            pointBorderColor: '#ffc6e2',
            pointBackgroundColor: '#ffffff',
            pointRadius: 6,
            fill: true,
            backgroundColor: gradient_trans_number,
            borderColor: '#ffc6e2',
            borderWidth: 1
        }],
        labels: ['01 Okt', '02 Okt', '03 Okt', '04 Okt', '05 Okt',
            '06 Okt', '07 Okt', '08 Okt', '09 Okt', '10 Okt', '11 Okt', '12 Okt', '13 Okt', '14 Okt', '15 Okt']
    },
    options: {
        scales: {
            y: {
                suggestedMin: 50,
                suggestedMax: 100,
                ticks: {
                    stepSize: 2000,
                    callback: function (label, index, labels) {
                        return label / 1000 + ' K';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        layout: {
            padding: {
                bottom: 50
            }
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins'
                    }
                }
            }
        }
    }
});
// Akhir chart-transaction-number

// Start chart transaction value
var ctv = document.getElementById("chart-transaction-value").getContext("2d");
let gradient_trans_value = ctv.createLinearGradient(0, 255, 0, 0);
gradient_trans_value.addColorStop(0, '#f5f6fa');
gradient_trans_value.addColorStop(1, 'rgba(116,133,255,0)');
let chart_transaction_value = new Chart(ctv, {
    type: 'line',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [150000, 150000, 150000, 145000, 20000, 30000, 50000, 60000, 240000, 50000, 120000, 20000, 90000, 40000, 80000],
            pointBorderColor: '#7484ff',
            pointBackgroundColor: '#ffffff',
            pointRadius: 6,
            fill: true,
            backgroundColor: gradient_trans_value,
            borderColor: '#7484ff',
            borderWidth: 1
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    options: {
        scales: {
            y: {
                suggestedMin: 50,
                suggestedMax: 100,
                ticks: {
                    stepSize: 50000,
                    callback: function (label, index, labels) {
                        return label / 1000 + ' K';
                    }
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        },
        layout: {
            padding: {
                bottom: 50
            }
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        family: 'Poppins'
                    }
                }
            }
        }
    }
});
// Akhir chart-transaction-value

// Start chart-transaction-channel
var ctc = document.getElementById("chart-transaction-channel").getContext("2d");
var chart_transaction_channel = new Chart(ctc, {
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
                borderWidth: 0

            },
        ],
    },
    options: {
        // plugins: {
        //     legend: {
        //         labels: {
        //             boxWidth: 36,
        //             borderRadius: 20,
        //             font: {
        //                 family: 'Poppins'
        //             }
        //         },
        //         position: 'right'
        //     }
        // },
        plugins: {
            legend: {
                labels: {
                    boxWidth: 36,
                    borderRadius: 20,
                    font: {
                        family: 'Poppins'
                    }
                },
                position: 'bottom'
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