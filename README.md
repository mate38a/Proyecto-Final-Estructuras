# Proyecto Final de Estructuras

Este es el proyecto final para la materia de Estructuras de Datos. El objetivo de este proyecto es implementar y utilizar diversas estructuras de datos en C++.

## Contenido

- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Requisitos

Asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- [Git](https://git-scm.com/)
- [G++](https://gcc.gnu.org/)

## Instalación

Sigue los siguientes pasos para clonar e instalar el proyecto en tu máquina local:

1. **Clona el repositorio:**

   Abre una terminal y ejecuta el siguiente comando:

   ```bash
   git clone https://github.com/mate38a/Proyecto-Final-Estructuras.git

2. **Navegar en el directorio del Proyecto:**

   cd Proyecto-Final-Estructuras
   
4. **Compila el proyecto:**

   Asegúrate de estar en el directorio raíz del proyecto y ejecuta el siguiente comando:

   g++ -o main src/*.cpp
   
   Esto compilará todos los archivos .cpp en el directorio src y creará un ejecutable llamado main.

##Uso
   Para ejecutar el proyecto, utiliza el siguiente comando en la terminal:
   
   ./main

   Esto ejecutará el programa y podrás interactuar con las estructuras de datos implementadas.
## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

- **Client:** La parte del proyecto que se encarga de la interfaz de usuario.
  - **src/**: Contiene el código fuente del proyecto.
    - **main.cpp**: El archivo principal que contiene la función `main`, donde comienza la ejecución del programa.
    - **clase1.cpp**: Implementación de la primera clase utilizada en el proyecto.
    - **clase2.cpp**: Implementación de la segunda clase utilizada en el proyecto.
    - **funciones.cpp**: Implementación de funciones auxiliares que soportan la funcionalidad principal.
  - **include/**: Contiene los archivos de encabezado.
    - **clase1.h**: Declaración de la primera clase y sus métodos.
    - **clase2.h**: Declaración de la segunda clase y sus métodos.
    - **funciones.h**: Declaración de funciones auxiliares.

- **Api:** La parte del proyecto que maneja la lógica de la aplicación y la interacción con la base de datos.
  - **test/**: Contiene archivos de pruebas unitarias para verificar el correcto funcionamiento del código.
    - **test_clase1.cpp**: Pruebas unitarias para la primera clase.
    - **test_clase2.cpp**: Pruebas unitarias para la segunda clase.

- **Base de datos:** La base de datos del proyecto está alojada en un enlace de Google Drive.
  - Puedes acceder a la base de datos [aquí](https://drive.google.com/drive/folders/XXXXXXXXXXXXX).

- **Otros archivos importantes:**
  - **.gitignore**: Archivo que especifica qué archivos o directorios deben ser ignorados por Git.
  - **LICENSE**: Archivo de licencia del proyecto.
  - **README.md**: Este archivo de documentación.




