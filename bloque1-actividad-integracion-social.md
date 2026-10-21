---
layout: page
title: "Diseñar una intervención inclusiva"
parent: "Laboratorio de prompts · Elige tu reto docente"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 5
nav_exclude: false
lang: es
translation_key: bloque1-actividad-integracion-social
prompt_lab: true
---

{% include language-switcher.html %}

# Diseñar una intervención inclusiva
{: .fs-7 }

**Integración Social · FP**

## ¿Qué vamos a conseguir?

Elaborarás un supuesto de participación en un centro comunitario ficticio. Aprenderás a pedir propuestas que incorporen la voz de las personas y permitan detectar barreras y sesgos.

{% include prompt-lab-start.html %}

## 1. Primera petición

Envía esta petición en una conversación nueva y guarda la respuesta sin corregirla todavía.

{% capture lab_prompt %}
Prepara una actividad de inclusión social.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Mejoramos el prompt

Identifica los cinco elementos del modelo. Antes de enviarlo, **cambia una condición** para ajustarla a tu contexto, sin datos personales, y anticipa qué debería cambiar en la respuesta. Usa otra conversación con la misma herramienta para facilitar la comparación.

{% capture lab_prompt %}
Contexto educativo: ciclo de grado superior de Integración Social; un equipo debe mejorar la participación en un centro comunitario ficticio.
Alumnado destinatario: alumnado que se inicia en el diseño de intervenciones socioeducativas y trabaja en pequeños equipos.
Objetivo de aprendizaje: identificar barreras de participación, proponer actuaciones acordadas con las personas participantes y evaluar si mejoran el acceso y la capacidad de decisión.
Restricciones y condiciones: supuesto para analizar en 50 minutos, con una intervención simulada de cuatro semanas. Usa solo casos y perfiles ficticios, sin diagnósticos individuales. Incluye necesidades de accesibilidad física, comunicativa y de organización, sin asociarlas automáticamente a un colectivo. Recursos ficticios: sala polivalente, materiales impresos de lectura clara, dos profesionales y 300 euros. No presupongas preferencias ni necesidades sin consultar a las personas.
Formato de salida: contexto, barreras y necesidades por contrastar, dos objetivos de intervención, actividades participativas, recursos y temporalización. Añade una tabla con tres indicadores observables, cómo recogerlos sin datos personales y limitaciones de la evaluación.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparamos los resultados

- ¿Qué respuesta se ajusta mejor al nivel y al objetivo? Señala un cambio concreto y relaciónalo con la información que has añadido.
- ¿Las personas participan en las decisiones o solo reciben ayuda? Comprueba si los indicadores observan participación real y si los recursos permiten ejecutar la propuesta.
- ¿Qué instrucciones y apoyos son más claros para un grupo diverso? Valora la utilidad real y si el tiempo, el espacio y los recursos hacen viable la propuesta.

## 4. Vamos un paso más allá

Continúa la conversación de la versión contextualizada con esta instrucción. Comprueba tú el cambio: pedir una revisión a la IA no equivale a verificarlo.

{% capture lab_prompt %}
Revisa posibles sesgos, estereotipos y planteamientos paternalistas. Señala las expresiones problemáticas, propón alternativas y añade un mecanismo accesible para que las personas ficticias puedan elegir, opinar y rechazar una actividad. Mantén los recursos y plazos.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexión docente

- ¿Qué ha mejorado y qué errores o limitaciones has detectado?
- ¿Qué modificarías o verificarías antes de utilizar el recurso con tu grupo?
- ¿Qué decisiones no delegarías en la IA y por qué?

## Resultado esperado

Un plan de intervención ficticio con barreras, actuaciones e indicadores revisados. Aprenderás a pedir un enfoque inclusivo y a detectar sesgos en la respuesta.

Conserva las dos peticiones, una muestra de las respuestas y una nota con tu decisión. **Ampliación opcional:** prueba el mismo prompt cambiando solo otra condición y observa su efecto.

[Vuelve al laboratorio y elige otro reto]({{ '/bloque1-actividades.html' | relative_url }})
