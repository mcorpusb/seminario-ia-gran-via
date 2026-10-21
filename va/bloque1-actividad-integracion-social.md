---
layout: page
title: "Dissenyar una intervenció inclusiva"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 5
nav_exclude: true
lang: va
translation_key: bloque1-actividad-integracion-social
prompt_lab: true
---

{% include language-switcher.html %}

# Dissenyar una intervenció inclusiva
{: .fs-7 }

**Integració Social · FP**

## Què aconseguirem?

Elaboraràs un supòsit de participació en un centre comunitari fictici. Aprendràs a demanar propostes que incorporen la veu de les persones i permeten detectar barreres i biaixos.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Prepara una activitat d’inclusió social.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: cicle de grau superior d'Integració Social; un equip ha de millorar la participació en un centre comunitari fictici.
Alumnat destinatari: alumnat que s'inicia en el disseny d'intervencions socioeducatives i treballa en xicotets equips.
Objectiu d'aprenentatge: identificar barreres de participació, proposar actuacions acordades amb les persones participants i avaluar si milloren l'accés i la capacitat de decisió.
Restriccions i condicions: supòsit per a analitzar en 50 minuts, amb una intervenció simulada de quatre setmanes. Usa només casos i perfils ficticis, sense diagnòstics individuals. Inclou necessitats d'accessibilitat física, comunicativa i d'organització, sense associar-les automàticament a un col·lectiu. Recursos ficticis: sala polivalent, materials impresos de lectura clara, dos professionals i 300 euros. No pressuposes preferències ni necessitats sense consultar les persones.
Format d'eixida: context, barreres i necessitats per contrastar, dos objectius d'intervenció, activitats participatives, recursos i temporalització. Afig una taula amb tres indicadors observables, com arreplegar-los sense dades personals i limitacions de l'avaluació.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Les persones participen en les decisions o només reben ajuda? Comprova si els indicadors observen participació real i si els recursos permeten executar la proposta.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Revisa possibles biaixos, estereotips i plantejaments paternalistes. Assenyala les expressions problemàtiques, proposa alternatives i afig un mecanisme accessible perquè les persones fictícies puguen triar, opinar i rebutjar una activitat. Mantín els recursos i els terminis.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Un pla d’intervenció fictici amb barreres, actuacions i indicadors revisats. Aprendràs a demanar un enfocament inclusiu i a detectar biaixos en la resposta.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
