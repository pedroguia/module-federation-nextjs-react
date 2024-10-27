import { lazy, useEffect, useState } from 'react';
import MODULES from '../utils/constants/modules';

let MODULES_COMPONENTS_MAPPER = null;

if (typeof window !== 'undefined') {
  MODULES_COMPONENTS_MAPPER = {
    [MODULES.remote.app]: lazy(() => import('remote/App')),
    [MODULES.remote.button]: lazy(() => import('remote/Button')),
    [MODULES.test.app]: lazy(() => import('test/App')),
  };
}

const useModuleComponent = (path) => {
  const [component, setComponent] = useState(() => null);

  useEffect(() => {
    if (typeof window !== 'undefined')
      setComponent(MODULES_COMPONENTS_MAPPER[path]);
  }, [path]);

  return component;
};

export default useModuleComponent;
