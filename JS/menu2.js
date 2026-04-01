document.querySelector(".lightbox").addEventListener("click", ()=>{
    document.querySelector(".menu-2").style.display="none";
} )

document.getElementById("btn-menu-lateral").addEventListener("click", ()=>{
    document.querySelector(".menu-2").style.display="block";
})

document.getElementById("menu-item-contacto").addEventListener("click", ()=>{
    document.getElementById("contenedor-cuerpo").innerHTML=`<h1>Contacto<i class="fa-solid fa-envelope ms-3"></i></h1>
                <hr>
                    <small class="text-center text-md-start d-block text-light">¡ No dudes en comunicarme y enviarme tus sugerencias.  Estare atento!</small>
                    <div class="row h-auto flex-mrow">
                        <div class="col px-5">
                            <form id="form" class="mt-5" action="https://formspree.io/f/xgopzreb" method="post">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInputText" placeholder="Nombre" name="Nombre" required autocomplete="off">
                                    <label for="floatingInputText">Nombre</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" name="E-mail" required autocomplete="off" >
                                    <label for="floatingInputEmail">Email</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <textarea class="form-control" placeholder="Mensaje" id="floatingTextarea2" style="height: 100px" name="Mensaje" required autocomplete="off"></textarea>
                                    <label for="floatingTextarea2">Mensaje</label>
                                </div>
                                <div class="form-group">
                                    <button class="col-12 btn btn-outline-primary mb-5" type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>`;
    removerScript('script[src="JS/audioatexto.js"]');
    recargarScript('JS/enviarEmails.js');
})

document.getElementById("menu-item-transcribir").addEventListener("click", ()=>{
    document.getElementById("contenedor-cuerpo").innerHTML=`
        <h1>Audio a Texto<i class="fa-solid fa-file-signature ms-3"></i></h1>
                <hr>
                <p>Este es un proyecto independiente y de practica que permite transcribir audios a texto para facilitar su lectura, traducción o para el fin que requiera la persona que lo utilice. A futuro se irán agregando más funcionalidades que se complementarán con las ya existentes, atenderan nuevas necesidades y enriquecieran las bondades del sitio.</p>
                <div class="mt-5">
                    <input type="file" id="fileInput" hidden>
                    <label for="fileInput" class="custom-file d-block d-lg-inline-block mb-3 mb-lg-0 text-center text-lg-start">Seleccionar archivo mp3</label>
                    <span id="fileName" class="ms-0 ms-lg-3">Ningun archivo seleccionado</span>  
                </div>
                
                <div class="h-auto col-12" id="contenedor-respuesta">
                    <i class="fa-solid fa-eraser p-2" id="btn-borrado"></i>
                    <p id="output" class="mt-5 bg-secondary respuesta"></p>
                </div>
    `;
    recargarScript('JS/audioatexto.js');
    removerScript('script[src="JS/enviarEmails.js"]');
})



function removerScript(rutArchivo){
    const oldScript = document.querySelector(rutArchivo);
    if (oldScript) oldScript.remove();
}

function recargarScript(rutArchivo) {
    const newScript = document.createElement("script");
    newScript.src = rutArchivo;
    newScript.defer = true;
    document.body.appendChild(newScript);
}

