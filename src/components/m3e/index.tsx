import { forwardRef, useRef, useEffect, type ReactNode } from 'react';

interface M3EButtonProps {
  children: ReactNode;
  variant?: 'filled' | 'outlined' | 'elevated' | 'tonal' | 'text';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  toggle?: boolean;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
  'trailing-icon'?: ReactNode;
}

export const M3EButton = forwardRef<HTMLElement, M3EButtonProps>(
  ({ children, onClick, className, icon, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;

    useEffect(() => {
      const element = ref.current;
      if (element && onClick) {
        element.addEventListener('click', onClick);
        return () => element.removeEventListener('click', onClick);
      }
    }, [onClick, ref]);

    return (
      <m3e-button
        ref={ref}
        className={className}
        {...props}
      >
        {icon && <span slot="icon">{icon}</span>}
        {children}
      </m3e-button>
    );
  }
);

interface M3ECardProps {
  children: ReactNode;
  variant?: 'filled' | 'elevated' | 'outlined';
  actionable?: boolean;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  onClick?: () => void;
  className?: string;
}

export const M3ECard = forwardRef<HTMLElement, M3ECardProps>(
  ({ children, onClick, className, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;

    useEffect(() => {
      const element = ref.current;
      if (element && onClick) {
        element.addEventListener('click', onClick);
        return () => element.removeEventListener('click', onClick);
      }
    }, [onClick, ref]);

    return (
      <m3e-card
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </m3e-card>
    );
  }
);

interface M3EIconButtonProps {
  children: ReactNode;
  variant?: 'filled' | 'outlined' | 'elevated' | 'tonal' | 'standard';
  disabled?: boolean;
  toggle?: boolean;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

export const M3EIconButton = forwardRef<HTMLElement, M3EIconButtonProps>(
  ({ children, onClick, className, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;

    useEffect(() => {
      const element = ref.current;
      if (element && onClick) {
        element.addEventListener('click', onClick);
        return () => element.removeEventListener('click', onClick);
      }
    }, [onClick, ref]);

    return (
      <m3e-icon-button
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </m3e-icon-button>
    );
  }
);

interface M3EProgressProps {
  value?: number;
  max?: number;
  indeterminate?: boolean;
  className?: string;
}

export const M3EProgress = forwardRef<HTMLElement, M3EProgressProps>(
  ({ className, ...props }, ref) => {
    return (
      <m3e-progress
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);

interface M3EFormFieldProps {
  children: ReactNode;
  variant?: 'filled' | 'outlined';
  label?: string;
  'float-label'?: 'always' | 'auto' | 'never';
  error?: boolean;
  'error-text'?: string;
  className?: string;
}

export const M3EFormField = forwardRef<HTMLElement, M3EFormFieldProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <m3e-form-field
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </m3e-form-field>
    );
  }
);

interface M3EOptionProps {
  value: string;
  label?: string;
  selected?: boolean;
  disabled?: boolean;
  children?: ReactNode;
}

export const M3EOption = forwardRef<HTMLElement, M3EOptionProps>(
  ({ children, ...props }, ref) => {
    return (
      <m3e-option ref={ref} {...props}>
        {children}
      </m3e-option>
    );
  }
);

interface M3ESelectProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  multi?: boolean;
  onChange?: (value: string) => void;
  className?: string;
  children: ReactNode;
}

export const M3ESelect = forwardRef<HTMLElement, M3ESelectProps>(
  ({ children, onChange, className, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;

    useEffect(() => {
      const element = ref.current;
      if (element && onChange) {
        const handler = (e: Event) => {
          const customEvent = e as CustomEvent;
          onChange(customEvent.detail?.value || '');
        };
        element.addEventListener('change', handler);
        return () => element.removeEventListener('change', handler);
      }
    }, [onChange, ref]);

    return (
      <m3e-select
        ref={ref}
        className={className}
        {...props}
      >
        {children}
      </m3e-select>
    );
  }
);

interface M3ERadioProps {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const M3ERadio = forwardRef<HTMLElement, M3ERadioProps>(
  ({ onChange, className, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;

    useEffect(() => {
      const element = ref.current;
      if (element && onChange) {
        const handler = () => onChange(true);
        element.addEventListener('change', handler);
        return () => element.removeEventListener('change', handler);
      }
    }, [onChange, ref]);

    return (
      <m3e-radio
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);

interface M3ECheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export const M3ECheckbox = forwardRef<HTMLElement, M3ECheckboxProps>(
  ({ onChange, className, ...props }, forwardedRef) => {
    const internalRef = useRef<HTMLElement>(null);
    const ref = (forwardedRef as React.RefObject<HTMLElement>) || internalRef;

    useEffect(() => {
      const element = ref.current;
      if (element && onChange) {
        const handler = (e: Event) => {
          const customEvent = e as CustomEvent;
          onChange(customEvent.detail?.checked || false);
        };
        element.addEventListener('change', handler);
        return () => element.removeEventListener('change', handler);
      }
    }, [onChange, ref]);

    return (
      <m3e-checkbox
        ref={ref}
        className={className}
        {...props}
      />
    );
  }
);
