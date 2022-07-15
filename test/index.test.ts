import { describe, expect, it } from 'vitest'

describe('should', () => {
  it('work', () => {
    const set = new Set()
    set.add(1)
    set.add(2)
    set.add('1')
    const str = JSON.stringify(Array.from(set))
    const get = new Set(JSON.parse(str))
    expect(get).toEqual(set)
    expect(get).toMatchInlineSnapshot(`
      Set {
        1,
        2,
        "1",
      }
    `)
  })
})
