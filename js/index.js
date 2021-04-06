function preloader() {
    const imagesPaths = [
           "./img/solar_energy.jpg",
           "./img/wind_energy.jpg",
           "./img/hydroelectric_power.jpg"
        ];
    const images = [];
    for (let l = 0; l< imagesPaths.length; l++) {
        images[l] = new Image();
        images[l].src = imagesPaths[l];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", preloader);

let btns = document.querySelectorAll('button');

let dataResource = [
    {
        heading: "Solar Energy",
        bodyText: "Solar energy is the transformation of heat, the energy that comes from the sun. It has been used for thousands of years in many different ways by people all over the world. The oldest uses of solar energy is for heating, cooking, and drying.In solar-panel arrays, hundreds or even thousands of kilowatts of electric power can be generated in a solar electric plant or in a large household array. ",
        imgUrl: "./img/solar_energy.jpg"
    },
    {
        heading: "Wind Energy",
        bodyText: "Wind is a form of solar energy. Winds are caused by the uneven heating of the atmosphere by the sun, the irregularities of the earth's surface, and rotation of the earth. Wind flow patterns are modified by the earth's terrain, bodies of water, and vegetative cover. This wind flow, or motion energy, when \"harvested\" by modern wind turbines, can be used to generate electricity. By the early 21st century most commercial wind turbines functioned at over 90 percent availability, with some even functioning at 98 percent availability.",
        imgUrl: "./img/wind_energy.jpg"
    },
    {
        heading: "Hydroelectric Power",
        bodyText: "Hydroelectric energy, also called hydroelectric power or hydroelectricity, is a form of energy that harnesses the power of water in motion—such as water flowing over a waterfall—to generate electricity. People have used this force for millennia.The conversion efficiency of a hydroelectric power plant depends mainly on the type of water turbine employed and can be as high as 95% for large installations. Smaller plants with output powers less than 5 MW may have efficiencies between 80 and 85 %",
        imgUrl: "./img/hydroelectric_power.jpg"
    }
];

let $content = document.querySelector(".content");

$content.innerHTML = `<div class="heading">
                        <h3>${dataResource[0].heading}</h3>
                      </div>
                      <div class="ge_images">
                        <img src="${dataResource[0].imgUrl}">
                      </div>
                      <div class="text">
                        <p>${dataResource[0].bodyText}</p>
                      </div>`;


function handleEvent(ev) {

    for (let l = 0; l < btns.length; l++) {
        if (btns[l].hasAttribute("id")) {
            btns[l].removeAttribute("id");
            console.log(btns[l]);
        }
    }

    let presentItem = ev.currentTarget;
    presentItem.setAttribute("id", "active");
}

for (let btn of btns) {
    btn.addEventListener("click", handleEvent);
}

function eventHandler(ev) {

    let btnClicked = ev.currentTarget;
    let textBtn = btnClicked.dataset.btn;

    if (textBtn === "PAGE1") {
        $content.innerHTML = `<div class="heading">
                                <h3>${dataResource[0].heading}</h3>
                            </div>
                            <div class="ge_images">
                                <img src="${dataResource[0].imgUrl}" >
                            </div>
                            <div class="text">
                              <p>${dataResource[0].bodyText}</p>
                            </div>`;
    } else if (textBtn === "PAGE2") {
        $content.innerHTML = `<div class="heading">
                                <h3>${dataResource[1].heading}</h3>
                            </div>
                            <div class="ge_images">
                                <img src="${dataResource[1].imgUrl}" >
                            </div>
                            <div class="text">
                                <p>${dataResource[1].bodyText}</p>
                            </div>`;
    } else {
        $content.innerHTML = `<div class="heading">
                                <h3>${dataResource[2].heading}</h3>
                              </div>
                              <div class="ge_images">
                                <img src="${dataResource[2].imgUrl}" >
                              </div>
                              <div class="text">
                                <p>${dataResource[2].bodyText}</p>
                              </div>`;
    }
}

for (let l = 0; l < btns.length; l++) {
    btns[l].addEventListener("click", eventHandler);
}
