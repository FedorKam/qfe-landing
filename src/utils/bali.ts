export function handleClickBaliArrowRight() {
  const cards = document.querySelectorAll<HTMLElement>('.bali__card');
  const count_cards = parseInt(document.querySelector('.bali__cardBlock')!.getAttribute('card-count')!);
  const active_card = document.querySelector<HTMLElement>('.bali__card_active');
  const num_card = parseInt(active_card!.getAttribute('card-num')!);

  active_card!.classList.remove('bali__card_active');

  if(count_cards > num_card){
    active_card!.style.order = "1";
    cards[num_card].classList.add('bali__card_active');
  }
  else{
    cards.forEach(item => {
      item.style.order = "0";
    });
    cards[0].classList.add('bali__card_active');
  }
}

export function handleClickBaliArrowLeft() {
  const cards = document.querySelectorAll<HTMLElement>('.bali__card');
  const active_card = document.querySelector<HTMLElement>('.bali__card_active');
  const num_card = parseInt(active_card!.getAttribute('card-num')!);
  const count_cards = parseInt(document.querySelector('.bali__cardBlock')!.getAttribute('card-count')!);

  active_card!.classList.remove('bali__card_active');

  if(num_card != 1){
    active_card!.style.order = "0";
    cards[num_card-2].classList.add('bali__card_active');
  }
  else
  {
    cards.forEach(item => {
      item.style.order = "1";
    });
    cards[count_cards-1].classList.add('bali__card_active');
  }
}
