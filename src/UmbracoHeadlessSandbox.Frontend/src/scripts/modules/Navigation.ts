/**
 * Navigation - A module for handling responsive navigation functionality
 */
export default class Navigation {
  private el: HTMLElement;
  private hamburger: HTMLButtonElement | null = null;
  private hamburgerMenu: HTMLButtonElement | null = null;
  private hamburgerMenuShadow: HTMLButtonElement | null = null;
  private hamburgerMenuClose: HTMLButtonElement | null = null;

  /**
   * Creates a new Navigation instance
   * 
   * @param el - The container element for the navigation
   * @param _index - The instance index (unused but required by DynamicModuleImporter)
   */
  constructor(el: HTMLElement, _index: number = 0) {
    this.el = el;
  }

  /**
   * Initialize the navigation component
   */
  public init(): void {
    this.hamburger = this.el.querySelector('.hamburger');
    if (this.hamburger == null) return;

    this.hamburgerMenu = this.el.querySelector('.hamburger-menu');
    if (this.hamburgerMenu == null) return;

    this.hamburgerMenuShadow = this.el.querySelector('.hamburger-menu-shadow');
    if (this.hamburgerMenuShadow == null) return;

    this.hamburgerMenuClose = this.el.querySelector('.hamburger-menu-close');
    if (this.hamburgerMenuClose == null) return;
 
    if (this.hamburger) this.handleHamburgerClick();
    if (this.hamburgerMenuClose) this.handleHamburgerMenuCloseClick();
    if (this.hamburgerMenuShadow) this.handleHamburgerMenuShadowClick();
  }

  /**
   * Set up hamburger button click event
   */
  private handleHamburgerClick(): void {
    this.hamburger?.addEventListener('click', () => {
      this.openMenu();
    });
  }

  /**
   * Set up close button click event
   */
  private handleHamburgerMenuCloseClick(): void {
    this.hamburgerMenuClose?.addEventListener('click', () => {
      this.closeMenu();
    });
  }

  /**
   * Set up shadow overlay click event
   */
  private handleHamburgerMenuShadowClick(): void {
    this.hamburgerMenuShadow?.addEventListener('click', () => {
      this.closeMenu();
    });
  }

  /**
   * Opens the mobile menu
   */
  private openMenu(): void {
    this.hamburgerMenu?.classList.remove('hidden');
    this.hamburgerMenu?.classList.add('open');
    this.hamburgerMenuShadow?.classList.remove('hidden');
  }

  /**
   * Closes the mobile menu
   */
  private closeMenu(): void {
    this.hamburgerMenu?.classList.add('hidden');
    this.hamburgerMenu?.classList.remove('open');
    this.hamburgerMenuShadow?.classList.add('hidden');
  }
}