# Exercices — Module 02 — Exemple

> **Donnée fictive** — Ce document contient des données de démonstration uniquement.

---

## Navigation

<div class="tssr-breadcrumb">
  <a class="tssr-breadcrumb__link" href="/cours/cours-exemple/module-02/">Module 02 — Exemple</a>
  <span class="tssr-breadcrumb__sep">›</span>
  <span class="tssr-breadcrumb__current">Exercices</span>
</div>

---

## Exercice 1 — Question courte

<div class="tssr-exercise-card">
  <span class="tssr-exercise-type">Question courte</span>
  <span class="tssr-exercise-difficulty">★ Facile</span>

  <p class="tssr-exercise-question">
    <strong>Question :</strong> Complétez : pour afficher le contenu du fichier <code>config.txt</code> dans le terminal, on utilise la commande ______.
  </p>

  <details>
    <summary>Voir la réponse</summary>
    <div class="tssr-exercise-answer">
      <p class="tssr-exercise-answer__title">Réponse</p>
      <p class="tssr-exercise-answer__content"><code>cat</code></p>
    </div>
    <p class="tssr-exercise-explanation">
      <code>cat config.txt</code> affiche le contenu du fichier. Cette commande est l'une des premières à apprendre en ligne de commande.
    </p>
  </details>
</div>

---

## Exercice 2 — Ordre des étapes

<div class="tssr-exercise-card">
  <span class="tssr-exercise-type">Ordre des étapes</span>
  <span class="tssr-exercise-difficulty">★★ Moyen</span>

  <p class="tssr-exercise-question">
    <strong>Question :</strong> Remettez les étapes suivantes dans l'ordre correct pour créer une structure de répertoires pour un projet web :
  </p>

  <ol class="tssr-exercise-steps">
    <li class="tssr-exercise-steps__item">Créer un répertoire <code>projets/</code> avec <code>mkdir projets</code></li>
    <li class="tssr-exercise-steps__item">Entrer dans le répertoire avec <code>cd projets</code></li>
    <li class="tssr-exercise-steps__item">Créer les sous-répertoires <code>css/</code> et <code>js/</code></li>
    <li class="tssr-exercise-steps__item">Créer un fichier <code>index.html</code> dans le répertoire racine</li>
  </ol>

  <details>
    <summary>Voir la réponse</summary>
    <div class="tssr-exercise-answer">
      <p class="tssr-exercise-answer__title">Réponse</p>
      <p class="tssr-exercise-answer__content">1 → 2 → 3 → 4</p>
    </div>
    <p class="tssr-exercise-explanation">
      On crée d'abord le répertoire principal, on s'y déplace, puis on crée la structure interne (sous-répertoires), et enfin on ajoute les fichiers. L'ordre logique est : créer → naviguer → structurer → remplir.
    </p>
  </details>
</div>

---

## Exercice 3 — Interprétation d'un résultat

<div class="tssr-exercise-card">
  <span class="tssr-exercise-type">Interprétation</span>
  <span class="tssr-exercise-difficulty">★★★ Difficile</span>

  <p class="tssr-exercise-question">
    <strong>Question :</strong> Un étudiant exécute la commande suivante et obtient le résultat suivant. Que pouvez-vous en déduire ?<br><br>
    <div style="background:var(--tssr-code-bg);padding:var(--tssr-space-md);border-radius:var(--tssr-radius-md);font-family:var(--tssr-font-family-code);font-size:var(--tssr-font-size-sm);color:var(--tssr-code-text);overflow-x:auto;white-space:pre;"><code>$ ls -la /etc/ | grep network
drwxr-xr-x  2 root root  4096 sept. 10 08:00 networkd
-rw-r--r--  1 root root  1234 sept. 10 08:00 resolv.conf
-rw-r--r--  1 root root   567 sept. 10 08:00 hosts</code></div>
  </p>

  <details>
    <summary>Voir la réponse</summary>
    <div class="tssr-exercise-answer">
      <p class="tssr-exercise-answer__title">Réponse</p>
      <p class="tssr-exercise-answer__content">Le répertoire <code>/etc/</code> contient des fichiers de configuration réseau. Il y a un répertoire <code>networkd</code> et deux fichiers : <code>resolv.conf</code> (configuration DNS) et <code>hosts</code> (association noms IP).</p>
    </div>
    <p class="tssr-exercise-explanation">
      <code>ls -la</code> liste tous les fichiers (y compris cachés) avec leurs permissions et détails. Le pipe <code>| grep network</code> filtre pour ne garder que les lignes contenant "network". Le résultat montre que le système a des fichiers de configuration réseau dans <code>/etc/</code>.
    </p>
  </details>
</div>
