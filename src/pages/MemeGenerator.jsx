import {useState} from "react";
import html2canvas from "html2canvas";
import "./memeGenerator.css"

export const MemeGenerator = () => {
    const [linea1, setLinea1] = useState('');
    const [linea2, setLinea2] = useState('');
    const [imagen, setImagen] = useState('dog_smile');
    const [advertencia, setAdvertencia] = useState('');

    const onChangeLinea1 = function(evento){
        setLinea1(evento.target.value)
    }

    const onChangeLinea2 = function(evento){
        setLinea2(evento.target.value)
    }

    const onChangeImagen = function (evento) {
        setImagen(evento.target.value)
    }

    const onClickExportar =  () => {

        if (!(linea1 && linea2)) {
            setAdvertencia("Ingrese valores en Linea 1 y Linea 2");
            return;
        }else setAdvertencia("");

        html2canvas(document.querySelector("#meme")).then(canvas => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement('a');
            link.download = 'meme.png';
            link.href = img;
            link.click();
        });
    }
    return (
        <div>
            <select onChange={onChangeImagen} value = {imagen}>
                <option value = "dog_angry"> Perro renegando </option>
                <option value = "dog_smile"> Perro sonriendo </option>
            </select>
            <br/>
            <input onChange={onChangeLinea1} type='text' placeholder='Linea 1'/> <br/>
            <input onChange={onChangeLinea2} type='text' placeholder='Linea 2'/> <br/>
            <button onClick={onClickExportar}>Exportar</button>

            <div className="advertencia">
                <span>
                    {advertencia}
                </span>
            </div>

            <div className="meme" id="meme">
                <span>{linea1}</span> <br/>
                <span>{linea2}</span> <br/>
                <img src={"/img/"+ imagen +".jpeg"}  alt="Imagen de meme"/>
            </div>
        </div>
    );
}