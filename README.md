# Puissance-4

Introduction_ _ _ _ _ __ _ _ _ _
Vous allez devoir réaliser un jeu en utilisant la librairie jQuery reprenant les règles du célèbre jeu de Puissance4.

Règles_ _ _ _ _ __ _ _ _ _
Pour ceux qui ignorent les règles de ce jeu, elles sont simples et reprennent en partie celles du morpion :
•Il s’agit d’un jeu à deux joueurs (traditionnellement les rouges et les jaunes)
•La surface du jeu est une grille de dimensions variables
•Tour à tour les deux joueurs placent un pion dans la colonne de leur choix, le pion coulisse alors à laposition la plus basse possible dans la-dite colonne. C’est ensuite à l’adversaire de jouer
•Une pièce ne peut pas se poser en dehors des dimensions de la grille
•Quand un joueur aligne à la suite au moins 4 de ses pièces horizontalement, verticalement, ou endiagonale, il remporte la partie
•Une victoire de l’un des joueurs met fin à la partie
•S’il n’y a plus de case de la grille disponible ou de possibilités de victoire pour aucuns des joueurs, lapartie est déclarée nulle

Contraintes techniques_ _ _ _ _ __ _ _ _ _
Votre projet devra se présenter obligatoirement sous la forme d’un plugin jQuery.Il sera alors modulable et donc possible de lui passer au minimum les options suivantes:
•Le nombre de cases que comportera votre grille (en x et en y)
•Les couleurs des joueurs (bien sûr, il ne doit pas être possible que les deux joueurs aient la mêmecouleur !)
