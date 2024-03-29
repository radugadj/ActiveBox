 // Получаем ссылку на элемент
        let scrollingElement = document.querySelector('.header');
        // let scrollingElementContainer = document.querySelector('.header__container');
        
        // Функция, которая будет вызываться при прокрутке
        function handleScroll() {
          // Проверяем, насколько прокручена страница по вертикали
          let scrollPosition = window.scrollY;
      
          // Условие, при котором добавляем класс
          if (scrollPosition > 0) {
            scrollingElement.classList.add('scrolled');
            scrollingElementContainer.classList.add('scrolled');
          } else {
            scrollingElement.classList.remove('scrolled');
            scrollingElementContainer.classList.remove('scrolled');
          }
        }
      
        // Добавляем прослушиватель события прокрутки
        window.addEventListener('scroll', handleScroll);

        // Получаем ссылки на элементы
        let menuButton = document.querySelector('.header__toggle-menu');
        let menu = document.querySelector('.nav');

        // // Добавляем слушатели событий
        menuButton.addEventListener('click', toggleMenu);

        // // Функция для открытия/закрытия меню
        function toggleMenu() {
            menu.classList.toggle('open');
            menuButton.classList.toggle('open');
        }

        // // Добавляем слушатель события для каждого пункта меню
        let menuItems = document.querySelectorAll('.menu li');
        menuItems.forEach(function(item) {
            item.addEventListener('click', closeMenu);
        });

         // Функция для закрытия меню
        function closeMenu() {
            menu.classList.remove('open');
        }

        var swiper = new Swiper(".testimonialsSwiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
        });