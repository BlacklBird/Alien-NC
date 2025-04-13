document.addEventListener('DOMContentLoaded', () => {
    const rightNav = document.getElementById('rightNav');
    const toggleBtn = document.getElementById('toggleBtn');
    const iconMenu = toggleBtn.querySelector('.icon-menu');
  
    const lineTop = iconMenu.querySelector('.line_top');
    const lineMid = iconMenu.querySelector('.line_mid');
    const lineBot = iconMenu.querySelector('.line_bot');
  
    let expanded = false;
  
    toggleBtn.addEventListener('click', () => {
      expanded = !expanded;
    //   rightNav.style.gridTemplateColumns = expanded ? '3fr 2fr' : '3fr 1fr';
      rightNav.classList.toggle('nothidden', expanded);
      rightNav.classList.toggle('hidden', !expanded);  

      if (expanded) {
      gsap.to(lineTop, {
        duration: 0.4,
        attr: {
          x1: 21.9393,
          y1: 46.3952,
          x2: 47.3952,
          y2: 20.9394,
        },
        ease: "power2.inOut"
      });

      gsap.to(lineMid, {
        duration: 0.3,
        opacity: 1,
        ease: "power2.inOut"
      });

      gsap.to(lineBot, {
        duration: 0.4,
        attr: {
          x1: 22.8754,
          y1: 21.0233,
          x2: 48.3312,
          y2: 46.4792,
        },
        ease: "power2.inOut"
      });

    } else {
      gsap.to(lineTop, {
        duration: 0.4,
        attr: {
          x1: 17,
          y1: 47.5,
          x2: 53,
          y2: 47.5,
        },
        ease: "power2.inOut"
      });

      gsap.to(lineMid, {
        duration: 0.3,
        opacity: 1,
        ease: "power2.inOut"
      });

      gsap.to(lineBot, {
        duration: 0.4,
        attr: {
          x1: 17,
          y1: 19.5,
          x2: 53,
          y2: 19.5,
        },
        ease: "power2.inOut"
      });
    }
  });
});

document.querySelectorAll('.left_nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.left_nav a').forEach(a => a.classList.remove('active'));

        this.classList.add('active');

        // Cibler la section
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const container = document.querySelector('.info_content');

        if (targetElement && container) {
            container.scrollTo({
                top: targetElement.offsetTop - container.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelectorAll('.toggle-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.section-planete');
    planets.forEach((planet, index) => {
      if (index % 2 === 1) {
        planet.classList.add('reverse');
      }
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const blocs = document.querySelectorAll(".maison-container .maison-bloc");

    blocs.forEach((bloc, index) => {
      bloc.classList.add(index % 2 === 0 ? "gauche" : "droite");
    });
  });
