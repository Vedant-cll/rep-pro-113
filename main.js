function preload() {
    img = loadImage('https://www.bing.com/th?id=OIP.RciXrncbXFTnfynsyiluOQHaEo&w=194&h=133&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2');
    }
    
    function setup() {
    createCanvas(600,600);
    }
    
    

    function draw() {
        image(img, 100, 100, 400, 400);
        fill(51,255,187);
          stroke(51,255,187);
          circle(50,50, 100);
          circle(550,50, 100);
          rect(50, 20, 500, 55);
          circle(50,540, 100);
          rect(50, 521, 500, 55);
          circle(550,540, 100);
          rect(20, 20, 55, 500);
          rect(520, 20, 55, 500);
        }

    function filtertint(){
        tint_color = document.getElementById("color_name").value;
    }