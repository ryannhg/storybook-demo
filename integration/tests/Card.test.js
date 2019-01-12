describe('Card', () => {
  it('visually looks correct', () =>
    page.goto('http://localhost:9001/iframe.html?selectedKind=Components&selectedStory=Card')
      .then(_ => page.screenshot())
      .then(image => expect(image).toMatchImageSnapshot())
  )
})
