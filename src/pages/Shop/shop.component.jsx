import React from 'react';
import ShopData from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class Shop_Page extends React.Component
{

constructor(props){
    super(props);
    this.state={
        collections:ShopData
    }
}
render(){

    const {collections}= this.state;
return(

    <div className='shop-page'>
      {
         collections.map(({id,...othercollectionprops})=>(

             <CollectionPreview key={id} {...othercollectionprops}/>
         ))
      }
    </div>


);

}


} 
export default Shop_Page;