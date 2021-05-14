import * as core from '@actions/core'
import lint from 'speccy/lint'

async function run(): Promise<void> {
  try {
    const specPath: string = core.getInput('path', {required: true})
    await lint.command(specPath, {})
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
