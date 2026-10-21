---
layout: page
title: "Una sessió per a tot el món"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 10
nav_exclude: true
lang: va
translation_key: bloque1-actividad-educacion-fisica
prompt_lab: true
---

{% include language-switcher.html %}

# Una sessió per a tot el món
{: .fs-7 }

**Educació Física · Proposta transversal d’inclusió**

## Què aconseguirem?

Dissenyaràs jocs cooperatius amb formes diverses de participar. Comprovaràs com incloure espai, seguretat i intensitat en una petició en canvia la viabilitat.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Prepara una classe d’Educació Física.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: Educació Física; sessió de jocs cooperatius, també útil com a proposta transversal d'inclusió.
Alumnat destinatari: grup heterogeni fictici de 2n d'ESO, amb diferents experiències motrius; no atribuïsques diagnòstics ni demanes dades de salut.
Objectiu d'aprenentatge: cooperar per a resoldre reptes motors, acordar estratègies i reconéixer la contribució de cada participant.
Restriccions i condicions: sessió de 50 minuts en pista o gimnàs, amb cons, pilotes blanes i cércols. Inclou calfament, dos jocs cooperatius sense eliminació, tornada a la calma i preguntes finals. Preveu revisió de l'espai i del material, distàncies segures, senyal de parada i alternatives de participació. Evita contacte forçat, comparacions públiques de rendiment i prescripcions individuals; el docent ajustarà l'activitat a les condicions reals del grup.
Format d'eixida: taula amb fases i temps que sumen 50 minuts, recursos i espai, regles clares, normes de seguretat, alternatives i tres criteris d'observació de la cooperació.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Les regles eviten l’eliminació i permeten contribuir de diferents maneres? Revisa la seguretat, l’espai i la suma de temps abans de considerar viable la sessió.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Adapta els dos jocs per a oferir diferents nivells d’intensitat i formes de participació sense excloure ningú. Permet triar i canviar d’opció, incorpora pauses i mantín un objectiu cooperatiu comú. Explica quines condicions ha de comprovar el docent abans de posar-los en pràctica.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Una sessió cooperativa amb opcions d’intensitat i participació. Aprendràs a concretar diversitat, seguretat i condicions pràctiques en el prompt.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
