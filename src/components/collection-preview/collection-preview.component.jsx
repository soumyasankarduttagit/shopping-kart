import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from './../collection-item/collectionItem.component';

const CollectionPreview =({title,items})=>{

    return (
        <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        
        <div className='preview'>

       { items.filter((item,index)=>index<4).map(({id,...othercollectionitemprops})=>(

           <CollectionItem key ={id}{...othercollectionitemprops}/>
       ))}
        </div>

        </div>
    );

}
export default CollectionPreview;