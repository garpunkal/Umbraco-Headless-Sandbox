/**
 * TabbedContent - A module for creating tabbed interfaces
 */
export default class TabbedContent {
  private el: HTMLElement;
  private tabContainer: HTMLElement | null = null;
  private tabContentContainer: HTMLElement | null = null;

  /**
   * Creates a new TabbedContent instance
   * 
   * @param el - The container element for the tabbed content
   * @param _index - The instance index (unused but required by DynamicModuleImporter)
   */
  constructor(el: HTMLElement, _index: number = 0) {
    this.el = el;
  }

  /**
   * Initialize the tabbed content component
   */
  public init(): void {
    this.tabContainer = this.el.querySelector('.tab-container');
    if (this.tabContainer == null) return;

    this.tabContentContainer = this.el.querySelector('.tab-panel-container');
    if (this.tabContentContainer == null) return;

    if (this.tabContainer) this.handleTabClick();
    if (this.tabContentContainer) this.handleTabContentClick();
  }

  /**
   * Set up event listeners for tabs
   */
  private handleTabClick(): void {
    this.tabContainer?.querySelectorAll(".tab")?.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = tab.getAttribute('aria-controls');

        this.deactiveTabs();
        this.deactivateTabsSmall();
        this.setActiveTab(index);
        this.setActiveTabSmall(index);
        this.deactiveContent();
        this.switchContent(index);
      });
    });
  }

  /**
   * Set up event listeners for mobile tabs
   */
  private handleTabContentClick(): void {
    this.tabContentContainer?.querySelectorAll(".tab-small")?.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = tab.getAttribute('aria-controls');

        this.deactiveTabs();
        this.deactivateTabsSmall();
        this.setActiveTab(index);
        this.setActiveTabSmall(index);
        this.deactiveContent();
        this.switchContent(index);
      });
    });
  }

  /**
   * Set active tab by ID
   */
  private setActiveTab(index: string | null): void {
    if (!index || !this.tabContainer) return;
    
    const tab = this.tabContainer.querySelector('.tab[aria-controls="' + index + '"]');
    if (tab) {
      tab.classList.add("active");
      tab.setAttribute('aria-selected', 'true');
    }
  }

  /**
   * Set active small (mobile) tab by ID
   */
  private setActiveTabSmall(index: string | null): void {
    if (!index || !this.tabContentContainer) return;
    
    const tab = this.tabContentContainer.querySelector('.tab-small[aria-controls="' + index + '"]');
    if (tab) {
      tab.classList.add("active");
      tab.setAttribute('aria-selected', 'true');
    }
  }

  /**
   * Deactivate all tabs
   */
  private deactiveTabs(): void {
    this.tabContainer?.querySelectorAll(".tab")?.forEach(tab => {
      tab.classList.remove("active");
      tab.setAttribute('aria-selected', 'false');
    });
  }

  /**
   * Deactivate all small (mobile) tabs
   */
  private deactivateTabsSmall(): void {
    this.tabContentContainer?.querySelectorAll(".tab-small")?.forEach(tab => {
      tab.classList.remove("active");
      tab.setAttribute('aria-selected', 'false');
    });
  }

  /**
   * Deactivate all tab content panels
   */
  private deactiveContent(): void {
    this.tabContentContainer?.querySelectorAll(".tab-panel")?.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
  }

  /**
   * Show the content panel matching the active tab
   */
  private switchContent(active: string | null): void {
    if (!active || !this.tabContentContainer) return;
    
    this.tabContentContainer.querySelectorAll(".tab-panel")?.forEach((tabContent) => {
      if ((tabContent as HTMLElement).id == active) {
        tabContent.classList.add("active");
      }
    });
  }
}