---
layout: page
title: "Podem fiar-nos d’esta explicació?"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 6
nav_exclude: true
lang: va
translation_key: bloque1-actividad-historia
prompt_lab: true
---

{% include language-switcher.html %}

# Podem fiar-nos d’esta explicació?
{: .fs-7 }

**Geografia i Història · ESO i Batxillerat**

## Què aconseguirem?

Crearàs una activitat per a contrastar explicacions sobre la Revolució Industrial. Distingiràs una resposta convincent d’una explicació amb el suport d’evidències.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Explica’m les causes de la Revolució Industrial.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: Geografia i Història; investigació sobre les causes i les conseqüències de la Revolució Industrial.
Alumnat destinatari: 4t d'ESO, amb coneixements bàsics del segle XVIII i del canvi social.
Objectiu d'aprenentatge: contrastar cinc afirmacions i distingir fets, interpretacions i explicacions simplificades.
Restriccions i condicions: una sessió de 50 minuts en parelles amb accés a fonts seleccionades pel docent. Formula cinc afirmacions verificables, situa-les en el seu context històric i inclou preguntes d'investigació. Proposa fonts fiables i explica quina evidència cal buscar en cada una. No inventes referències bibliogràfiques, cites ni enllaços; si no pots comprovar una referència, marca-la com a pendent i suggerix una cerca en catàlegs de biblioteques, arxius o museus. No presentes les afirmacions com a verificades només perquè les genera la IA.
Format d'eixida: context breu, cinc afirmacions numerades, preguntes d'investigació i taula buida amb columnes per a afirmació, font consultada, evidència, interpretació i conclusió provisional. Acaba amb dues preguntes de reflexió.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Cada afirmació es pot contrastar i les fonts proposades existixen? Verifica almenys una afirmació en una font independent i identifica les interpretacions discutibles.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Distingix en les cinc afirmacions els fets, les interpretacions i allò que necessita verificació documental. Explica quina evidència permetria contrastar-les, assenyala incerteses i elimina qualsevol referència que no pugues acreditar. No confongues la classificació amb una verificació ja feta.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Una fitxa d’investigació i contrast d’evidències. Aprendràs a demanar fonts comprovables, reconéixer incerteses i detectar possibles al·lucinacions.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
