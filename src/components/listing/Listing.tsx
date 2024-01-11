import { IProduct } from '../../types'

import classes from './css/listing.module.css'


type ListingProps = {
    items: IProduct[]
}

export default function Listing(props: ListingProps) {
    const truncateString = (str: string, maxlength: number): string => {
        return (str.length >= maxlength) ? str.slice(0, maxlength-1)+'...' : str;
    }

    const { items } = props;

    const itemPrice = (currency_code: string, price: string): string => {
        return currency_code === 'USD' ? `$${price}` : (
            currency_code === 'EUR' ? `€${price}` : (
                `${price} ${currency_code}`))
    }
    const quantityLevel = (quantity: number): string => {
        return quantity <= 10 ? "level-low" : (
            quantity <= 20 ? "level-medium" : "level-high")
    }
    const filteredItems = items.filter( item => item.title);

    const dataItems = filteredItems.map( item =>
        (
            <div className={classes["item"]} key={item.listing_id}>
                <div className={classes["item-image"]}>
                    <a href={item.url}>
                    <img src={item.MainImage && item.MainImage.url_570xN}/>
                    </a>
                </div>
                <div className={classes["item-details"]}>
                    <p className={classes["item-title"]}>
                        {item.title && truncateString(item.title,50)}
                    </p>
                    <p className={classes["item-price"]}>
                        {item.price && itemPrice(item.currency_code, item.price)}
                    </p>
                    <p className={`${classes["item-quantity"]} ${classes[quantityLevel(item.quantity)]}`}>
                        {item.quantity} left
                    </p>
                </div>
            </div>      
        )
    );

  return (
    <div className={classes["item-list"]} >{dataItems}</div>
  )

}
