
## useBoolean

举例:

```tsx
import React from 'react';
import { useBoolean } from 'react-hooks-lib';

const {state,setTrue,setFalse,toggle} = useBoolean(false)

export default () => <div>
    <p>state为{state ? "真" : "假"}</p>
    <button onClick={setTrue}>设置为真</button>
    <button onClick={setFalse}>设置为假</button>
    <button onClick={toggle}>切换布尔值状态</button>
</div>;
```