/**
 * Accordion - A module for creating accordion components
 */
export default class Accordion {
  private el: HTMLElement;
  private accordion: HTMLElement | null = null;

  /**
   * Creates a new Accordion instance
   * 
   * @param el - The container element for the accordion
   * @param _index - The instance index (unused but required by DynamicModuleImporter)
   */
  constructor(el: HTMLElement, _index: number = 0) {
    this.el = el;
  }

  /**
   * Initialize the accordion component
   */
  public init(): void {
    this.accordion = this.el.querySelector('.accordion');
    if (this.accordion) this.onButtonClick();
  }

  /**
   * Set up event listeners for accordion triggers
   */
  private onButtonClick(): void {
    this.accordion?.querySelectorAll("button.accordion-trigger")?.forEach(item => {
      item.addEventListener('click', () => {
        const index = item.getAttribute('aria-controls');
        if (!index) return;

        const expanded = (item.getAttribute('aria-expanded') !== 'true');
        item.setAttribute('aria-expanded', expanded.toString());

        this.disableAllTabs(index);
        this.toggleIcons(item);
        this.toggleContent(item, index);
      });
    });
  }

  /**
   * Toggle content panel visibility
   */
  private toggleContent(item: Element, index: string): void {
    const content = this.accordion?.querySelector("#" + index);
    if (content) {
      if (content.classList.contains("open")) {
        content.classList.remove("open");
        content.classList.add("close");
      } else {
        content.classList.add("open");
        content.classList.remove("close");
      }
    }
  }

  /**
   * Toggle plus/minus icons
   */
  private toggleIcons(item: Element): void {
    const plus = item.querySelector(".accordion-plus");
    const minus = item.querySelector(".accordion-minus");
    
    if (plus) {
      plus.classList.toggle('hidden');
      plus.classList.toggle('inline-flex');
    }

    if (minus) {
      minus.classList.toggle('inline-flex');
      minus.classList.toggle('hidden');
    }
  }

  /**
   * Reset icons to default state
   */
  private disableIcons(item: Element): void {
    const minus = item.querySelector(".accordion-minus");
    const plus = item.querySelector(".accordion-plus");

    if (minus) {
      minus.classList.add('hidden');
      minus.classList.remove('inline-flex');
    }
    
    if (plus) {
      plus.classList.add('inline-flex');
      plus.classList.remove('hidden');
    }
  }

  /**
   * Close all accordion items except the specified one
   */
  private disableAllTabs(excluding: string): void {
    this.accordion?.querySelectorAll("button.accordion-trigger")?.forEach(item => {
      const index = item.getAttribute('aria-controls');

      if (index !== excluding) {
        const content = this.accordion?.querySelector("#" + index);
        item.setAttribute('aria-expanded', 'false');
        this.disableIcons(item);
        if (content) {
          content.classList.add("close");
          content.classList.remove("open");
        }
      }
    });
  }
}
