---
layout: page
title: "Una activitat, diferents formes d’aprendre"
parent: "Laboratori de prompts · Tria el teu repte docent"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 4
nav_exclude: true
lang: va
translation_key: bloque1-actividad-orientacion
prompt_lab: true
---

{% include language-switcher.html %}

# Una activitat, diferents formes d’aprendre
{: .fs-7 }

**Orientació educativa i Pedagogia Terapèutica**

## Què aconseguirem?

Prepararàs tres formes de treballar un mateix text de Secundària amb principis del Disseny Universal per a l’Aprenentatge. Compararàs els suports sense rebaixar l’objectiu comú ni infantilitzar el contingut.

{% include prompt-lab-start.html %}

## 1. Primera petició

Envia esta petició en una conversa nova i guarda la resposta sense corregir-la encara.

{% capture lab_prompt %}
Adapta este text per a alumnat amb dificultats.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="inicial" %}

## 2. Millorem el prompt

Identifica els cinc elements del model. Abans d’enviar-lo, **canvia una condició** perquè s’ajuste al teu context, sense dades personals, i anticipa què hauria de canviar en la resposta. Usa una altra conversa amb la mateixa ferramenta per a facilitar la comparació.

{% capture lab_prompt %}
Context educatiu: comprensió lectora sobre sostenibilitat en 1r d'ESO amb principis del Disseny Universal per a l'Aprenentatge.
Alumnat destinatari: grup fictici amb necessitats diverses d'accés al vocabulari, organització de la informació i expressió de respostes; no atribuïsques diagnòstics ni perfils individuals reals.
Objectiu d'aprenentatge: identificar la idea principal, localitzar dues evidències i justificar una mesura d'estalvi d'aigua a partir del mateix text.
Restriccions i condicions: sessió de 35 minuts. Usa el text base inclòs a continuació i no afiges dades com si procediren d'ell. Dissenya tres opcions flexibles: llenguatge clar; suports estructurals o visuals descrits en text; ampliació. Mantín els objectius essencials en totes i permet triar o combinar suports. Inclou preguntes de comprensió, instruccions clares i formes de respondre per escrit, oralment o mitjançant un esquema explicat. Evita etiquetes de capacitat i un to infantil.
Format d'eixida: text base, tres propostes breus amb suports i preguntes, i taula que relacione cada proposta amb l'objectiu comú.
Text base fictici: En un institut imaginari, l'equip de l'hort observa que l'aigua s'evapora abans quan rega al migdia. Proposa regar a primera hora i cobrir part del sòl per a conservar la humitat. Abans de canviar la rutina, acorda observar dues zones semblants durant una setmana i anotar quan s'asseca la terra. L'equip decidirà quina mesura mantindre després de comparar els seus registres. Encara no disposa de resultats.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="pedagogico" %}

## 3. Comparem els resultats

- Quina resposta s’ajusta millor al nivell i a l’objectiu? Assenyala un canvi concret i relaciona’l amb la informació que has afegit.
- Les tres opcions mantenen la idea principal, les evidències i la justificació? Detecta si alguna inventa resultats de l’hort o reduïx l’exigència en lloc d’oferir suports.
- Quines instruccions i suports són més clars per a un grup divers? Valora la utilitat real i si el temps, l’espai i els recursos fan viable la proposta.

## 4. Anem un pas més enllà

Continua la conversa de la versió contextualitzada amb esta instrucció. Comprova tu el canvi: demanar una revisió a la IA no equival a verificar-lo.

{% capture lab_prompt %}
Revisa si les adaptacions infantilitzen el contingut, etiqueten l’alumnat o reduïxen innecessàriament les expectatives. Reescriu el que calga i mostra com cada opció manté l’objectiu essencial. No convertisques l’ampliació en més quantitat d’exercicis ni afiges diagnòstics.
{% endcapture %}
{% include prompt-lab-copy.html text=lab_prompt id="iteracion" %}

## 5. Reflexió docent

- Què ha millorat i quins errors o limitacions has detectat?
- Què modificaries o verificaries abans d’utilitzar el recurs amb el teu grup?
- Quines decisions no delegaries en la IA i per què?

## Resultat esperat

Tres vies d’accés i resposta a una mateixa lectura. Aprendràs a concretar accessibilitat, objectius comuns i criteris pedagògics en el prompt.

Conserva les dues peticions, una mostra de les respostes i una nota amb la teua decisió. **Ampliació opcional:** prova el mateix prompt canviant només una altra condició i observa’n l’efecte.

[Torna al laboratori i tria un altre repte]({{ '/va/bloque1-actividades.html' | relative_url }})
