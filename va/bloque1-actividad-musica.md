---
layout: page
title: "Crea un paisatge sonor"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 8
nav_exclude: true
lang: va
translation_key: bloque1-actividad-musica
prompt_lab: true
---

{% include language-switcher.html %}

# Crea un paisatge sonor
{: .fs-7 }

**Música · ESO**

## Què aconseguirem?

Crearàs una experiència de composició amb objectes quotidians, percussió corporal i sons de l’entorn. Exploraràs com les restriccions poden orientar la creativitat musical.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Prepara una activitat musical.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: Música; creació d'un paisatge sonor que represente un entorn imaginat.
Alumnat destinatari: 2n d'ESO, amb experiències musicals diverses, en xicotets grups.
Objectiu d'aprenentatge: organitzar una seqüència sonora amb contrastos de ritme, intensitat i textura, i representar-la mitjançant una partitura gràfica senzilla.
Restriccions i condicions: experiència de 40 minuts. Materials: paper, llapis, objectes quotidians segurs, percussió corporal i sons de l'entorn recreats pel grup. No depengues d'instruments, mòbils ni gravacions de persones. Inclou treball cooperatiu, repartiment flexible de funcions i límits de volum acordats per a evitar molèsties.
Format d'eixida: objectius musicals, materials, seqüència de creació amb temps que sumen 40 minuts, exemples de ritmes i textures, llegenda de representació gràfica i tres criteris de valoració observables. Inclou assaig, interpretació i escolta comentada.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Els ritmes, les textures i la representació gràfica són comprensibles per a 2n d’ESO? Comprova si la seqüència permet crear, assajar i escoltar en 40 minuts.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Revisa l’activitat per a un grup sense instruments musicals i amb diferents possibilitats de participació. Oferix funcions de creació, representació gràfica, interpretació i escolta, amb alternatives a la percussió corporal i als sons intensos. Mantín la participació en les decisions musicals i els 40 minuts.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Una seqüència de creació sonora amb partitura gràfica i funcions flexibles. Aprendràs a orientar la creativitat amb recursos, temps i condicions de participació.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
