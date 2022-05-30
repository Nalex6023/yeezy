gsap.fromTo(
  ".img10",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 0.2 }
);
gsap.fromTo(
  ".img9",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 0.4 }
);
gsap.fromTo(
  ".img8",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 0.6 }
);
gsap.fromTo(
  ".img7",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 0.8 }
);
gsap.fromTo(
  ".img6",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 1 }
);
gsap.fromTo(
  ".img5",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 1.2 }
);
gsap.fromTo(
  ".img4",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 1.4 }
);
gsap.fromTo(
  ".img3",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 1.6 }
);
gsap.fromTo(
  ".img2",
  { opacity: 1 },
  { opacity: 0, display: "block", duration: 0.4, delay: 1.8 }
);
gsap.fromTo(".img1", { top: "50%" }, { top: "65%", width: "90rem", delay: 2 });
gsap.fromTo(".text h1", { y: 200 }, { y: 0, delay: 2.1, ease: "back.out(1)" });
const scroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "3%",
    end: "80% ",
    scrub: true,
  },
});
scroll.fromTo(
  ".text h1",
  {},
  { "font-size": "3rem", position: "fixed", top: " 5%" }
);
const scroll2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    start: "-80%",
    end: "-70% ",
  },
});
scroll2.fromTo(".img-1", { opacity: 0 }, { opacity: 1, duration: 0.1 });
scroll2.fromTo(".img-2", { opacity: 0 }, { opacity: 1, duration: 0.1 });
scroll2.fromTo(".img-3", { opacity: 0 }, { opacity: 1, duration: 0.1 });
scroll2.fromTo(".img-4", { opacity: 0 }, { opacity: 1, duration: 0.1 });
const scroll3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    scrub: true,
    start: "-10%",
    end: "-9% ",
  },
});
const scroll4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    scrub: true,
    start: "-30%",
    end: "40% ",
  },
});

scroll3.to(".text h1", { display: "none" });
scroll4.to(".imgs", { x: -1000, duration: 1 });
const scroll5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    scrub: true,
    start: "70%",
    end: "80% ",
  },
});
scroll5.to(
  "body",

  { "background-color": "#B5BEC6" }
);
const cursor = document.querySelector(".cursor-inner");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});
const name1 = document.querySelector(".name1");
const nameh1 = document.querySelector(".name1 h3");
const name2 = document.querySelector(".name2");
const nameh2 = document.querySelector(".name2 h3");
const name3 = document.querySelector(".name3");
const nameh3 = document.querySelector(".name3 h3");
const name4 = document.querySelector(".name4");
const nameh4 = document.querySelector(".name4 h3");
const name5 = document.querySelector(".name5");
const nameh5 = document.querySelector(".name5 h3");
const name6 = document.querySelector(".name6");
const nameh6 = document.querySelector(".name6 h3");
const hover = function (x, y, z) {
  x.addEventListener("mousemove", function () {
    cursor.classList.add("hover2");
    cursor.style.backgroundImage = z;
    y.style.color = "white";
    y.style.opacity = 0.4;
  });
  x.addEventListener("mouseleave", function () {
    cursor.classList.remove("hover2");
    y.style.color = "black";
    y.style.opacity = 1;
  });
};
hover(name1, nameh1, "url(img7.png)");
hover(name2, nameh2, "url(img6.png)");
hover(name3, nameh3, "url(img15.png)");
hover(name4, nameh4, "url(img16.png)");
hover(name5, nameh5, "url(img13.png)");
hover(name6, nameh6, "url(img11.png)");
