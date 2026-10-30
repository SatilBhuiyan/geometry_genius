function resultriangle()
{
    const triangletag = document.getElementById('firstb');
    const triangletext = triangletag.value;
    const base = parseFloat(triangletext);
    

    const triangletag2 = document.getElementById('firsth');
    const triangletext2 = triangletag2.value;
    const height = parseFloat(triangletext2);
    
    const area = 0.5*base*height;

    const trianglearea = document.getElementById('triangle-area');
    trianglearea.innerText = area;
}


function resultrectangle()
{
    const rectangletagw = document.getElementById('firstw');
    const rectangletext = rectangletagw.value;
    const weight = parseFloat(rectangletext);

    const rectangletagi = document.getElementById('firsti');
    const rectangletexti = rectangletagi.value;
    const height = parseFloat(rectangletexti);

    const area = weight * height;

    const resultarea =document.getElementById('rectangle-area');
    resultarea.innerText = area;
}


function resultParallelogram()
{
    const Parallelogramtagbase = document.getElementById('basePara');
    const Parallelogramtext = Parallelogramtagbase.value;
    const base = parseFloat(Parallelogramtext);

    const Parallelogramtagheight = document.getElementById('heightpara');
    const Parallelogramtextheight = Parallelogramtagheight.value;
    const height = parseFloat(Parallelogramtextheight);

    const area = base * height;

    const resultarea =document.getElementById('Parallelogram-area');
    resultarea.innerText = area;
}