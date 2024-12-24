document.addEventListener("DOMContentLoaded", function () {
  // home nav bar
  const nav_home_bar = document.getElementById("nav_home_bar");

  // es_i_p_g_1: ezeescore internship projects group 1
  const es_i_p_g_1 = document.getElementById("es_i_p_g_1");

  // home nav modules
  let home_modules = [
    { text: "Home", link: "/index.html" },
    { text: "Todo Notes", link: "/html/notes.html" },
  ];

  home_modules.forEach((item) => {
    const navitem = document.createElement("div"); // create a dive for each item
    navitem.className = "home-module";

    const link = document.createElement("a"); // create link
    link.textContent = item.text;
    link.href = item.link;

    navitem.appendChild(link); // add a to div
    nav_home_bar.appendChild(navitem); // add navitem to home navbar
  });

  // group 1 ezeescore internship projects nav modules
  let ezeescore_internship_project_group_1 = [
    {
      text: "Presonal Website",
      link: "/html/group_1/personal_website/personal_website.html",
    },
    { text: "Login", link: "/html/group_1/login.html" },
    { text: "Placeholder", link: "" },
    { text: "Placeholder", link: "" },
    { text: "Placeholder", link: "" },
    { text: "Placeholder", link: "" },
    { text: "Placeholder", link: "" },
    { text: "Placeholder", link: "" },
  ];

  ezeescore_internship_project_group_1.forEach((item) => {
    const navitem = document.createElement("div"); // create a dive for each item
    navitem.className = "home-module";

    const link = document.createElement("a"); // create link
    link.textContent = item.text;
    link.href = item.link;

    navitem.appendChild(link); // add a to div
    es_i_p_g_1.appendChild(navitem); // add navitem to home navbar
  });
});
