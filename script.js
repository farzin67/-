// این کد برای رسم نمودار استفاده می‌شود
window.onload = function() {
    var ctx = document.getElementById('miningChart').getContext('2d');
    var miningChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['ماه 1', 'ماه 2', 'ماه 3', 'ماه 4', 'ماه 5'],
            datasets: [{
                label: 'مقدار استخراج',
                data: [120, 150, 180, 200, 250],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
};
