---
layout: page
title: "Crea un paisaje sonoro"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 8
nav_exclude: false
lang: es
translation_key: bloque1-actividad-musica
prompt_lab: true
---

{% include language-switcher.html %}

# Crea un paisaje sonoro
{: .fs-7 }

**Música · ESO**

## ¿Qué vamos a conseguir?

Crearás una experiencia de composición con objetos cotidianos, percusión corporal y sonidos del entorno. Explorarás cómo las restricciones pueden orientar la creatividad musical.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Prepara una actividad musical.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: Música; creación de un paisaje sonoro que represente un entorno imaginado.
Alumnado destinatario: 2.º de ESO, con experiencias musicales diversas, en pequeños grupos.
Objetivo de aprendizaje: organizar una secuencia sonora con contrastes de ritmo, intensidad y textura, y representarla mediante una partitura gráfica sencilla.
Restricciones y condiciones: experiencia de 40 minutos. Materiales: papel, lápices, objetos cotidianos seguros, percusión corporal y sonidos del entorno recreados por el grupo. No dependas de instrumentos, móviles ni grabaciones de personas. Incluye trabajo cooperativo, reparto flexible de funciones y límites de volumen acordados para evitar molestias.
Formato de salida: objetivos musicales, materiales, secuencia de creación con tiempos que sumen 40 minutos, ejemplos de ritmos y texturas, leyenda de representación gráfica y tres criterios de valoración observables. Incluye ensayo, interpretación y escucha comentada.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Los ritmos, las texturas y la representación gráfica son comprensibles para 2.º de ESO? Comprueba si la secuencia permite crear, ensayar y escuchar en 40 minutos.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Revisa la actividad para un grupo sin instrumentos musicales y con diferentes posibilidades de participación. Ofrece funciones de creación, representación gráfica, interpretación y escucha, con alternativas a la percusión corporal y a sonidos intensos. Mantén la participación en las decisiones musicales y los 40 minutos.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Una secuencia de creación sonora con partitura gráfica y funciones flexibles. Aprenderás a orientar la creatividad con recursos, tiempos y condiciones de participación.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
