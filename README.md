# Solución al Desafío "Expenses chart component"

Esta es una solución para el desafío [Expenses chart component](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Los desafíos de Frontend Mentor te ayudan a mejorar tus habilidades de desarrollo web mediante proyectos realistas.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
  - [Enlaces](#enlaces)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Aprendizajes](#aprendizajes)
- [Autor](#autor)
- [¿Cómo Ejecutar Localmente?](#como-ejecutar-localmente)

---

## Descripción General

### Enlaces
- **URL del Sitio en Vivo**: [Ver sitio aquí](https://17-expenses-chart-challenge.netlify.app/)

---

## Tecnologías Utilizadas
- React (con Vite)
- SCSS (modularizado con `@use`)
- Modularización de componentes
- Flujo de trabajo basado en **Mobile First**
- Deploy con Netlify

---

## Características
- Diseño completamente responsive para dispositivos móviles y escritorio.
- Componentes React modulares (Balance, Chart, ChartAnalytics, ChartBar, Footer).
- Estilos organizados con preprocesador **Sass/SCSS**, facilitando la reutilización y mantenimiento del código.
- Mejores prácticas en diseño web responsive.

---

## Aprendizajes
En este proyecto, reforcé los siguientes conceptos:
- **Componentización en React**: Dividir la interfaz en componentes pequeños y reutilizables.
- **Convención de Nombres BEM**: Mantener una estructura de clases clara y consistente.
- **Flujo de trabajo con Git**: Gestionar ramas (por ejemplo, `dev` y `main`) y realizar commits estructurados.
- **Uso de props para compartir datos entre componentes**:

### Ejemplo de Código
Aquí tienes un ejemplo de cómo modularicé un componente en React:

```jsx

import { useState, useEffect } from 'react';
import data from '../../data/data.json'; 
import ChartBar from '../ChartBar/ChartBar';
import ChartAnalytics from '../ChartAnalytics/ChartAnalytics';
import './Chart.scss';

export default function Chart() {
  const [maxAmount, setMaxAmount] = useState(0);

  useEffect(() => {
    const max = Math.max(...data.map(item => item.amount));
    setMaxAmount(max);
  }, []);

  return (
    <section className="chart">
      <h2 className="chart__title">Spending - Last 7 days</h2>
      <div className="chart__bars-container">
        {data.map((item) => (
          <ChartBar 
            key={item.day} 
            day={item.day} 
            amount={item.amount} 
            max={maxAmount} 
          />
        ))}
      </div>
      <ChartAnalytics />
    </section>
  );
}

  
```

# Autor
- **Perfil en Frontend Mentor**: [Lenta, Maximiliano Carlos](https://www.frontendmentor.io/profile/Lenta-Maximiliano)
- **Perfil en GitHub**: [Lenta-Maximiliano](https://github.com/Lenta-Maximiliano)
- **LinkedIn**: [Lenta, Maximiliano Carlos](https://linkedin.com/in/Lenta-Maximiliano)

## Como Ejecutar Localmente

1. **Clona este repositorio:**
   ```bash
   git clone https://github.com/Lenta-Maximiliano/17-Expenses-Chart-Challenge.git

2. **Navega a la carpeta del proyecto:**
    ```bash
    cd 17-Expenses-Chart-Challenge

3. **Instala las dependencias:**
    ```bash
    npm install

4. **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev