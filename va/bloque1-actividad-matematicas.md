---
layout: page
title: "Quina oferta convé realment?"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 1
nav_exclude: true
lang: va
translation_key: bloque1-actividad-matematicas
prompt_lab: true
---

{% include language-switcher.html %}

# Quina oferta convé realment?
{: .fs-7 }

**Matemàtiques · ESO**

## Què aconseguirem?

Compararàs com millora una activitat de percentatges quan definixes el nivell, l’objectiu i les condicions. Prepararàs un esborrany per a analitzar ofertes sense confondre el reclam publicitari amb l’estalvi real.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Prepara exercicis de percentatges.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: Matemàtiques, comparació d'ofertes fictícies per a comprar el mateix model de telèfon mòbil en tres establiments.
Alumnat destinatari: 3r d'ESO; grup heterogeni que coneix percentatges senzills i necessita practicar descomptes successius.
Objectiu d'aprenentatge: calcular preus finals i justificar quina oferta convé, distingint els descomptes successius de la suma de percentatges.
Restriccions i condicions: activitat de 30 minuts en parelles, amb paper i calculadora. Usa preus ficticis en euros i condicions de compra comparables, sense finançament. Inclou tres nivells de dificultat (suport, pràctica i ampliació), errors freqüents, solucions raonades i dues preguntes de pensament crític sobre publicitat. Explicita el criteri d'arredoniment a cèntims i comprova els càlculs. No uses ofertes comercials reals.
Format d'eixida: fitxa breu amb taula de tres ofertes, tasques per nivell i dues preguntes crítiques; separa les solucions per al professorat. Distribuïx els 30 minuts entre les tasques.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Els preus finals i els descomptes successius són correctes? Recalcula una oferta amb calculadora; una resposta més detallada no garantix més precisió.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Revisa els càlculs de les tres ofertes, mostra les operacions i comprova l’arredoniment. Corregix qualsevol incoherència i afig una pregunta que exigisca justificar per què una oferta és millor en les condicions donades. Mantín els 30 minuts.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Una fitxa de comparació d’ofertes i solucions que hauràs contrastat. Aprendràs a demanar precisió matemàtica mitjançant context, restriccions i criteris verificables.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
