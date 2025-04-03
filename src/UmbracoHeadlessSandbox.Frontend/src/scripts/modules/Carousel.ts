import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

/**
 * A wrapper around Swiper that implements a carousel
 */
export default class Carousel {
  private el: HTMLElement;
  private elNext: HTMLElement | null;
  private elPrev: HTMLElement | null;
  private carousel: any;

  /**
   * Creates a new carousel instance
   * 
   * @param el - The container element for the carousel
   * @param _index - The instance index (unused but required by DynamicModuleImporter)
   */
  constructor(el: HTMLElement, _index: number = 0) {
    this.el = el;
    this.elNext = this.el.querySelector('.swiper-button-next');
    this.elPrev = this.el.querySelector('.swiper-button-prev');
  }

  /**
   * Initialize the carousel with Swiper
   */
  public init(): void {
    this.carousel = new Swiper(this.el, {     
      modules: [Navigation],
      navigation: {
        nextEl: this.elNext,
        prevEl: this.elPrev,
      },    
      loop: true,    
      speed: 800,
      grabCursor: true,
      slidesPerView: 2,
      spaceBetween: 50,    
      breakpoints: {
        768: {
          slidesPerView: 5,
          spaceBetween: 80,
        },
      },
    });
  }
}
