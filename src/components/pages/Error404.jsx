import { Link } from 'react-router-dom';
import error from '../../assets/error404.png'

const Error404 = () => {
    return (
        <section className='text-center mainSection mb-5'>
            <img className='w-25' src={error} alt="Imagen error 404" />
        <div>
            <Link className="btn btn-primary" to='/'>Volver al Inicio</Link>
        </div>

        </section>
    );
};

export default Error404;