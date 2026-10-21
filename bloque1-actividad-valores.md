---
layout: page
title: "Un dilema ético sobre la IA"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 9
nav_exclude: false
lang: es
translation_key: bloque1-actividad-valores
prompt_lab: true
---

{% include language-switcher.html %}

# Un dilema ético sobre la IA
{: .fs-7 }

**Religión, tutoría y valores transversales**

## ¿Qué vamos a conseguir?

Prepararás un dilema sobre un trabajo escolar elaborado con IA sin revisión. Analizarás cómo pedir perspectivas plurales sin convertir la respuesta de la herramienta en una autoridad moral.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Crea una actividad sobre ética e inteligencia artificial.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: Religión, tutoría o trabajo transversal de valores; reflexión sobre responsabilidad y honestidad académica.
Alumnado destinatario: 3.º de ESO, grupo plural con experiencias y convicciones diversas.
Objetivo de aprendizaje: identificar responsabilidades, argumentar posiciones y proponer formas honestas de usar IA que preserven el aprendizaje.
Restricciones y condiciones: diálogo de 35 minutos. Crea una historia ficticia en la que un estudiante entrega un trabajo elaborado casi completamente con IA sin revisar su contenido. Presenta distintas posiciones sobre autoría, esfuerzo, ayuda y responsabilidad sin imponer una única respuesta moral, atribuir creencias a colectivos ni proponer sanciones automáticas. No supongas normas del centro: deja su consulta como tarea docente.
Formato de salida: historia breve, tres posiciones razonadas, preguntas de reflexión, pautas de debate respetuoso y una plantilla abierta de conclusiones con acuerdos, desacuerdos y cuestiones pendientes. Distingue la responsabilidad por el contenido del mero uso de una herramienta.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Las posiciones están representadas con equilibrio y permiten discrepar? Identifica estereotipos, juicios cerrados o normas del centro que la IA haya supuesto.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Añade dos perspectivas que falten y revisa posibles sesgos en la historia y en las preguntas. Reformula las preguntas que conduzcan a una respuesta moral predeterminada. Conserva la reflexión sobre responsabilidad, honestidad y aprendizaje, sin convertir el debate en una votación sobre una persona real.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Un dilema ficticio con perspectivas y preguntas revisadas. Aprenderás a pedir equilibrio, detectar sesgos y reservar al docente la conducción del diálogo ético.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
