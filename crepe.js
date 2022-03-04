let crepe = [
    {
        name: "Farine",
        qty: 63  //grammes
    }, {
        name: "Oeuf",
        qty: 1
    }, {
        name: "Lait",
        qty: 0.2 //Litres
    }, {
        name: "Sucre",
        qty: 0.5 //cuillères a soupe
    }, {
        name: "Beurre",
        qty: 13 //grammes
    }
];

function Crepe() {

    let input = document.getElementById("how-many").value;
    let inf = document.getElementById("how-many");
    let p = document.getElementById("txt-rec");
    let rec = document.getElementById("recette");
    let div = document.getElementById("ingredients");
    let btn = document.getElementById("course-btn");
    let bttn = document.createElement('input');

    if (input < 1 && input != "") {
        input = 1;
        inf.value = input;
    };

    let Farine = crepe[0].qty * input;
    let Oeuf = crepe[1].qty * input;
    let Lait = crepe[2].qty * input;
    let Sucre = crepe[3].qty * input;
    let Beurre = crepe[4].qty * input;

    if (input != "") {

        if (btn == undefined){
        bttn.setAttribute('type', 'button');
        bttn.setAttribute('value', 'Afficher la Recette');
        bttn.setAttribute('id', 'course-btn');
        bttn.setAttribute('onclick', 'RecipeChange()');
        div.appendChild(bttn);

    };


        rec.style.overflowY = "hidden";
        p.style.textAlign = "center";
        p.innerHTML = "Liste de courses : <br/><br/>" + Math.round(Farine * 10) / 10 + "g de Farine<br/><br/>" + Math.round(Oeuf * 10) / 10 + " Oeuf(s)<br/><br/>" + Math.ceil(Lait)+ "L de lait<br/><br/>" + Math.round(Sucre * 10) / 10 + " c. à soupe de Sucre<br/><br/>" + Math.round(Beurre * 10) / 10 + "g de Beurre";        

        document.getElementById("farine").innerText = Math.round(Farine * 10) / 10 + "g de Farine";
        document.getElementById("oeuf").innerText = Math.round(Oeuf * 10) / 10 + " Oeuf(s)";
        document.getElementById("lait").innerText = Math.round(Lait * 10) / 10 + "L de Lait";
        document.getElementById("sucre").innerText = Math.round(Sucre * 10) / 10 + " c. à soupe de Sucre";
        document.getElementById("beurre").innerText = Math.round(Beurre * 10) / 10 + "g de Beurre";

        btn.value = "Afficher la Recette";

    } else {

        div.removeChild(btn)
        document.getElementById("farine").innerText = "";
        document.getElementById("oeuf").innerText = "";
        document.getElementById("lait").innerText = "";
        document.getElementById("sucre").innerText = "";
        document.getElementById("beurre").innerText = "";
        p.innerText = "";

    };


};

function RecipeChange() {

    let rec = document.getElementById("recette");
    let input = document.getElementById("how-many").value;
    let btn = document.getElementById("course-btn");
    let p = document.getElementById("txt-rec");

    let Farine = crepe[0].qty * input;
    let Oeuf = crepe[1].qty * input;
    let Lait = crepe[2].qty * input;
    let Sucre = crepe[3].qty * input;
    let Beurre = crepe[4].qty * input;

    if (btn.value == "Afficher la Recette") {
        rec.style.overflowY = "scroll";
        p.style.textAlign = "left";
        btn.value = "Afficher la Liste des Courses";
        p.innerHTML = "Recette :<br /><br/>Mettez la farine dans un saladier avec le sel et le sucre.<br/><br/>Faites un puits au milieu et versez-y les œufs.<br/><br/>Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit.<br/><br/>Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien.<br/><br/>Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner.<br/><br/>Laissez cuire environ une minute de ce côté et la crêpe est prête.";

    } else {
        rec.style.overflowY = "hidden";
        p.style.textAlign = "center";
        btn.value = "Afficher la Recette";
        p.innerHTML = "Liste de courses : <br/><br/>" + Math.round(Farine * 10) / 10 + "g de Farine<br/><br/>" + Math.round(Oeuf * 10) / 10 + " Oeuf(s)<br/><br/>" + Math.round(Lait * 10) / 10 + "L de lait<br/><br/>" + Math.round(Sucre * 10) / 10 + " c. à soupe de Sucre<br/><br/>" + Math.round(Beurre * 10) / 10 + "g de Beurre";
    };
};
