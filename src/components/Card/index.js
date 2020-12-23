import Card from '@/components/Card/Card';
Card.install = function(Vue) {
  Vue.component(Card.name, Card);
};
export default Card;
