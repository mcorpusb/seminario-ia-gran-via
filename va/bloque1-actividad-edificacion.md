---
layout: page
title: "Dissenya una vivenda sostenible"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 2
nav_exclude: true
lang: va
translation_key: bloque1-actividad-edificacion
prompt_lab: true
---

{% include language-switcher.html %}

# Dissenya una vivenda sostenible
{: .fs-7 }

**Edificació i Obra Civil · FP**

## Què aconseguirem?

Convertiràs una petició genèrica en un supòsit professional de rehabilitació. Aprendràs a separar les dades didàctiques dels valors tècnics que necessiten comprovació.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Prepara una activitat sobre construcció sostenible.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: un cicle de grau superior d'Edificació i Obra Civil; cas professional de rehabilitació d'una vivenda fictícia.
Alumnat destinatari: alumnat amb coneixements inicials sobre materials, superfícies i transmissió tèrmica.
Objectiu d'aprenentatge: comparar dues solucions constructives per a millorar l'aïllament tèrmic i justificar una elecció amb criteris tècnics i econòmics.
Restriccions i condicions: treball en parelles durant 50 minuts. Descriu la vivenda i unes condicions climàtiques fictícies. Proposa dos materials o sistemes, superfícies, grossàries i dades tècniques simplificades amb unitats, tots identificats com a supòsits didàctics. Inclou un pressupost orientatiu amb imports ficticis, quantitats, preus unitaris i abast del cost. Evita atribuir prestacions oficials a productes. No inventes normatives ni certificacions; indica quines fitxes tècniques i referències normatives haurà de consultar i verificar el docent abans d'aplicar-ho.
Format d'eixida: fitxa de l'encàrrec, taula comparativa de materials, prestacions i costos, instruccions de càlcul, criteris de selecció i model breu de justificació. Separa la guia docent i assenyala les limitacions de la simplificació.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Les unitats, les superfícies i els costos de les dues solucions són coherents i comparables? Comprova un càlcul i marca les dades que requerixen una fitxa tècnica o una font oficial.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Prepara una versió més tècnica com a ampliació opcional: explicita els supòsits i les fórmules utilitzades, revisa unitats i càlculs i distingix les dades fictícies de les que exigixen verificació externa. Assenyala quines conclusions no es poden obtindre amb estes dades. No presentes la revisió de la IA com una certificació.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Un supòsit professional amb taula d’alternatives i pressupost didàctic revisable. Aprendràs a contextualitzar un encàrrec tècnic i a exigir traçabilitat i verificació.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
