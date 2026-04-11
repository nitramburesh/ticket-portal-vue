import type { DefineComponent } from "vue";
import type {
  WCDSAvatar,
  WCDSBadge,
  WCDSButton,
  CustomEvent,
  WCDSCard,
  WCDSColor,
  WCDSIcon,
  WCDSInput,
  CustomEvent,
} from "@nitramburesh/wcds";

type WCDSAvatarProps = {
  /**  */
  src?: WCDSAvatar["src"];
  /**  */
  alt?: WCDSAvatar["alt"];
  /**  */
  name?: WCDSAvatar["name"];
  /**  */
  variant?: WCDSAvatar["variant"];
  /**  */
  size?: WCDSAvatar["size"];
};

type WCDSBadgeProps = {
  /**  */
  variant?: WCDSBadge["variant"];
};

type WCDSButtonProps = {
  /**  */
  id?: WCDSButton["id"];
  /**  */
  size?: WCDSButton["size"];
  /**  */
  variant?: WCDSButton["variant"];
  /**  */
  colorScheme?: WCDSButton["colorScheme"];
  /**  */
  type?: WCDSButton["type"];
  /**  */
  iconLeft?: WCDSButton["iconLeft"];
  /**  */
  iconRight?: WCDSButton["iconRight"];
  /**  */
  disabled?: WCDSButton["disabled"];

  /** Emitted when the button is clicked. */
  onclick?: (e: CustomEvent<CustomEvent>) => void;
};

type WCDSCardProps = {};

type WCDSColorProps = {
  /**  */
  color?: WCDSColor["color"];
  /**  */
  name?: WCDSColor["name"];
};

type WCDSIconProps = {
  /**  */
  icon?: WCDSIcon["icon"];
  /**  */
  size?: WCDSIcon["size"];
};

type WCDSInputProps = {
  /**  */
  id?: WCDSInput["id"];
  /**  */
  value?: WCDSInput["value"];
  /**  */
  size?: WCDSInput["size"];
  /**  */
  label?: WCDSInput["label"];
  /**  */
  placeholder?: WCDSInput["placeholder"];
  /**  */
  icon?: WCDSInput["icon"];
  /**  */
  disabled?: WCDSInput["disabled"];
  /**  */
  error?: WCDSInput["error"];

  /** Emitted on input with { value }. */
  oninput?: (e: CustomEvent<CustomEvent>) => void;
  /** Emitted when the user starts typing to clear existing errors. */
  "onclear-error"?: (e: CustomEvent<CustomEvent>) => void;
  /** Emitted on blur with { value }. */
  onchange?: (e: CustomEvent<CustomEvent>) => void;
};

export type CustomElements = {
  /**
   * User avatar with image or initials and Material-like shapes.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Avatar content (overrides initials fallback when provided).
   *
   * ### **CSS Properties:**
   *  - **--wcds-avatar-size** - Overall size of the avatar. _(default: undefined)_
   * - **--wcds-avatar-radius** - Border radius for the avatar shape. _(default: undefined)_
   * - **--wcds-avatar-bg** - Background color for fallback initials. _(default: undefined)_
   * - **--wcds-avatar-fg** - Text color for fallback initials. _(default: undefined)_
   * - **--wcds-avatar-font-size** - Font size for fallback initials. _(default: undefined)_
   */
  "wcds-avatar": DefineComponent<WCDSAvatarProps>;

  /**
   * Small status badge with four variants.
   * ---
   *
   *
   * ### **Slots:**
   *  - _default_ - Badge text/content.
   *
   * ### **CSS Properties:**
   *  - **--wcds-badge-padding** - Inner padding. _(default: undefined)_
   * - **--wcds-badge-radius** - Border radius. _(default: undefined)_
   * - **--wcds-badge-font-size** - Font size. _(default: undefined)_
   * - **--wcds-badge-bg** - Background color. _(default: undefined)_
   * - **--wcds-badge-fg** - Text color. _(default: undefined)_
   */
  "wcds-badge": DefineComponent<WCDSBadgeProps>;

  /**
   * A customizable button component with support for icons and various styles.
   * ---
   *
   *
   * ### **Events:**
   *  - **click** - Emitted when the button is clicked.
   *
   * ### **Slots:**
   *  - _default_ - The button's label or content.
   *
   * ### **CSS Properties:**
   *  - **--wcds-button-padding** - Padding inside the button. _(default: undefined)_
   * - **--wcds-button-radius** - Border radius of the button. _(default: undefined)_
   * - **--wcds-button-font-size** - Font size of the button label. _(default: undefined)_
   * - **--wcds-button-bg-color** - Background color of the button. _(default: undefined)_
   * - **--wcds-button-fg-color** - Text color of the button. _(default: undefined)_
   * - **--wcds-button-border-color** - Border color of the button. _(default: undefined)_
   * - **--wcds-button-icon-size** - Size of icons inside the button. _(default: undefined)_
   */
  "wcds-button": DefineComponent<WCDSButtonProps>;

  /**
   * Container card with header/body/footer slots, size and variant styles.
   * ---
   *
   *
   * ### **Slots:**
   *  - **header** - Optional header content (title, actions).
   * - _default_ - Default body content.
   * - **footer** - Optional footer content (buttons, meta).
   *
   * ### **CSS Properties:**
   *  - **--wcds-card-padding** - Padding inside the card. _(default: undefined)_
   * - **--wcds-card-radius** - Border radius of the card. _(default: undefined)_
   * - **--wcds-card-bg-color** - Background color. _(default: undefined)_
   * - **--wcds-card-border-color** - Border color (outlined/plain). _(default: undefined)_
   * - **--wcds-card-shadow** - Box shadow (elevated). _(default: undefined)_
   */
  "wcds-card": DefineComponent<WCDSCardProps>;

  /**
   *
   * ---
   *
   */
  "wcds-color": DefineComponent<WCDSColorProps>;

  /**
   *
   * ---
   *
   */
  "wcds-icon": DefineComponent<WCDSIconProps>;

  /**
   * A customizable input component with label, icons, validation, and error display.
   * ---
   *
   *
   * ### **Events:**
   *  - **input** - Emitted on input with { value }.
   * - **clear-error** - Emitted when the user starts typing to clear existing errors.
   * - **change** - Emitted on blur with { value }.
   *
   * ### **CSS Properties:**
   *  - **--wcds-input-padding** - Padding inside the input field. _(default: undefined)_
   * - **--wcds-input-border-radius** - Border radius of the input field. _(default: undefined)_
   * - **--wcds-input-border-color-default** - Border color of the input field. _(default: undefined)_
   * - **--wcds-input-border-color-focus** - Outline color of the input field on focus. _(default: undefined)_
   * - **--wcds-input-box-shadow** - Box shadow of the input field on focus. _(default: undefined)_
   * - **--wcds-input-icon-color** - Color of the input icon (defaults to neutral). _(default: undefined)_
   */
  "wcds-input": DefineComponent<WCDSInputProps>;
};

declare module "vue" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface GlobalComponents extends CustomElements {}
}

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements extends CustomElements {}
  }
}
