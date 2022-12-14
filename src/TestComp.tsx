import React, { useEffect } from 'react';
import { useToast } from './components';

export const TestComp = () => {
    const { toast } = useToast();

    useEffect(() => {
        toast.success('watchout serious success');
    }, [toast]);

    return <div>TestComp</div>;
};
