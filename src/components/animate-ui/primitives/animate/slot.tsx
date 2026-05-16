'use client';

import * as React from 'react';
import { motion, isMotionComponent } from 'motion/react';
import { cn } from '~/lib/utils';

type AnyProps = Record<string, unknown>;

type DOMMotionProps<T extends HTMLElement = HTMLElement> = AnyProps & {
  className?: string;
  onClick?: React.MouseEventHandler<T>;
  ref?: React.Ref<T>;
  style?: unknown;
};

type SlotChildProps<T extends HTMLElement = HTMLElement> = AnyProps & {
  className?: string;
  ref?: React.Ref<T>;
  style?: unknown;
};

type MotionSlotComponent<T extends HTMLElement = HTMLElement> =
  React.ComponentType<AnyProps & { ref?: React.Ref<T> }>;

type WithAsChild<Base extends object> =
  | (Base & { asChild: true; children: React.ReactElement })
  | (Base & { asChild?: false | undefined });

type SlotProps<T extends HTMLElement = HTMLElement> = {
  children?: unknown;
} & DOMMotionProps<T>;

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(node);
      } else {
        (ref as React.RefObject<T | null>).current = node;
      }
    });
  };
}

function mergeProps<T extends HTMLElement>(
  childProps: AnyProps,
  slotProps: DOMMotionProps<T>,
): AnyProps {
  const merged: AnyProps = { ...childProps, ...slotProps };

  if (childProps.className || slotProps.className) {
    merged.className = cn(
      childProps.className as string,
      slotProps.className as string,
    );
  }

  if (childProps.style || slotProps.style) {
    merged.style = {
      ...(childProps.style as React.CSSProperties),
      ...(slotProps.style as React.CSSProperties),
    };
  }

  return merged;
}

function Slot<T extends HTMLElement = HTMLElement>({
  children,
  ref,
  ...props
}: SlotProps<T>) {
  const isChildElement = React.isValidElement<SlotChildProps<T>>(children);
  const childType = isChildElement ? children.type : 'div';
  const isAlreadyMotion =
    typeof childType === 'object' &&
    childType !== null &&
    isMotionComponent(childType);

  const Base = React.useMemo<MotionSlotComponent<T>>(
    () =>
      isAlreadyMotion
        ? (childType as MotionSlotComponent<T>)
        : (motion.create(childType as React.ElementType) as MotionSlotComponent<T>),
    [isAlreadyMotion, childType],
  );

  if (!isChildElement) return null;

  const { ref: childRef, ...childProps } = children.props;

  const mergedProps = mergeProps(childProps, props);

  return (
    <Base {...mergedProps} ref={mergeRefs(childRef as React.Ref<T>, ref)} />
  );
}

export {
  Slot,
  type SlotProps,
  type WithAsChild,
  type DOMMotionProps,
  type AnyProps,
};
