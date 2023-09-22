import type { Schema, Attribute } from '@strapi/strapi';

export interface StockStockComponents extends Schema.Component {
  collectionName: 'components_stock_stock_components';
  info: {
    displayName: 'stockComponents';
    description: '';
  };
  attributes: {
    XS: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    S: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    M: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    L: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
    XL: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 0;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'stock.stock-components': StockStockComponents;
    }
  }
}
