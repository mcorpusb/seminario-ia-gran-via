---
layout: page
title: "Un invernadero inteligente"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 3
nav_exclude: false
lang: es
translation_key: bloque1-actividad-tecnologia
prompt_lab: true
---

{% include language-switcher.html %}

# Un invernadero inteligente
{: .fs-7 }

**Tecnología · ESO**

## ¿Qué vamos a conseguir?

Diseñarás un reto de riego automatizado para el huerto del instituto. Comprobarás cómo los recursos disponibles y los criterios de funcionamiento cambian la propuesta de la IA.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Diseña un proyecto de tecnología.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: Tecnología; diseño de un pequeño sistema de riego automatizado para el huerto escolar.
Alumnado destinatario: 3.º de ESO, con conocimientos iniciales de sensores y actuadores, en equipos de cuatro.
Objetivo de aprendizaje: explicar y representar la relación entre entrada, control y salida, y comprobar una secuencia de riego.
Restricciones y condiciones: plantea un proyecto de tres sesiones de 50 minutos con materiales de bajo coste, sensor de humedad y un actuador o sistema de riego. Incluye un presupuesto ficticio y fases de construcción. Contempla supervisión docente, separación entre agua y conexiones y alimentación de baja tensión adecuada al material; no propongas conexiones a la red eléctrica. Señala compatibilidades y especificaciones que debe verificar el docente antes de construir.
Formato de salida: problema inicial, lista de materiales, diagrama funcional en texto con flechas, secuencia de funcionamiento, presupuesto, fases por sesión y medidas de seguridad. Añade tres pruebas observables: suelo seco, suelo húmedo y fallo del sensor; indica el comportamiento esperado.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿El sensor, el control y el actuador forman un sistema coherente? Comprueba si las pruebas y las medidas de seguridad permiten revisar su funcionamiento real.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
En el aula no hay componentes electrónicos suficientes. Adapta el reto mediante simulación o maqueta con tarjetas de entrada y salida. Mantén el objetivo de automatización y las tres pruebas. Distingue qué se puede validar con la maqueta y qué solo se comprobaría con un montaje real.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Un reto tecnológico con una alternativa viable sin electrónica. Aprenderás a expresar restricciones reales y a solicitar alternativas sin perder el objetivo.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
