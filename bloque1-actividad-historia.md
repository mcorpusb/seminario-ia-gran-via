---
layout: page
title: "¿Podemos fiarnos de esta explicación?"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 6
nav_exclude: false
lang: es
translation_key: bloque1-actividad-historia
prompt_lab: true
---

{% include language-switcher.html %}

# ¿Podemos fiarnos de esta explicación?
{: .fs-7 }

**Geografía e Historia · ESO y Bachillerato**

## ¿Qué vamos a conseguir?

Crearás una actividad para contrastar explicaciones sobre la Revolución Industrial. Distinguirás una respuesta convincente de una explicación respaldada por evidencias.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Explícame las causas de la Revolución Industrial.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: Geografía e Historia; investigación sobre las causas y consecuencias de la Revolución Industrial.
Alumnado destinatario: 4.º de ESO, con conocimientos básicos del siglo XVIII y del cambio social.
Objetivo de aprendizaje: contrastar cinco afirmaciones y distinguir hechos, interpretaciones y explicaciones simplificadas.
Restricciones y condiciones: una sesión de 50 minutos en parejas con acceso a fuentes seleccionadas por el docente. Formula cinco afirmaciones verificables, sitúalas en su contexto histórico e incluye preguntas de investigación. Propón fuentes fiables y explica qué evidencia buscar en cada una. No inventes referencias bibliográficas, citas ni enlaces; si no puedes comprobar una referencia, márcala como pendiente y sugiere una búsqueda en catálogos de bibliotecas, archivos o museos. No presentes las afirmaciones como verificadas solo porque las genera la IA.
Formato de salida: contexto breve, cinco afirmaciones numeradas, preguntas de investigación y tabla vacía con columnas para afirmación, fuente consultada, evidencia, interpretación y conclusión provisional. Termina con dos preguntas de reflexión.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Cada afirmación puede contrastarse y las fuentes propuestas existen? Verifica al menos una afirmación en una fuente independiente e identifica las interpretaciones discutibles.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Distingue en las cinco afirmaciones los hechos, las interpretaciones y lo que necesita verificación documental. Explica qué evidencia permitiría contrastarlas, señala incertidumbres y elimina cualquier referencia que no puedas acreditar. No confundas la clasificación con una verificación ya realizada.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Una ficha de investigación y contraste de evidencias. Aprenderás a solicitar fuentes comprobables, reconocer incertidumbres y detectar posibles alucinaciones.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
