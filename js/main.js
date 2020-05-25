/*document.addEventListener("DOMContentLoaded", function (event) {
	const modal = document.querySelector('.modal');
	const modalBtn = document.querySelectorAll('[data-toggle=modal]');
	const closeBtn = document.querySelector('.modal__close');
	const switchModal = () => {
		modal.classList.toggle('modal--visible');
	}

	modalBtn.forEach(element => {
		element.addEventListener('click', switchModal);
	});

	closeBtn.addEventListener('click', switchModal);

});*/

$(document).ready(function () {
	var modal = $('.modal'),
			modalBtn = $('[data-toggle=modal]'),
			closeBtn = $('.modal__close');

	modalBtn.on('click', function() {
		modal.toggleClass('modal--visible');
	});
	closeBtn.on('click', function() {
		modal.toggleClass('modal--visible');
	});

	var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    pagination: {
	    el: '.swiper-pagination',
	    type: 'bullets',
  	},
  	navigation: {
	    nextEl: '.swiper-button-next',
	    prevEl: '.swiper-button-prev',
  	},
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20)
  bullets.css('left', prev.width() + 20)

  new WOW().init();

  // валидация формы
  $('.modal__form').validate({
  	errorClass: "invalid",
  	rules: { 
  		//строчное правило
  		userName: {
  			required: true,
  			minlength: 2
  		},
  		userPhone: "required",
  		//правило-объект (блок)
			userEmail: {
				required: true,
				email: true
			}
		},
		//сообщения
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче двух букв"
			},
			userPhone: "Телефон обязателен",
			userEmail: {
				required: "Обязательно укажите email",
				email: "Введите в формате name@domain.com"
			}
		},
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: "send.php",
				data: $(form).serialize(),
				success: function (response) {
					alert('Форма отправлена, мы свяжемся с вами в ближайшее время');
					$(form)[0].reset();
					modal.removeClass('modal--visible');
				}
			});
		}

  });

  $('.footer__form').validate({
  	errorClass: "invalid",
  	rules: {
  		//строчное правило
  		userName: {
  			required: true,
  			minlength: 2
  		},
  		userPhone: "required",
  		userQuestion: "required"
		},
		//сообщения
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче двух букв"
			},
			userPhone: "Телефон обязателен",
			userQuestion: "Укажите вопрос"
		}

  });

  $('.control__form').validate({
  	errorClass: "invalid",
  	rules: {
  		//строчное правило
  		userName: {
  			required: true,
  			minlength: 2
  		},
  		userPhone: "required",
		},
		//сообщения
		messages: {
			userName: {
				required: "Имя обязательно",
				minlength: "Имя не короче двух букв"
			},
			userPhone: "Телефон обязателен",
		}

  });

  //маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
      // Создание карты.
      var myMap = new ymaps.Map("map", {
          // Координаты центра карты.
          // Порядок по умолчанию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [47.244729, 39.723187],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 9
      });
  }

});