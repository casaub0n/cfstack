---
name: 'component'
description: 'Generate standard React component.'
root: 'src'
output: '**/*'
ignore: []
questions:
  parts:
    message: 'chose parts name（Ex: atoms, organisms ..）'
    choices:
      - 'atom'
      - 'layout'
      - 'meta'
      - 'organism'
      - 'template'
  module: 'enter directory name（Ex: Button, Drawer ..）'
  name: 'enter component name'
---

# `src/components/{{ inputs.parts | lower }}/{{ inputs.module | pascal }}/{{ inputs.name | pascal }}.test.tsx`

```tsx
import { composeStories } from "@storybook/react";
import { render } from "@testing-library/react";
import * as stories from "./{{ inputs.name | pascal }}.stories";

const { Default } = composeStories(stories);

describe("src/component/{{ inputs.parts | lower }}s/{{ inputs.name | pascal }}.test.tsx", () => {
  test("{{ inputs.parts | lower }}", () => {
    const { container } = render(<Default />);
    expect(container).toBe{{ inputs.parts | lower}}();
  })
});
```