# Pruebas Técnicas

Este repositorio está pensado para quienes aspiran a roles de **Desarrollador Frontend** en niveles **Trainer** y **Junior** 🧑‍💻.

Incluye desafíos y ejercicios basados en preguntas técnicas reales 📋, diseñados para prepararte para entrevistas y mejorar tus habilidades en desarrollo web 💻.

## ⌨️ Proyectos

| Número | Proyecto | Código |
| ------ | -------- | ------ |
| `01` | Cat fact with gif | [Código](projects/01-cat-fact-with-gif/) |
| `02` | Reading list | [Código](projects/02-reading-list/) |
| `03` | Password security | [Código](projects/03-password-security/) |
| `04` | Add and delete items | [Código](projects/04-add-items-react/) |
| `05` | Movie search | [Código](projects/05-movie-search/) |

## 🔧 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/anibalcoder/pruebas-tecnicas.git
```

2. **Accede al directorio**

```bash
cd pruebas-tecnicas
```

## 🚀 Levantar servidor de desarrollo en un proyecto

> [!NOTE]
> Todas las pruebas técnicas se encuentran dentro de la carpeta `./projects`.

1. **Ubícate en el proyecto e instala sus dependencias**: Usa el flag `--filter` para instalar solo las dependencias del paquete que necesitas.

```bash
pnpm install --filter nombre-del-proyecto
```

> [!IMPORTANT]
> Reemplaza `./nombre-del-proyecto` por el nombre de la carpeta del proyecto en el que quieras trabajar (Ej: `01-cat-fact-with-gif`).

2. **Inicia el servidor de desarrollo**

```bash
pnpm dev
```

## 🧪 Ejecutar tests

Si un proyecto incluye pruebas automatizadas, puedes correrlas con:

```bash
pnpm test
```