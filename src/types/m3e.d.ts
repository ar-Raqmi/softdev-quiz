// Type declarations for Material 3 Expressive Web Components
// Using module augmentation to add M3E elements to React's JSX namespace

import 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'm3e-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        variant?: 'filled' | 'outlined' | 'elevated' | 'tonal' | 'text';
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
        href?: string;
        toggle?: boolean;
        selected?: boolean;
      };
      'm3e-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        variant?: 'filled' | 'elevated' | 'outlined';
        actionable?: boolean;
        disabled?: boolean;
        orientation?: 'vertical' | 'horizontal';
      };
      'm3e-icon-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        variant?: 'filled' | 'outlined' | 'elevated' | 'tonal' | 'standard';
        disabled?: boolean;
        toggle?: boolean;
        selected?: boolean;
      };
      'm3e-form-field': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        variant?: 'filled' | 'outlined';
        label?: string;
        'float-label'?: 'always' | 'auto' | 'never';
        error?: boolean;
        'error-text'?: string;
        'hide-subscript'?: 'always' | 'auto' | 'never';
        disabled?: boolean;
      };
      'm3e-select': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        value?: string;
        placeholder?: string;
        disabled?: boolean;
        required?: boolean;
        multi?: boolean;
      };
      'm3e-option': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        value?: string;
        label?: string;
        selected?: boolean;
        disabled?: boolean;
      };
      'm3e-checkbox': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        checked?: boolean;
        indeterminate?: boolean;
        disabled?: boolean;
      };
      'm3e-radio': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        checked?: boolean;
        disabled?: boolean;
        name?: string;
        value?: string;
      };
      'm3e-progress': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        value?: number;
        max?: number;
        indeterminate?: boolean;
      };
      'm3e-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        name?: string;
      };
      'm3e-elevation': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        level?: number;
        disabled?: boolean;
      };
      'm3e-focus-ring': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        disabled?: boolean;
      };
      'm3e-state-layer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        disabled?: boolean;
      };
      'm3e-ripple': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        disabled?: boolean;
      };
      'm3e-collapsible': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        open?: boolean;
      };
      'm3e-slide': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'selected-index'?: number;
      };
      'm3e-floating-panel': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        open?: boolean;
        anchor?: Element;
        'scroll-strategy'?: 'reposition' | 'block' | 'close';
      };
      'm3e-tooltip': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        content?: string;
        position?: 'top' | 'bottom' | 'left' | 'right';
      };
      'm3e-rich-tooltip': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        open?: boolean;
        headline?: string;
      };
      'm3e-bottom-sheet': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        open?: boolean;
        modal?: boolean;
        handle?: boolean;
        detents?: string;
      };
      'm3e-dialog': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        open?: boolean;
        headline?: string;
      };
      'm3e-calendar': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        date?: string;
        'min-date'?: string;
        'max-date'?: string;
      };
      'm3e-datepicker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        date?: string;
        variant?: 'docked' | 'modal';
      };
    }
  }
}
