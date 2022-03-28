import imgOcean from "./images/fondAppliOcean.jpeg";
import imgDesert from "./images/desert.jpeg"

import imgJungle from "./images/fondEnvironnementCards.webp"
import imgAnimal from "./images/fondAnimalCards.jpeg"
import imgHumanitaire from "./images/fondHumanitaireCards.webp"


let asso = [
  {
    id: "1",
    className: "categoriesEnvironnement",
    img: imgJungle,
    title: "Bloom",
    text: "Description assez nul pour dire que c'est une association qui protège les mers et les océans je crois car j'ai recherché sur internet",
    link: "https://bloomassociation.org/",
    categorie: "Environnement",
    favoris: false
  },
  {
    id: "2",
    className: "categoriesHumanitaire",
    img: imgHumanitaire,
    title: "Générations futures",
    text: "Description assez nul pour dire que c'est une association qui protège la nature, les forêts etc je crois car j'ai recherché sur internet",
    link: "https://www.generations-futures.fr/",
    categorie: "Humanitaire",
    favoris: true
  },
  {
    id: "3",
    className: "categoriesAnimalier",
    img: imgHumanitaire,
    title: "Enfant du Désert",
    text: "Description assez nul pour dire que c'est une association qui aide à construire des écoles dans le désert marocain pour offrir une éducations aux enfants",
    link: "https://enfantsdudesert.org",
    categorie: "Humanitaire",
    favoris: false
  },
  {
    id: "4",
    className: "categoriesEnvironnement",
    img: imgJungle,
    title: "Sea Optimism",
    text: "Notre but premier est de protéger les océans. Nous sommes particulièrement sensibles à la pollution plastique et essayons de limiter son arrivée dans l’océan. ",
    link: "https://seaoptimism.wordpress.com",
    categorie: "Environnement",
    favoris: false
  },
  {
    id: "5",
    className: "categoriesEnvironnement",
    img: imgJungle,
    title: "France Nature Environnement",
    text: "Fondée en 1968, reconnue d’utilité publique en 1976, France Nature Environnement se bat pour la protection de la nature et de l’environnement",
    link: "https://fne.asso.fr",
    categorie: "Environnement",
    favoris: false
  },
  {
    id: "6",
    className: "categoriesHumanitaire",
    img: imgHumanitaire,
    title: "Croix Rouge",
    text: "En tant qu’acteur clé de la société, nous fournissons des services humanitaires, de santé, sociaux, de bien-être et de formation.",
    link: "https://www.croix-rouge.fr",
    categorie: "Humanitaire",
    favoris: false
  },
  {
    id: "7",
    className: "categoriesAnimalier",
    img: imgAnimal,
    title: "La SPA",
    text: "Pour toutes les fois où ils nous ont sauvé la mise et nous ont apporté tendresse, joie, réconfort. Parce qu’ils le méritent tant, donnons-leur autant qu’ils nous apportent !",
    link: "https://WWW.la-spa.fr",
    categorie: "Animalier",
    favoris: false
  },
  {
    id: "8",
    className: "categoriesAnimalier",
    img: imgAnimal,
    title: "ASPAS",
    text: "ASPAS est une association reconnue d’utilité publique et 100 % indépendante : une exception dans le paysage associatif de la protection de la nature.",
    link: "https://www.aspas-nature.org",
    categorie: "Animalier",
    favoris: false
  },
  {
    id: "9",
    className: "categoriesAnimalier",
    img: imgAnimal,
    title: "C'est Assez !",
    text: "L’association « C’est assez ! » s’adresse à toutes les personnes concernées par la cause animale et plus particulièrement par la défense des cétacés captifs (dauphins, bélugas et orques).",
    link: "https://www.cestassez.fr",
    categorie: "Animalier",
    favoris: false
  },

];

export default asso;