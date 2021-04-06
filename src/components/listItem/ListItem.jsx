import React from 'react';
import './ListItem.scss';
import { AiOutlineRight } from 'react-icons/ai';

function ListItem({ item, isPending }) {
    console.log(item);
    return (
        <>
            <div className='ListItem'>
                <div className='logo-image'>
                    <img src={item.logo} alt='logo' />
                </div>
                <div className='item-detail'>
                    <div className='item-status'>
                        <span
                            className='item-type'
                            style={{
                                color: isPending ? '36B070' : '#444',
                            }}>
                            {item.status.type}
                        </span>
                        {isPending && <span className='item-date'>預計出貨：{item.date}</span>}
                    </div>
                    <div className='item-name'>{item.name}</div>
                </div>
                <div className='arrow'>
                    <AiOutlineRight />
                </div>
            </div>
        </>
    );
}

export default ListItem;
