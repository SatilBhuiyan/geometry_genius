function resultriangle()
{
    const base = getvalue('firstb');
    const height = getvalue('firsth');
    
    const area = 0.5*base*height;

    setarea('triangle-area', area);
}

function resultrectangle()
{
    const weight = getvalue('firstw');
    const height = getvalue('firsti');

    const area = weight * height;

    setarea('rectangle-area', area);
}

function resultParallelogram()
{
    const base = getvalue('basePara');
    const height = getvalue('heightpara');

    const area = base * height;

    setarea('Parallelogram-area', area);
}

function resultRhombus()
{
    const d1 = getvalue('baseRhom');
    const d2 = getvalue('heightRhom');

    const area = 0.5*d1*d2;

    setarea('Rhombus-area', area);
}

function resultPentagon()
{
    const p = getvalue('basePent');
    const b = getvalue('heightPent');
    
    const area = 0.5*p*b;

    setarea('Pentagon-area', area);
}

function resultEllipse()
{
    const a = getvalue('baseElli');
    const b = getvalue('heightElli');
    
    const area = 3.1816*a*b;

    setarea('Ellipse-area', area);
}


function getvalue(getid){
    const tagg = document.getElementById(getid);
    const tagtext = tagg.value;
    const value = parseFloat(tagtext);
    return value;
}

function setarea(getid, area){
    const areavalue = document.getElementById(getid);
    areavalue.innerText = area;
}