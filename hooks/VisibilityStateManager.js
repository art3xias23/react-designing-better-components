
import {useState} from 'react'

export function useVisibilityStateManager() {
  const [inTransition, setInTransition] = useState(false);

  return { inTransition, setInTransition
};
}