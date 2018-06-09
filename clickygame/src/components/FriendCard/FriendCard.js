import React from 'react';
import './FriendCard.css';

const FriendCard = props => (
    <div className="card">
        <div className="img-container hvr-grow-shadow">
            <img onClick={() => props.friendClick(props.id)} className="img-thumbnail" alt={props.name} src={props.image} />
        </div>
        
    </div>
);

export default FriendCard;