---
title: "Projet : créer une machine à café virtuelle (html/css/js)"
description: "Il m'est venu une idée un peu folle : créer une machine à café virtuelle. Mais une vrai machine, qui sert des cafés dans ton écran"
date: 2024-03-15
tags:
  - dev web
  - Projet
---

Cette semaine, il m'est venu une idée un peu folle : **créer une machine à café virtuelle**. Mais une vraie machine ! Je voulais réfléchir à son design, l'intégrer en html/css, et mettre en place des animations pour servir différents cafés. Un projet simple, qui m'a permet de tester une autre façon d'utiliser le css, et de refaire du Javascript.

</br>

## Maintenant que j'ai l'idée, je fais quoi ?

Même si c'est un petit projet, je voulais faire les choses bien. Et surtout, j'avais besoin de mettre des limites à ce challenge : définir les objectifs à atteindre, m'empêcher de partir dans les sens, et surtout de me donner une limite de temps.

<img class="list-element" alt="" src="/img/form-4.png"> Imaginer un design et définir sa palette de couleurs.
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Bosser ma CSS : animations, formes, position...
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Améliorer le nommage des classes et des éléments.
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Coder en JS ES6 (sans utiliser jQuery).
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Avoir un projet qui peut évoluer : de nouvelles boissons, animations, adapter la page sur mobile, ajouter des sons...
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Avoir un projet limité dans le temps : 4-5 jours.

</br>


### 1. Créer un moodboard et une charte graphique

J'ai ouvert un projet Figma, des dizaines d'onglets Pinterest, et j'ai construit un moodboard (planche d'inspiration).
À partir de là, j'avais une idée plus précise du rendu que je voulais, la forme de la machine et de la tasse, les couleurs, et la disposition.

<div class="card-article d-inline-block img-article"  tabindex="-1">
  {% image "./capture-moodboard.png", "" %}
  <p>Capture du moodbard avec les éléments et la charte graphique</p>
</div>

</br>
</br>
</br>

### 2. Réaliser les premières maquettes

À partir du moodboard et de mes sélections, j'ai pu réaliser des morceaux de maquettes des éléments de ma page : 

<img class="list-element" alt="" src="/img/form-4.png"> Machine à café
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Menu
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Tasse
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Design des différents cafés proposés

Ensuite, j'ai mis les différents éléments sur une page. C'était indispensable pour donner une unité au rendu, et cela m'a permis de réfléchir et d'anticiper les étapes à suivre.

<div class="card-article d-inline-block img-article"  tabindex="-1">
  {% image "./capture-maquette-v2.png", "" %}
  <p>Capture de la maquette du projet</p>
</div>

</br>
</br>
</br>


### 3. Initialisation du dépôt et du projet

J'aurai pu bosser directement dans <a href="https://codepen.io/vanessaFayard/" target="_blank" rel="nofollow"> CodePen</a>, ou le garder en local, mais je voulais aussi en profiter pour remplir un peu <a href="https://github.com/vanessaFayard" target="_blank" rel="nofollow"> mon GitHub</a>, et conserver les bonnes pratiques d'un projet web : git, la documentation, le déploiement, la relecture...



</br>

### 4. On code !

Les étapes précédentes m'ont pris environ 2 jours. J'avais hâte de "coder". Comme j'avais ma maquette, la structure HTML/CSS était déjà définie. J'avais les blocs, leurs positions, leurs tailles, leurs couleurs.

J'ai profité de ce projet pour tester la <a href="https://alticreation.com/bem-pour-le-css/" target="_blank" re="nofollow">méthode BEM (Blocks - Elements - Modifiers)</a> pour le nommage des classes. 

Au fur et à mesure, j'ai apporté quelques modifications sur la maquette : c'est comme ça que la cafetière est devenu jaune, et que j'ai retiré les bordures. 


Le projet n'est pas destiné à être responsive, mais j'ai quand même pensé à un affichage de secours.

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 25px;">
<div class="card-article d-inline-block img-article"  tabindex="-1">
  {% image "./capture-projet-final.png", "" %}
  <p>Capture du projet final</p>
</div>
<div class="card-article d-inline-block img-article" tabindex="-1">
  {% image "./capture-mobile.png", "" %}
  <p>Capture de la page en format mobile</p>
</div>
</div>
</br>
</br>

### 5. Les animations et le script JS

Quand j'ai finalisé le plus gros de l'interface, j'ai pu démarrer les animations : 

<img class="list-element" alt="" src="/img/form-4.png"> La tasse qui se remplit avec la couleur + hauteur de liquide souhaité
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Le liquide (café ou lait) qui coule de la machine pour remplir la tasse
</br>
<img class="list-element" alt="" src="/img/form-4.png"> Bonus : le voyant lumineux marche/arrêt de la machine


C'est là qu'est le point complexe du projet : **comment remplir en CSS un contenant arrondi ?**

Je pense qu'il existe plusieurs méthodes, et certaines plus simples, mais pour ce challenge, j'ai privilégié `clip-path: path()`*. J'ai défini ma forme de tasse avec `path()`, et j'ai réalisé la même chose pour la `<div>` qui contient le liquide.
Ainsi, je peux animer de différentes façons, sans voir changer l'arrondi de ma tasse. 

Une fois satisfaite de mes différentes animations, j'ai commencé de coder mon script. J'ai adapté mon html/css pour utiliser des attributs `data`, qui m'ont permis de gérer les différentes étapes de mon script.

_*update : après vérification, l'animation n'était pas fonctionnelle sous Chrome avec `clip-path`. J'ai donc corrigé sur codepen mon scss et j'ai utilisé `border` et `border-radius` pour la forme de la tasse et animer le remplissage._

</br>

## Un petit café ?

Si l'aperçu ne s'affiche pas, vous pouvez retrouver mon projet sur <a href="https://codepen.io/vanessaFayard/full/vYMXbJR" target="_blank" rel="nofollow">Codepen</a>.

<div class="codepen-embed">
<p class="codepen" data-height="800" data-theme-id="dark" data-slug-hash="vYMXbJR" data-user="vanessaFayard" style="height: 700px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/vanessaFayard/pen/vYMXbJR">
  Coffee machine animation - HTML/CSS/JS</a> by Vanessa FAYARD (<a href="https://codepen.io/vanessaFayard">@vanessaFayard</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
</div>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>