---
layout: page
title: "Diseña una vivienda sostenible"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 2
nav_exclude: false
lang: es
translation_key: bloque1-actividad-edificacion
prompt_lab: true
---

{% include language-switcher.html %}

# Diseña una vivienda sostenible
{: .fs-7 }

**Edificación y Obra Civil · FP**

## ¿Qué vamos a conseguir?

Convertirás una petición genérica en un supuesto profesional de rehabilitación. Aprenderás a separar los datos didácticos de los valores técnicos que necesitan comprobación.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Prepara una actividad sobre construcción sostenible.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: un ciclo de grado superior de Edificación y Obra Civil; caso profesional de rehabilitación de una vivienda ficticia.
Alumnado destinatario: alumnado con conocimientos iniciales sobre materiales, superficies y transmisión térmica.
Objetivo de aprendizaje: comparar dos soluciones constructivas para mejorar el aislamiento térmico y justificar una elección con criterios técnicos y económicos.
Restricciones y condiciones: trabajo en parejas durante 50 minutos. Describe la vivienda y unas condiciones climáticas ficticias. Propón dos materiales o sistemas, superficies, espesores y datos técnicos simplificados con unidades, todos identificados como supuestos didácticos. Incluye un presupuesto orientativo con importes ficticios, cantidades, precios unitarios y alcance del coste. Evita atribuir prestaciones oficiales a productos. No inventes normativas ni certificaciones; indica qué fichas técnicas y referencias normativas deberá consultar y verificar el docente antes de aplicarlo.
Formato de salida: ficha del encargo, tabla comparativa de materiales, prestaciones y costes, instrucciones de cálculo, criterios de selección y modelo breve de justificación. Separa la guía docente y señala las limitaciones de la simplificación.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Las unidades, superficies y costes de ambas soluciones son coherentes y comparables? Comprueba un cálculo y marca los datos que requieren una ficha técnica o fuente oficial.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Prepara una versión más técnica como ampliación opcional: explicita los supuestos y las fórmulas utilizadas, revisa unidades y cálculos y distingue los datos ficticios de los que exigen verificación externa. Señala qué conclusiones no pueden obtenerse con estos datos. No presentes la revisión de la IA como una certificación.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Un supuesto profesional con tabla de alternativas y presupuesto didáctico revisable. Aprenderás a contextualizar un encargo técnico y a exigir trazabilidad y verificación.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
