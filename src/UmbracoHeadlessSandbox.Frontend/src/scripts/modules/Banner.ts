import Swiper from 'swiper';

/**
 * Banner - A module for banner/hero sliders
 */
export default class Banner {
  private el: HTMLElement;
  private carousel: any;

  /**
   * Creates a new Banner instance
   * 
   * @param el - The container element for the banner slider
   * @param _index - The instance index (unused but required by DynamicModuleImporter)
   */
  constructor(el: HTMLElement, _index: number = 0) {
    this.el = el;
  }

  /**
   * Initialize the banner slider
   */
  public init(): void {
    this.carousel = new Swiper(this.el, {
      loop: true,
      speed: 800,
      slidesPerView: 1,
      autoplay: true,
      grabCursor: true,
      mousewheel: false,
    });
  }
}
