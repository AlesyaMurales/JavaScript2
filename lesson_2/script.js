const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },

];

const renderGoodsItem = ({ title = "", price = 0 }) =>
    `<div class="goods_item">
        <h3>${title}</h3>
        <p>${price}</p>
    </div>`

const renderGoodsList = (list = []) => {
    const goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods_list').innerHTML = goodsList.join('');
}
window.onload = () => {
    renderGoodsList(goods);
};
const goodsList2 = goods.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
alert("Сумма всех товаров равна:" + goodsList2);




