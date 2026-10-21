---
layout: page
title: "Una actividad, distintas formas de aprender"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 4
nav_exclude: false
lang: es
translation_key: bloque1-actividad-orientacion
prompt_lab: true
---

{% include language-switcher.html %}

# Una actividad, distintas formas de aprender
{: .fs-7 }

**Orientación educativa y Pedagogía Terapéutica**

## ¿Qué vamos a conseguir?

Prepararás tres formas de trabajar un mismo texto de Secundaria con principios del Diseño Universal para el Aprendizaje. Compararás los apoyos sin rebajar el objetivo común ni infantilizar el contenido.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Adapta este texto para alumnado con dificultades.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: comprensión lectora sobre sostenibilidad en 1.º de ESO con principios del Diseño Universal para el Aprendizaje.
Alumnado destinatario: grupo ficticio con necesidades diversas de acceso al vocabulario, organización de la información y expresión de respuestas; no atribuyas diagnósticos ni perfiles individuales reales.
Objetivo de aprendizaje: identificar la idea principal, localizar dos evidencias y justificar una medida de ahorro de agua a partir del mismo texto.
Restricciones y condiciones: sesión de 35 minutos. Usa el texto base incluido a continuación y no añadas datos como si procedieran de él. Diseña tres opciones flexibles: lenguaje claro; apoyos estructurales o visuales descritos en texto; ampliación. Mantén los objetivos esenciales en todas y permite elegir o combinar apoyos. Incluye preguntas de comprensión, instrucciones claras y formas de responder por escrito, oralmente o mediante un esquema explicado. Evita etiquetas de capacidad y un tono infantil.
Formato de salida: texto base, tres propuestas breves con apoyos y preguntas, y tabla que relacione cada propuesta con el objetivo común.
Texto base ficticio: En un instituto imaginario, el equipo del huerto observa que el agua se evapora antes cuando riega al mediodía. Propone regar a primera hora y cubrir parte del suelo para conservar la humedad. Antes de cambiar la rutina, acuerda observar dos zonas semejantes durante una semana y anotar cuándo se seca la tierra. El equipo decidirá qué medida mantener después de comparar sus registros. Todavía no dispone de resultados.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Las tres opciones mantienen la idea principal, las evidencias y la justificación? Detecta si alguna inventa resultados del huerto o reduce la exigencia en vez de ofrecer apoyos.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Revisa si las adaptaciones infantilizan el contenido, etiquetan al alumnado o reducen innecesariamente las expectativas. Reescribe lo necesario y muestra cómo cada opción mantiene el objetivo esencial. No conviertas la ampliación en más cantidad de ejercicios ni añadas diagnósticos.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Tres vías de acceso y respuesta a una misma lectura. Aprenderás a concretar accesibilidad, objetivos comunes y criterios pedagógicos en el prompt.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
