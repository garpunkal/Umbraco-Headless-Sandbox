import toPascalCase from './helpers/toPascalCase';

export default class DynamicModuleImporter {
  private moduleNames: string[] = [];
  private jsAttributedElements: NodeListOf<Element>;

  constructor() {
    this.jsAttributedElements = document.querySelectorAll('[data-js]');
  }

  public init(): void {
    if (this.jsAttributedElements.length < 1) return;
    this.collectModuleNames();

    if (this.moduleNames.length < 1) return;
    this.processModules();
  }

  private collectModuleNames(): void {
    this.jsAttributedElements.forEach((el) => {
      const attributeValue = el.getAttribute('data-js') as string;
      const splitValue = attributeValue.split(' ') as string[];

      splitValue.forEach((value) => {
        if (!this.moduleNames.includes(value) && value) {
          this.moduleNames.push(value);
        }
      });
    });
  }

  private processModules(): void {
    this.moduleNames.forEach((moduleName) => {
      const elements = Array.from(this.jsAttributedElements).filter((el) =>
        el.getAttribute('data-js')?.includes(moduleName)
      ) as HTMLElement[];

      if (elements.length < 1) return;

      this.importModule(moduleName, elements);
    });
  }

  private async importModule(moduleName: string, elements: HTMLElement[]): Promise<void> {
    await import(`./modules/${moduleName}.ts`).then((Module) => {
      const instances = new Array();

      elements.forEach((element: Element, index: number) => {
        element.setAttribute(moduleName + '-index', index.toString());
        const instance = new Module.default(element, index);
        instance.init();
        instances.push(instance);
      });

      if (window.modules !== undefined) {
        window.modules['instancesOf' + toPascalCase(moduleName)] = instances;
      }
    });
  }
}