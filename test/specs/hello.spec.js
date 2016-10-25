import Vue from 'vue';
import App from 'src/app';

describe('App.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><app></app></div>',
      components: { App }
    }).$mount();
    expect(vm.$el.querySelector('h1').textContent).to.contain('vue-ssr');
    expect(vm.$el.querySelector('p').textContent).to.contain('vue server render');
  });
});
