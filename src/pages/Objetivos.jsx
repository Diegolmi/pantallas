import React, { useState } from 'react';
import '../assets/objetivos.css'

export default function Objetivos() {
    
  return (
    <>
        <div className="objetivos pt-5">
            <div className="row mx-1 mx-lg-0 mb-3 pt-2 pb-3">
                <div className="col-12 col-md-7 lado-izquierdo">
                    <h1>Rango 1</h1>
                    <img src="https://images.unsplash.com/photo-1552975084-6e027cd345c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNtYXJ0JTIwdHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="w-100" alt="" />
                    <h4>Smart tv 50" 4k</h4>
                    <h4>Premio alcanzando con U$D 25.000</h4>
                </div>
                <div className="mt-5 mt-md-0 col-12 col-md-5">
                    <h2>Alcanza tus objetivos</h2>
                    <div className="card-objetivos">
                        <img src="https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div>
                            <h6>Rango 2</h6>
                            <p>Destino: <i>Arrecife</i></p>
                            <p>Objetivo: U$D 50.000</p>
                        </div>
                    </div>
                    <div className="card-objetivos">
                        <img src="https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div>
                            <h6>Rango 3</h6>
                            <p>Destino: <i>Moto 0km</i></p>
                            <p>Objetivo: U$D 100.000</p>
                        </div>
                    </div>
                    <div className="card-objetivos">
                        <img src="https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div>
                            <h6>Rango 4</h6>
                            <p>Destino: <i>Dubai</i></p>
                            <p>Objetivo: U$D 250.000</p>
                        </div>
                    </div>
                    <div className="card-objetivos">
                        <img src="https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div>
                            <h6>Rango 5</h6>
                            <p>Destino: <i>Maldivas</i></p>
                            <p>Objetivo: U$D 500.000</p>
                        </div>
                    </div>
                    <div className="card-objetivos">
                        <img src="https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGJlYWNofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <div>
                            <h6>Rango 6</h6>
                            <p>Destino: <i>Auto alta gama</i></p>
                            <p>Objetivo: U$D 1M</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
