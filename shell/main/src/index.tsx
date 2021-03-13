import React from 'react';
import { Inventory } from '@atao60/demo-app-ts-refs-monorepo-inventory-app';
import { DealershipProvider } from '@atao60/demo-app-ts-refs-monorepo-dealership-contract';

const Shell: React.FC = () => (
    <DealershipProvider fallback={<div>Loading...</div>}>
        <Inventory />
    </DealershipProvider>
);

export { Shell };
