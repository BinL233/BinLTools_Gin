function live2DclickEvent() {
    document.addEventListener("DOMContentLoaded", function() {
        var canvas = document.getElementById("L2dCanvas");
        canvas.addEventListener('click', function(event) {
            alert('Canvas clicked!');
        });
    });
}