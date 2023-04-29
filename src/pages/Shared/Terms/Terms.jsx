import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Condition</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aliquid omnis, officia, deserunt quos asperiores dolorum atque modi, laudantium facere distinctio natus praesentium in culpa. Debitis perspiciatis in quaerat quo.</p>
            <p>Go back to Register <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;