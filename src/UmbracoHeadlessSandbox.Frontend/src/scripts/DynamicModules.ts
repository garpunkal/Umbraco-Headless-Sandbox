import toPascalCase from './helpers/toPascalCase';

/**
 * DynamicModules handles importing and initializing JavaScript modules 
 * based on data-js attributes found in the DOM.
 */
export default class DynamicModules {
  private moduleElements: Map<string, HTMLElement[]> = new Map();
  private jsAttributedElements: HTMLElement[];

  constructor() {
    this.jsAttributedElements = Array.from(document.querySelectorAll('[data-js]')) as HTMLElement[];
  }

  /**
   * Initialize the module importer
   */
  public init(): void {
    if (!this.jsAttributedElements.length) return;
    
    this.collectModules();
    if (!this.moduleElements.size) return;
    
    this.processModules();
  }

  /**
   * Organize elements by their module names
   */
  private collectModules(): void {
    for (const element of this.jsAttributedElements) {
      const attributeValue = element.getAttribute('data-js');
      if (!attributeValue) continue;

      const moduleNames = attributeValue.split(' ').filter(Boolean);
      
      for (const moduleName of moduleNames) {
        if (!this.moduleElements.has(moduleName)) {
          this.moduleElements.set(moduleName, []);
        }
        this.moduleElements.get(moduleName)?.push(element);
      }
    }
  }

  /**
   * Process all collected modules
   */
  private processModules(): void {
    this.moduleElements.forEach((elements, moduleName) => {
      if (elements.length) {
        this.importModule(moduleName, elements)
          .catch(error => console.error(`Failed to load module "${moduleName}":`, error));
      }
    });
  }

  /**
   * Import and initialize a specific module for its elements
   */
  private async importModule(moduleName: string, elements: HTMLElement[]): Promise<void> {
    try {
      const Module = await import(`./modules/${moduleName}.ts`);
      
      if (!Module.default) {
        throw new Error(`Module ${moduleName} does not have a default export`);
      }

      const instances = elements.map((element, index) => {
        element.dataset[`${moduleName}Index`] = index.toString();
        const instance = new Module.default(element, index);
        instance.init();
        return instance;
      });

      // Store instances globally if window.modules exists
      if (window.modules) {
        const instancesKey = `instancesOf${toPascalCase(moduleName)}`;
        window.modules[instancesKey] = instances;
      }
    } catch (error) {
      console.error(`Error initializing module ${moduleName}:`, error);
      throw error;
    }
  }
}