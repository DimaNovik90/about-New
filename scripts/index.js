const modalVideo = document.querySelector('.modal');
const btnOpenModalVideo = document.querySelector('.video__button-activ');
const btnCloseModalVideo = document.querySelector('.modal__button-close');
const video = document.querySelector('.modal__video');
const bodyElement = document.querySelector('.page'); 
//отключение скрола при открытии модально окна

// Универсальные функции открытия модальных окон и popup

function handlerOpenModal(elementModal) {
  elementModal.classList.add('modal_opened');
  document.addEventListener("keydown", hadlerCloseModalEsc);
}

function handlerCloseModal(elementModal) {
  elementModal.classList.remove('modal_opened');
  document.removeEventListener("keydown", hadlerCloseModalEsc);
}

// функция остановки видео после закрытия модального окна
function hadleStopVideo() {
  video.pause();
}

// функция закрытия модального окна при клике на overley
function handlerCloseModalOverley(evt) {
  if(evt.target === evt.currentTarget) {
    handlerCloseModal(evt.target)
  }
}
// функция закрытия окна при нажалии на Esc
function hadlerCloseModalEsc(evt) {
  if(evt.key === "Escape") {
    // const modalOpened = document.querySelector('.modal_opened');
    handlerCloseModal(modalVideo);
    hadleStopVideo();
  }
}

// слушатель события открытия модального окна video
btnOpenModalVideo.addEventListener('click', () => {
  handlerOpenModal(modalVideo)
});

btnCloseModalVideo.addEventListener('click', () => {
  handlerCloseModal(modalVideo)
  hadleStopVideo();
});

// слушатель события закрытия модального окна при клике на overley
modalVideo.addEventListener('click', ()=> {
  handlerCloseModal(modalVideo)
  hadleStopVideo();
})

































// const btnActivMenu = document.querySelector('.header__list-item_button-activ');
// const btnCloseMenu = document.querySelector('.menu-mobile__button');
// const menu = document.querySelector('.menu-mobile');
// const widgetExitLk = document.querySelector('.widget')
// const btnCloseWidgetLk = document.querySelector('.widget__button-close')
// const btnOpenModalVideo = document.querySelector('.video__button');
// const modalVideo = document.querySelector('.modal');
// const btnCloseModalVideo = document.querySelector('.modal__btn-close');
// const videoIframe = document.querySelector('.modal__video');


// function stopVideo () {
//   videoIframe.pause();
// }


// function handlerOpenModal(elementModal) {
//   elementModal.classList.add('modal__opened');
//   document.addEventListener("keydown", closeVideoModalEsc);
// }

// function handlerCloseModal(elementModal) {
//   elementModal.classList.remove('modal__opened');
//   document.removeEventListener("keydown", closeVideoModalEsc);
// }


// function closeVideoModalEsc (evt) {
//   if(evt.key === "Escape") {
//     const closePopup = document.querySelector('.modal__opened')
//     handlerCloseModal(closePopup);
//     stopVideo();
//   }
// }

// function closePopupVideoOverley(evt) {
//   if(evt.target === evt.currentTarget) {
//     handlerCloseModal(evt.target)
//     stopVideo();
//   }
// }





// function handlerCloseWidget(elementWidgets) {
//   elementWidgets.classList.add('widget__close');
// }


// function openMenu(menuElement) {
//   menuElement.classList.add('menu-mobile_active')
//   document.addEventListener("keydown", handlerClosePopupEsc);
// }
// function closeMenu(menuElement) {
//   menuElement.classList.remove('menu-mobile_active')
//   document.addEventListener("keydown", handlerClosePopupEsc);
// }

// function handlerClosePopupEsc(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".menu-mobile_active");
//     closeMenu(openedPopup);
//     btnActivMenu.style.color = 'black'
//   }
// }


// btnActivMenu.addEventListener('click', () => {
//   openMenu(menu)
//   btnActivMenu.style.color = 'rgba(9, 187, 181, 1)'
// });


// btnCloseMenu.addEventListener('click', ()=> {
//   closeMenu(menu)
//   btnActivMenu.style.color = 'black'
// });

// btnCloseWidgetLk.addEventListener('click', ()=> {
//   handlerCloseWidget(widgetExitLk)
// })

// btnOpenModalVideo.addEventListener('click', ()=> {
//   handlerOpenModal(modalVideo)
//   playVideoOpenModal()
// })
// btnCloseModalVideo.addEventListener('click', ()=> {
//   handlerCloseModal(modalVideo);
//   stopVideo();
// });
// modalVideo.addEventListener('mousedown', closePopupVideoOverley)