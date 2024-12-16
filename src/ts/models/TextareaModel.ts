class TextareaModel {
  private _textarea: HTMLTextAreaElement;
  private _initialContent: string;
  private previousValue: string;

  constructor(textareaSelector: HTMLTextAreaElement, initialContent: string) {
    this._textarea = textareaSelector;
    this._initialContent = initialContent;
    this.previousValue = this.initTextArea();
  }

  private initTextArea() {
    // Initialize textarea with default content
    this._textarea.value = this._initialContent;

    // Bind the input event to manage the content correctly
    this._textarea.addEventListener(
      "input",
      this.preventModifications.bind(this)
    );

    return this._initialContent;
  }

  private preventModifications(event: Event) {
    const value = this._textarea.value;

    // Only modify if value starts with `{` and ends with `}`
    if (value.startsWith("{") && value.endsWith("}")) {
      const content = value.slice(1, -1); // Get content inside { and }

      // If the content is modified, update the textarea value with new content
      this._textarea.value = `{${content}}`;
      this.previousValue = this._textarea.value;

      // Position the cursor back inside the content
      const cursorPosition = this._textarea.selectionStart;

      // If the cursor was inside the content, keep it inside
      if (cursorPosition !== null && cursorPosition !== undefined) {
        this._textarea.setSelectionRange(cursorPosition, cursorPosition);
      }
    } else {
      // If the value is invalid, reset to initial content

      this._textarea.value = this.previousValue;
    }
  }

  public getValue(): string {
    return this._textarea.value;
  }

  public setValue(value: string): void {
    this._textarea.value = value;
  }
}

export default TextareaModel;
