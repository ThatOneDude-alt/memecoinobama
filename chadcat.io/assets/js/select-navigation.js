// select-navigation.js

document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('CrossChain');
    selectElement.addEventListener('change', function() {
        var selectedOption = this.value;
        window.location.href = selectedOption;
    });
});