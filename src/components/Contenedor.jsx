
function Contenedor({ mensaje }) {
    return (
        <div className="container-fluid mt-5">
            <h1 className="text-center">{mensaje}</h1>
            <p className="text-center">Aca va el catalogo de productos en futuras entregas.</p>
            <div className="row">
                {/* Aquí se pueden agregar productos en el futuro */}
            </div>
        </div>
    );
}

export default Contenedor;
