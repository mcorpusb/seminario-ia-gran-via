---
layout: page
title: "Un hivernacle intel·ligent"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 3
nav_exclude: true
lang: va
translation_key: bloque1-actividad-tecnologia
prompt_lab: true
---

{% include language-switcher.html %}

# Un hivernacle intel·ligent
{: .fs-7 }

**Tecnologia · ESO**

## Què aconseguirem?

Dissenyaràs un repte de reg automatitzat per a l’hort de l’institut. Comprovaràs com els recursos disponibles i els criteris de funcionament canvien la proposta de la IA.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Dissenya un projecte de tecnologia.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: Tecnologia; disseny d'un xicotet sistema de reg automatitzat per a l'hort escolar.
Alumnat destinatari: 3r d'ESO, amb coneixements inicials de sensors i actuadors, en equips de quatre.
Objectiu d'aprenentatge: explicar i representar la relació entre entrada, control i eixida, i comprovar una seqüència de reg.
Restriccions i condicions: planteja un projecte de tres sessions de 50 minuts amb materials de baix cost, sensor d'humitat i un actuador o sistema de reg. Inclou un pressupost fictici i fases de construcció. Preveu supervisió docent, separació entre l'aigua i les connexions i alimentació de baixa tensió adequada al material; no proposes connexions a la xarxa elèctrica. Assenyala compatibilitats i especificacions que ha de verificar el docent abans de construir.
Format d'eixida: problema inicial, llista de materials, diagrama funcional en text amb fletxes, seqüència de funcionament, pressupost, fases per sessió i mesures de seguretat. Afig tres proves observables: sòl sec, sòl humit i fallada del sensor; indica el comportament esperat.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- El sensor, el control i l’actuador formen un sistema coherent? Comprova si les proves i les mesures de seguretat permeten revisar-ne el funcionament real.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
A l’aula no hi ha prou components electrònics. Adapta el repte mitjançant simulació o maqueta amb targetes d’entrada i eixida. Mantín l’objectiu d’automatització i les tres proves. Distingix què es pot validar amb la maqueta i què només es comprovaria amb un muntatge real.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Un repte tecnològic amb una alternativa viable sense electrònica. Aprendràs a expressar restriccions reals i a demanar alternatives sense perdre l’objectiu.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
