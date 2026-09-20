# Exercices — Module 01 — Exemple

> **Donnée fictive** — Ce document contient des données de démonstration uniquement.

---

## Navigation

<div class="tssr-breadcrumb">
  <a class="tssr-breadcrumb__link" href="/cours/cours-exemple/module-01/">Module 01 — Exemple</a>
  <span class="tssr-breadcrumb__sep">›</span>
  <span class="tssr-breadcrumb__current">Exercices</span>
</div>

---

## Exercice 1 — QCM

<div class="tssr-exercise-card">
  <span class="tssr-exercise-type">QCM</span>
  <span class="tssr-exercise-difficulty">★ Facile</span>

  <p class="tssr-exercise-question">
    <strong>Question :</strong> Parmi les commandes suivantes, laquelle permet d'afficher le contenu d'un fichier texte ?
  </p>

  <ul class="tssr-exercise-options">
    <li class="tssr-exercise-options__item">a) <code>mkdir</code></li>
    <li class="tssr-exercise-options__item">b) <code>cat</code></li>
    <li class="tssr-exercise-options__item">c) <code>rm</code></li>
    <li class="tssr-exercise-options__item">d) <code>cp</code></li>
  </ul>

  <details>
    <summary>Voir la réponse</summary>
    <div class="tssr-exercise-answer">
      <p class="tssr-exercise-answer__title">Réponse</p>
      <p class="tssr-exercise-answer__content">b) <code>cat</code></p>
    </div>
    <p class="tssr-exercise-explanation">
      <code>cat</code> (concatenate) affiche le contenu d'un fichier sur la sortie standard. <code>mkdir</code> crée un répertoire, <code>rm</code> supprime des fichiers, et <code>cp</code> copie des fichiers.
    </p>
  </details>
</div>

---

## Exercice 2 — Vrai ou Faux

<div class="tssr-exercise-card">
  <span class="tssr-exercise-type">Vrai / Faux</span>
  <span class="tssr-exercise-difficulty">★ Facile</span>

  <p class="tssr-exercise-question">
    <strong>Question :</strong> La commande <code>pwd</code> permet de créer un nouveau répertoire.
  </p>

  <details>
    <summary>Voir la réponse</summary>
    <div class="tssr-exercise-answer">
      <p class="tssr-exercise-answer__title">Réponse</p>
      <p class="tssr-exercise-answer__content">Faux</p>
    </div>
    <p class="tssr-exercise-explanation">
      <code>pwd</code> signifie "print working directory" — il affiche le répertoire de travail courant. La commande pour créer un répertoire est <code>mkdir</code>.
    </p>
  </details>
</div>

---

## Exercice 3 — Diagnostic rapide

<div class="tssr-exercise-card">
  <span class="tssr-exercise-type">Diagnostic rapide</span>
  <span class="tssr-exercise-difficulty">★★ Moyen</span>

  <p class="tssr-exercise-question">
    <strong>Question :</strong> Un utilisateur vous signale qu'il ne peut pas accéder à un fichier. Il obtient le message suivant :<br>
    <code>bash: fichier.txt: Permission non accordée</code><br><br>
    Quelle est la cause la plus probable ?
  </p>

  <details>
    <summary>Voir la réponse</summary>
    <div class="tssr-exercise-answer">
      <p class="tssr-exercise-answer__title">Réponse</p>
      <p class="tssr-exercise-answer__content">L'utilisateur n'a pas les permissions nécessaires sur ce fichier.</p>
    </div>
    <p class="tssr-exercise-explanation">
      Ce message indique un problème de permissions. Les solutions possibles sont : modifier les permissions avec <code>chmod</code>, changer le propriétaire avec <code>chown</code>, ou utiliser <code>sudo</code> si l'administrateur a autorisé l'accès.
    </p>
  </details>
</div>
