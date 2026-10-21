---
layout: page
title: "Un dilema ètic sobre la IA"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 9
nav_exclude: true
lang: va
translation_key: bloque1-actividad-valores
prompt_lab: true
---

{% include language-switcher.html %}

# Un dilema ètic sobre la IA
{: .fs-7 }

**Religió, tutoria i valors transversals**

## Què aconseguirem?

Prepararàs un dilema sobre un treball escolar elaborat amb IA sense revisió. Analitzaràs com demanar perspectives plurals sense convertir la resposta de la ferramenta en una autoritat moral.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Crea una activitat sobre ètica i intel·ligència artificial.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: Religió, tutoria o treball transversal de valors; reflexió sobre responsabilitat i honestedat acadèmica.
Alumnat destinatari: 3r d'ESO, grup plural amb experiències i conviccions diverses.
Objectiu d'aprenentatge: identificar responsabilitats, argumentar posicions i proposar formes honestes d'usar IA que preserven l'aprenentatge.
Restriccions i condicions: diàleg de 35 minuts. Crea una història fictícia en què un estudiant entrega un treball elaborat quasi completament amb IA sense revisar-ne el contingut. Presenta diferents posicions sobre autoria, esforç, ajuda i responsabilitat sense imposar una única resposta moral, atribuir creences a col·lectius ni proposar sancions automàtiques. No pressuposes normes del centre: deixa la consulta com a tasca docent.
Format d'eixida: història breu, tres posicions raonades, preguntes de reflexió, pautes de debat respectuós i una plantilla oberta de conclusions amb acords, desacords i qüestions pendents. Distingix la responsabilitat pel contingut del simple ús d'una ferramenta.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Les posicions estan representades amb equilibri i permeten discrepar? Identifica estereotips, judicis tancats o normes del centre que la IA haja suposat.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Afig dues perspectives que falten i revisa possibles biaixos en la història i en les preguntes. Reformula les preguntes que conduïsquen a una resposta moral predeterminada. Conserva la reflexió sobre responsabilitat, honestedat i aprenentatge, sense convertir el debat en una votació sobre una persona real.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Un dilema fictici amb perspectives i preguntes revisades. Aprendràs a demanar equilibri, detectar biaixos i reservar al docent la conducció del diàleg ètic.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
