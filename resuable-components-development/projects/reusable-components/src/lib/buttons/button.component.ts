import { Component, input } from "@angular/core";
import { NgpButton } from "ng-primitives/button";

/**
 * The size of the button.
 */
export type ButtonSize = "sm" | "md" | "lg" | "xl";
/**
 * The variant of the button.
 */
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";
@Component({
  selector: "button[app-button]",
  hostDirectives: [{ directive: NgpButton, inputs: ["disabled"] }],
  template: `
    <ng-content />
  `,
  host: {
    "[attr.data-size]": "size()",
    "[attr.data-variant]": "variant()",
  },
  styles: `
    :host {
        border: none;
        border-radius: var(--radiusRound);
        width: 100%;
        max-width: var(--width400);
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: var(--fontFamily);
        font-weight: var(--semi);
        line-height: var(--line-height-large);
        cursor: pointer;
        gap: 10px;
    }
    :host[data-hover] {
      background-color: var(--ngp-background-hover);
    }
    :host[data-focus-visible] {
      outline: 2px solid var(--ngp-focus-ring);
    }
    :host[data-press] {
      background-color: var(--ngp-background-active);
    }
    /* Size variants */
    :host[data-size="sm"] {
     font-size: var(--fontSize12);
     height: var(--height-height28, 28px);
     padding: var(--space0, 0) var(--space12, 12px);
    }
    :host[data-size="md"],
    :host:not([data-size]) {
     font-size: var(--fontSize14);
     height: var(--height-height36, 36px);
     padding: var(--space4, 4px) var(--space16, 16px);
    }
    :host[data-size="lg"] {
     font-size: var(--fontSize16);
     height: var(--height-height48, 48px);
     padding: var(--space12, 12px) var(--space16, 16px);
    }
    :host[data-size="xl"] {
      height: 3.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      font-size: 1.125rem;
      --ng-icon__size: 1.125rem;
    }
    /* Variant styles */
    :host[data-variant="primary"],
    :host:not([data-variant]) {
        background-color: var(--button-primary-background-color);
        color: var(--button-primary-font-color);
    }
    :host[data-variant="primary"][data-hover],
    :host:not([data-variant])[data-hover] {
     background-color: var(--button-primary-background-color);
    }
    :host[data-variant="primary"][data-press],
    :host:not([data-variant])[data-press] {
        background-color: var(--button-primary-background-color);
    }
    :host[data-variant="secondary"] {
      background-color: var(--button-secondary-background-color);
      color: var(--button-secondary-font-color);
       border: 1px solid var(--button-secondary-border-color, var(--accent-color));
    }
    :host[data-variant="secondary"][data-hover] {
      background-color: var(--button-secondary-background-color);
    }
    :host[data-variant="secondary"][data-press] {
      background-color: var(--button-secondary-background-color);
    }
    :host[data-variant="destructive"] {
      background-color: var(--ngp-destructive-background, #ef4444);
      color: var(--ngp-destructive-text, #ffffff);
      border: none;
    }
    :host[data-variant="destructive"][data-hover] {
      background-color: var(--ngp-destructive-background-hover, #dc2626);
    }
    :host[data-variant="destructive"][data-press] {
      background-color: var(--ngp-destructive-background-active, #b91c1c);
    }
    :host[data-variant="outline"] {
      background-color: transparent;
      color: var(--ngp-text-primary);
      border: 1px solid var(--ngp-outline-border, #e2e8f0);
      box-shadow: none;
    }
    :host[data-variant="outline"][data-hover] {
      background-color: var(--ngp-background-hover);
      border-color: var(--ngp-outline-border-hover, #cbd5e1);
    }
    :host[data-variant="outline"][data-press] {
      background-color: var(
        --ngp-outline-background-active,
        rgba(15, 23, 42, 0.1)
      );
    }
    :host[data-variant="ghost"] {
      background-color: transparent;
      color: var(--ngp-text-primary);
      border: none;
      box-shadow: none;
    }
    :host[data-variant="ghost"][data-hover] {
      background-color: var(--ngp-background-hover);
    }
    :host[data-variant="ghost"][data-press] {
      background-color: var(--ngp-background-active);
    }
    :host[data-variant="link"] {
      background-color: transparent;
      color: var(--ngp-link-color, #3b82f6);
      border: none;
      box-shadow: none;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    :host[data-variant="link"][data-hover] {
      text-decoration-thickness: 2px;
    }
    :host[data-variant="primary"]:host[disabled] {
        background-color: var(--button-primary-disabled-background-color);
        cursor: not-allowed;
    }
    :host[data-variant="secondary"]:host[disabled] {
        background-color: var(--button-secondary-disabled-background-color);
        color: var(--button-secondary-disabled-font-color);
        border: 1px solid var(--button-secondary-disabled-border-color, var(--accent-color));
        cursor: not-allowed;
    }
  `,
})
export class Button {
  /**
   * The size of the button.
   */
  readonly size = input<ButtonSize>("md");
  /**
   * The variant of the button.
   */
  readonly variant = input<ButtonVariant>("primary");
}
