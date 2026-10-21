---
layout: page
title: "De una noticia a un debate"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 7
nav_exclude: false
lang: es
translation_key: bloque1-actividad-castellano
prompt_lab: true
---

{% include language-switcher.html %}

# De una noticia a un debate
{: .fs-7 }

**Lengua Castellana y Literatura**

## ¿Qué vamos a conseguir?

Diseñarás un debate a partir de una noticia ficticia sobre móviles en centros educativos. Ajustarás el formato para trabajar argumentos, contraargumentos y participación oral.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Prepara un debate para clase.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: Lengua Castellana y Literatura; debate sobre el uso de teléfonos móviles en centros educativos a partir de una noticia ficticia.
Alumnado destinatario: 4.º de ESO, con experiencia inicial en textos argumentativos y distintas posibilidades de intervención oral.
Objetivo de aprendizaje: argumentar y contraargumentar con respeto, distinguir hechos de opiniones y reconocer falacias.
Restricciones y condiciones: sesión de 45 minutos. Escribe una noticia de 120-150 palabras identificada como FICTICIA, sin nombres de centros reales, estadísticas inventadas presentadas como reales ni afirmaciones sobre normativa vigente. Incluye una pregunta de debate, roles de moderación, argumentación y observación, argumentos contrapuestos y dos falacias habituales con explicación. No impongas posturas personales al alumnado.
Formato de salida: noticia ficticia, pregunta inicial, tarjetas de roles, ejemplos de argumentos y contraargumentos, guía de turnos y tiempos y tres criterios breves de observación. Separa los hechos del relato ficticio de las opiniones sobre ellos.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Los ejemplos distinguen hechos del relato y opiniones sin fingir una noticia real? Comprueba que los argumentos y las falacias sirven al objetivo y no favorecen una postura por defecto.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Añade apoyos para quien encuentra dificultades al intervenir oralmente: tiempo de preparación, inicios de frase, intervención en pareja y aportación escrita que pueda incorporarse al debate. Mantén el objetivo de argumentar y explica cómo observarlo en las diferentes formas de participación.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Una secuencia de debate con apoyos para participar. Aprenderás a definir el formato comunicativo y a adaptarlo sin perder el objetivo de aprendizaje.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
