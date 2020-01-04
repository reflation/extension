import { styled as original } from 'linaria/react'
import { JSX, ComponentType, FunctionComponent } from 'preact'

//
// Preact Types
// Literally copied from Preact source code.
// see https://github.com/preactjs/preact/blob/master/src/index.d.ts
// The MIT License (MIT), Copyright (c) 2015-present Jason Miller
// -----------------------------------

type Ref<T> = { current?: T | null } | ((instance: T | null) => void)
type ComponentChild =
  | VNode<any>
  | object
  | string
  | number
  | boolean
  | null
  | undefined
type ComponentChildren = ComponentChild[] | ComponentChild

interface VNode<P = {}> {
  type: ComponentType<P> | string
  props: P & { children: ComponentChildren }
  key: string | number | any
  ref: Ref<any> | null
  /**
   * The time this `vnode` started rendering. Will only be set when
   * the devtools are attached.
   * Default value: `0`
   */
  startTime?: number
  /**
   * The time that the rendering of this `vnode` was completed. Will only be
   * set when the devtools are attached.
   * Default value: `-1`
   */
  endTime?: number
}

/**
 * This is a reimplementation of React.ReactType or React.ReactType using Preact Types.
 * The majority of this code is written by React team and its contributors.
 */
type ElementType<P = any> =
  | {
      [K in keyof JSX.IntrinsicElements]: P extends JSX.IntrinsicElements[K]
        ? K
        : never
    }[keyof JSX.IntrinsicElements]
  | ComponentType<P>

//
// Linaria Types
// -----------------------------------

type CSSProperties = {
  [key: string]: string | number | CSSProperties
}

type StyledComponent<T> = FunctionComponent<T & { as?: ElementType }>

type StyledTag<T> = <Props = T>(
  strings: TemplateStringsArray,
  ...exprs: Array<
    string | number | CSSProperties | ((props: Props) => string | number)
  >
) => StyledComponent<Props>

type StyledJSXIntrinsics = {
  readonly [P in keyof JSX.IntrinsicElements]: StyledTag<
    JSX.IntrinsicElements[P]
  >
}

export const styled: StyledJSXIntrinsics & {
  <T>(component: ElementType<T>): StyledTag<T>

  readonly [key: string]: StyledTag<{
    children?: ComponentChildren
    [key: string]: any
  }>
} = original as any
