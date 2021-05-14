/* tslint:disable */

declare module 'speccy/lint' {
  export interface linter {
    command: (specFile: string, cmd: Object) => Promise<void>
  }

  const lint: linter
  export default lint
}
