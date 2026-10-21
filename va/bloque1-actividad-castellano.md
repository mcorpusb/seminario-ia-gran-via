---
layout: page
title: "D’una notícia a un debat"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 7
nav_exclude: true
lang: va
translation_key: bloque1-actividad-castellano
prompt_lab: true
---

{% include language-switcher.html %}

# D’una notícia a un debat
{: .fs-7 }

**Llengua Castellana i Literatura**

## Què aconseguirem?

Dissenyaràs un debat a partir d’una notícia fictícia sobre mòbils en centres educatius. Ajustaràs el format per a treballar arguments, contraarguments i participació oral.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Prepara un debat per a classe.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: Llengua Castellana i Literatura; debat sobre l'ús de telèfons mòbils en centres educatius a partir d'una notícia fictícia.
Alumnat destinatari: 4t d'ESO, amb experiència inicial en textos argumentatius i diferents possibilitats d'intervenció oral.
Objectiu d'aprenentatge: argumentar i contraargumentar amb respecte, distingir fets d'opinions i reconéixer fal·làcies.
Restriccions i condicions: sessió de 45 minuts. Escriu una notícia de 120-150 paraules identificada com a FICTÍCIA, sense noms de centres reals, estadístiques inventades presentades com a reals ni afirmacions sobre normativa vigent. Inclou una pregunta de debat, rols de moderació, argumentació i observació, arguments contraposats i dues fal·làcies habituals amb explicació. No imposes postures personals a l'alumnat.
Format d'eixida: notícia fictícia, pregunta inicial, targetes de rols, exemples d'arguments i contraarguments, guia de torns i temps i tres criteris breus d'observació. Separa els fets del relat fictici de les opinions sobre estos.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Els exemples distingixen fets del relat i opinions sense fingir una notícia real? Comprova que els arguments i les fal·làcies servixen a l’objectiu i no afavorixen una postura per defecte.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Afig suports per a qui té dificultats a l’hora d’intervindre oralment: temps de preparació, inicis de frase, intervenció en parella i aportació escrita que es puga incorporar al debat. Mantín l’objectiu d’argumentar i explica com observar-lo en les diferents formes de participació.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Una seqüència de debat amb suports per a participar. Aprendràs a definir el format comunicatiu i a adaptar-lo sense perdre l’objectiu d’aprenentatge.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
