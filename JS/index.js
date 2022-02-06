//Selection all the buttons
var button = document.querySelectorAll(".btn");
//Selecting all the ansewers section
var ans = document.querySelectorAll(".answers");

//Storing all the answers in an array form
const answer = [{
        id: 1,
        text: "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post - ironic street art."
    },
    {
        id: 2,
        text: "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch,enamel pin thundercats fashion axe roof party polaroid chartreuse."
    },
    {
        id: 3,
        text: "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it,lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
    },
    {
        id: 4,
        text: "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid.Knausgaard cronut succulents, scenester readymade shabby chic lyft.Copper mug meh vegan gentrify."
    },
    {
        id: 5,
        text: "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braidchillwave waistcoat copper mug messenger bag.Banjo snackwave blog, microdosing thundercats migas vaporware viral lo - fi seitan "
    }
];

//Finding the length of button
var btnLen = button.length;

for (let i = 0; i < btnLen; i++) {

    //Adding click event on all the buttons
    button[i].addEventListener("click", function () {
        ans[i].classList.toggle("active"); //Adding new class active on all the answer section
        ans[i].innerHTML = answer[i].text; //Displaying the answers in the anser section
        if (button[i].innerHTML == "+") {
            button[i].innerHTML = "-";
        } else {
            button[i].innerHTML = "+";
        }
    })
}