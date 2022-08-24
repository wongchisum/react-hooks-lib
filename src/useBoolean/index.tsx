import React, { useState, useCallback } from 'react';

export default function useBoolean(initialVal = false) {
  const [state, setState] = useState(initialVal);

  /**设置为真 */
  const setTrue = useCallback(() => setState(true), []);
  /**设置为假 */
  const setFalse = useCallback(() => setState(false), []);
  /**切换当前的布尔值 */
  const toggle = useCallback(() => setState((prevState: boolean) => !prevState), []);

  return {
    state,
    setTrue,
    setFalse,
    toggle,
  };
}
