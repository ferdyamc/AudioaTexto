


document.getElementById("fileInput").addEventListener("change", async (e) => {
  let fileNameText = document.getElementById("fileName");
  let output = document.getElementById("output");
  const API_KEY = "";
  const file = e.target.files[0];
    
  if (!file) return;
  output.classList.add('p-5');
  fileNameText.textContent = file.name;

  output.innerText = "Procesando...";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("model", "whisper-large-v3-turbo");
  

  try {
    const response = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`
      },
      body: formData
    });

    const data = await response.json();

    if (data.text) {
      
      output.innerText = data.text;
      document.getElementById("btn-borrado").style.display="inherit";

    } else {
      output.innerText = "Error en respuesta";
      console.log(data);
    }

  } catch (error) {
    console.error(error);
    output.innerText = "Error al transcribir";
  }
});

document.getElementById("btn-borrado").addEventListener("click", function(){
    let fileNameText = document.getElementById("fileName");
    let output = document.getElementById("output");

    const inpt = document.getElementById("fileInput");
    inpt.value = "";
    document.getElementById("btn-borrado").style.display="none";

    output.innerHTML="";
    fileNameText.textContent="Ningun archivo seleccionado";
    output.classList.remove('p-5');
    output.classList.add('p-0');
})