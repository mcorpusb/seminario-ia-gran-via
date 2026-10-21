---
layout: page
title: "Una sesión para todo el mundo"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 10
nav_exclude: false
lang: es
translation_key: bloque1-actividad-educacion-fisica
prompt_lab: true
---

{% include language-switcher.html %}

# Una sesión para todo el mundo
{: .fs-7 }

**Educación Física · Propuesta transversal de inclusión**

## ¿Qué vamos a conseguir?

Diseñarás juegos cooperativos con formas diversas de participar. Comprobarás cómo incluir espacio, seguridad e intensidad en una petición cambia su viabilidad.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Prepara una clase de Educación Física.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: Educación Física; sesión de juegos cooperativos, también útil como propuesta transversal de inclusión.
Alumnado destinatario: grupo heterogéneo ficticio de 2.º de ESO, con diferentes experiencias motrices; no atribuyas diagnósticos ni solicites datos de salud.
Objetivo de aprendizaje: cooperar para resolver retos motores, acordar estrategias y reconocer la contribución de cada participante.
Restricciones y condiciones: sesión de 50 minutos en pista o gimnasio, con conos, pelotas blandas y aros. Incluye calentamiento, dos juegos cooperativos sin eliminación, vuelta a la calma y preguntas finales. Prevé revisión del espacio y del material, distancias seguras, señal de parada y alternativas de participación. Evita contacto forzado, comparaciones públicas de rendimiento y prescripciones individuales; el docente ajustará la actividad a las condiciones reales del grupo.
Formato de salida: tabla con fases y tiempos que sumen 50 minutos, recursos y espacio, reglas claras, normas de seguridad, alternativas y tres criterios de observación de la cooperación.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Las reglas evitan la eliminación y permiten contribuir de distintas maneras? Revisa la seguridad, el espacio y la suma de tiempos antes de considerar viable la sesión.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Adapta los dos juegos para ofrecer distintos niveles de intensidad y formas de participación sin excluir a nadie. Permite elegir y cambiar de opción, incorpora pausas y mantén un objetivo cooperativo común. Explica qué condiciones debe comprobar el docente antes de ponerlos en práctica.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Una sesión cooperativa con opciones de intensidad y participación. Aprenderás a concretar diversidad, seguridad y condiciones prácticas en el prompt.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
