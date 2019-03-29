import React from 'react';
import './Card.css';

export const Card = ({ className, children }: any) => {
    const classes = ['Card', 'Card-padding-small', className].join(' ');
    return (<div className={classes}>
            {children}
        </div>
    );
}
