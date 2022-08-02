import yoga1 from '../multimedia/yoga5.png';
import '../styles/hero.scss'

function Component1(){
    return(
        <div className="content1">
            <img id="planta" src={yoga1} alt="planta"/>
            <div className='texto1'>
                A diferencia de cualquier deporte, el único objetivo del yoga es encontrar la mejor versión de uno mismo, y su práctica debe hacerse de manera honesta, exigiéndonos pero sin llegar a forzar ni juzgarnos en ningún momento. <br /><br />

                El yoga engloba todo nuestro ser, y cuando oigas a una persona decir que el yoga ha cambiado su vida, créela porque aunque pueda costar entenderlo, es algo totalmente cierto que descubres en el momento en que lo practicas.
            </div>
        </div>
    )
}

export default Component1;