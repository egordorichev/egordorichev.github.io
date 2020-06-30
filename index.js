const daysPerYear = 365;
const msPerDay = 1000 * 60 * 60 * 24;

function daysBetween(date1, date2) {
  return Math.round(Math.floor((date2.getTime() - date1.getTime()) / msPerDay) / daysPerYear);
}

let age = document.getElementById("age");

if (age) {
  age.innerHTML = daysBetween(new Date(2002, 6, 29), new Date())
}

let projects = document.getElementById("projects");

if (projects != null) {
  const data = [
    {
      name : "Burning Knight",
      link : "https://store.steampowered.com/app/851150/Burning_Knight/",
      tags : [ "C#", "MonoGame", "Roguelike" ],
      image : "https://store.steampowered.com/gfxproxy/betagfx/apps/851150/extras/ezgif-7-3ab4dbfc2172.gif?t=1589970078"
    },

    {
      name : "Burning Knight",
      link : "https://store.steampowered.com/app/851150/Burning_Knight/",
      tags : [ "C#", "MonoGame", "Roguelike" ],
      image : "https://store.steampowered.com/gfxproxy/betagfx/apps/851150/extras/ezgif-7-3ab4dbfc2172.gif?t=1589970078"
    },

    {
      name : "Burning Knight",
      link : "https://store.steampowered.com/app/851150/Burning_Knight/",
      tags : [ "C#", "MonoGame", "Roguelike" ],
      image : "https://store.steampowered.com/gfxproxy/betagfx/apps/851150/extras/ezgif-7-3ab4dbfc2172.gif?t=1589970078"
    },

    {
      name : "Burning Knight",
      link : "https://store.steampowered.com/app/851150/Burning_Knight/",
      tags : [ "C#", "MonoGame", "Roguelike" ],
      image : "https://store.steampowered.com/gfxproxy/betagfx/apps/851150/extras/ezgif-7-3ab4dbfc2172.gif?t=1589970078"
    },

    {
      name : "Burning Knight",
      link : "https://store.steampowered.com/app/851150/Burning_Knight/",
      tags : [ "C#", "MonoGame", "Roguelike" ],
      image : "https://store.steampowered.com/gfxproxy/betagfx/apps/851150/extras/ezgif-7-3ab4dbfc2172.gif?t=1589970078"
    }
  ];

  for (let i = 0; i < data.length; i++) {
    let info = data[i];
    let tags = "";

    for (let j = 0; j < info.tags.length; j++) {
      tags += `<a href="#">${info.tags[j]}</a>${j == info.tags.length - 1 ? "" : ", "}`;
    }

    let div = document.createElement("div");
    div.classList.add("project");

    div.innerHTML = `
    <h3><a href="${info.link}">${info.name}</a></h3>
    <img loading="lazy" src="${info.image}"></img>

    <div class="project_info">
      Steal everything you can and flee from the Burning Knight's castle in this action-packed roguelike!
      <div class="tags">
        ${tags}
      </div>
    </div>`;

    projects.appendChild(div);
  }
}

/*
<div class="project">

</div>
*/
