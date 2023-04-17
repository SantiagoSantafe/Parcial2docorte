
export const Buscador=({buscar,setBuscar})=>{ //corchetes definen funcion
    
    return (
        <>
        <div className="form-group ">

            <label htmlFor="id">BUSCAR</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="id" 
                    placeholder="BUSCAR NOMBRE" 
                    value={buscar} onChange={(event) => setBuscar(event.target.value)} />
            </div>
        </>
        )
}