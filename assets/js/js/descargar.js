 document.getElementById("descargar").addEventListener("click", function() {
            // URL del archivo .rar en tu servidor
            const archivoURL = "https://tuservidor.com/archivo.rar";

            // Crear un elemento <a> para la descarga
            const enlace = document.createElement("a");
            enlace.href = archivoURL;
            enlace.download = "archivo.rar"; // Nombre del archivo al descargarlo

            // Agregar el enlace al documento y activar la descarga
            document.body.appendChild(enlace);
            enlace.click();
            document.body.removeChild(enlace);
        });