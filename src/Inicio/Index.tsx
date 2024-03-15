import { useEffect,useState } from "react";
import Pelicula_uno from "../imagenes/IT.jpg";
import Logo from "../imagenes/logo.png";


interface MapProps {
    src: string;
    width: number;
    height: number;
}


const Inicio: React.FC<MapProps> = ({ src, width, height }) => {

        // Función para agregar una película alquilada
        const agregarAlquilado = (titulo: string) => {
            const itemLista = <li>{titulo} - <strong>Alquiler:</strong> $2500</li>;
            setAlquilados([...alquilados, itemLista]);
            alert(`Se alquiló la película "${titulo}" Precio: $2500`);
        };
    
        // Función para agregar una película comprada
        const agregarComprado = (titulo: string) => {
            const itemLista = <li>{titulo} - <strong>Compra:</strong> $5000</li>;
            setComprados([...comprados, itemLista]);
            alert(`Se compró la película "${titulo}" Precio: $5000`);
        };
    
        // Estado para almacenar la lista de alquilados
        const [alquilados, setAlquilados] = useState<JSX.Element[]>([]);
    
        // Estado para almacenar la lista de comprados
        const [comprados, setComprados] = useState<JSX.Element[]>([]);
    
        useEffect(() => {
            // Agregar eventos a los botones de alquilar y comprar
            const botonesAlquilar = document.querySelectorAll<HTMLButtonElement>('button[data-action="alquilar"]');
            botonesAlquilar.forEach((boton) => {
                boton.addEventListener('click', () => agregarAlquilado(boton.dataset.titulo!));
            });
    
            const botonesComprar = document.querySelectorAll<HTMLButtonElement>('button[data-action="comprar"]');
            botonesComprar.forEach((boton) => {
                boton.addEventListener('click', () => agregarComprado(boton.dataset.titulo!));
            });
    
            // Obtener las listas y el botón de limpiar
            const listaAlquilados = document.getElementById('listaAlquilados');
            const listaComprados = document.getElementById('listaComprados');
            const botonLimpiarAlquilados = document.getElementById('limpiarAlquilados') as HTMLButtonElement;
            const botonLimpiarComprados = document.getElementById('limpiarComprados') as HTMLButtonElement;
    
            // Funciones para limpiar las listas de alquilados y comprados
            const limpiarAlquilados = () => {
                setAlquilados([]);
            };
    
            const limpiarComprados = () => {
                setComprados([]);
            };
    
            // Agregar eventos a los botones de limpiar
            botonLimpiarAlquilados.addEventListener('click', limpiarAlquilados);
            botonLimpiarComprados.addEventListener('click', limpiarComprados);
    
            // Cleanup
            return () => {
                botonesAlquilar.forEach((boton) => {
                    boton.removeEventListener('click', () => agregarAlquilado(boton.dataset.titulo!));
                });
    
                botonesComprar.forEach((boton) => {
                    boton.removeEventListener('click', () => agregarComprado(boton.dataset.titulo!));
                });
    
                botonLimpiarAlquilados.removeEventListener('click', limpiarAlquilados);
                botonLimpiarComprados.removeEventListener('click', limpiarComprados);
            };
        }, []);


    return (

        <>
            <h1>
                VIDEO CLUB ONLINE
            </h1>
            
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>


            <header>
                <nav>
                    <ul>
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="./index2.html">Terror</a></li>
                        <li><a href="index3.html">Accion</a></li>
                        <li><a href="index4.html">Comedia</a></li>
                        <li><a href="./index1.html">Contacto</a></li>
                    </ul>
                    <button className="burguer">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </nav>
            </header>

            <h2><i>Peliculas mas destacadas</i></h2>

            <div className="container_peliculas">

                <div className="peliculas">
                    <a href="#"><img src={Pelicula_uno} alt="pelicula"/></a>
                    <h3>SAW X </h3>
                    <p>John Kramer conoce a una persona que le promete curarle el cáncer en una clínica de la Ciudad de México.
                        Tras descubrir que todo era una estafa, se venga de los timadores secuestrándolos y obligándolos a
                        participar en un juego perverso.
                    </p>
                    <div className="buttons">
                        <button id="agregarAlquilado">ALQUILAR</button>
                        <button id="agregarComprados">COMPRAR</button>
                        
                        <a href="https://www.youtube.com/watch?v=z8dlTVL1J0A"target="_blank">
                            <button type="submit">VER TRAILER</button></a>
                    </div>
                </div>
            </div>

            <div className="listas">
                <h4>Lista Alquilados</h4>
                <ul id="listaAlquilados">

                </ul>

                <h4>Lista Comprados</h4>
                <ul id="listaComprados">
                    
                </ul>
            </div>

            <button id="limpiarAlquilados">Limpiar Alquilados</button>
            <button id="limpiarComprados">Limpiar Comprados</button>
    
            <footer>

            <p>Derechos reservados &copy;</p>
            <p>Como llegar</p>
            <iframe
            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105064.48114864466!2d-58.56577012217135!3d-34.62274207894573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc966bf151d67%3A0x255fef772508e89c!2sUTN.BA!5e0!3m2!1ses!2sar!4v1706024483563!5m2!1ses!2sar"}
            width={400}
            height={100}
            style={{ border: '0' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>



            <p>Siguenos en redes sociales</p>
            <div className="redesSociales">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/videoclub_online"target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="https://api.whatsapp.com/send?phone=543435108426" target="_blank"><i className="fa fa-whatsapp"
                        aria-hidden="true"></i></a>
            </div>

            </footer>


        </>



    )
}

export default Inicio; 