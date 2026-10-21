---
layout: page
title: "¿Qué oferta conviene realmente?"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 1
nav_exclude: false
lang: es
translation_key: bloque1-actividad-matematicas
prompt_lab: true
---

{% include language-switcher.html %}

# ¿Qué oferta conviene realmente?
{: .fs-7 }

**Matemáticas · ESO**

## ¿Qué vamos a conseguir?

Compararás cómo mejora una actividad de porcentajes cuando defines el nivel, el objetivo y las condiciones. Prepararás un borrador para analizar ofertas sin confundir el reclamo publicitario con el ahorro real.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Prepara ejercicios de porcentajes.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: Matemáticas, comparación de ofertas ficticias para comprar el mismo modelo de teléfono móvil en tres establecimientos.
Alumnado destinatario: 3.º de ESO; grupo heterogéneo que conoce porcentajes sencillos y necesita practicar descuentos sucesivos.
Objetivo de aprendizaje: calcular precios finales y justificar qué oferta conviene, distinguiendo descuentos sucesivos de la suma de porcentajes.
Restricciones y condiciones: actividad de 30 minutos en parejas, con papel y calculadora. Usa precios ficticios en euros y condiciones de compra comparables, sin financiación. Incluye tres niveles de dificultad (apoyo, práctica y ampliación), errores frecuentes, soluciones razonadas y dos preguntas de pensamiento crítico sobre publicidad. Explicita el criterio de redondeo a céntimos y comprueba los cálculos. No uses ofertas comerciales reales.
Formato de salida: ficha breve con tabla de tres ofertas, tareas por nivel y dos preguntas críticas; separa las soluciones para el profesorado. Distribuye los 30 minutos entre las tareas.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Los precios finales y los descuentos sucesivos son correctos? Recalcula una oferta con calculadora; una respuesta más detallada no garantiza mayor precisión.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Revisa los cálculos de las tres ofertas, muestra las operaciones y comprueba el redondeo. Corrige cualquier incoherencia y añade una pregunta que exija justificar por qué una oferta es mejor bajo las condiciones dadas. Mantén los 30 minutos.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Una ficha de comparación de ofertas y soluciones que habrás contrastado. Aprenderás a pedir precisión matemática mediante contexto, restricciones y criterios verificables.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
