import * as React from 'react'
import { render, testA11y } from 'testing'
import Badge from '../'
import puppeteer from 'puppeteer'

describe('Badge', () => {
  test('passes a11y test', async () => {
    await testA11y(<Badge>test</Badge>)
  })

  test('render without content', () => {
    const renderer = render(<Badge content={123} data-testid='test-badge' />)
    const element = renderer.getByTestId('test-badge')
    expect(element).toHaveClass('adm-badge')
    expect(element).toMatchSnapshot()
  })

  test('render with content', () => {
    const { container } = render(<Badge content='新'>text</Badge>)
    expect(container).toMatchSnapshot()
  })

  test('renders with color', () => {
    const { container } = render(
      <Badge color='#108ee9' content='新'>
        text
      </Badge>
    )
    expect(container).toMatchSnapshot()
  })

  test('screenshot', async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.emulate(puppeteer.devices['iPhone 6'])
    await page.goto('http://127.0.0.1:8000/~demos/switch-demo1')
    const image = await page.screenshot()

    // @ts-ignore
    expect(image).toMatchImageSnapshot()
    await browser.close()
  })
})
