import React from 'react';
import Sidebar from '../layout/Sidebar';
import Topbar from '../layout/Topbar';
import FormTarea from '../tareas/FormTarea';
import ListadoTareas from '../tareas/ListadoTareas';

const Proyectos = () => {
    return ( 
        <div className="contenedor-app">
            
            <Sidebar />
            
            <div className="seccion-principal">

                <Topbar />

                <main>
                    <FormTarea />

                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>

            </div>
        </div>
     );
}
 
export default Proyectos;