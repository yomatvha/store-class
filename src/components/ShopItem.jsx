import React from 'react';

export default class ShopItem extends React.Component {

  constructor({param}) {
    super(param);
    this.param = param;
  }

  render() {
    return (
    <div class="main-content">
      <h2>{this.param.brand}</h2>
      <h1>{this.param.title}</h1>
      <h3>{this.param.description}</h3>
      <div class="description">
        {this.param.descriptionFull}
      </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
        <div class="price">{this.param.currency}{this.param.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    )
  }
}
