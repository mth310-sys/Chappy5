import { findPath } from './navigation.js';

export const CUSTOMER_STATES = Object.freeze({
  ENTERING: 'entering',
  WALKING: 'walking',
  SEATED: 'seated',
  EXITING: 'exiting',
  LEFT: 'left',
});

export function createCustomer(id, start) {
  if (!id) throw new Error('customer id is required');
  if (!start || !Number.isInteger(start.x) || !Number.isInteger(start.y)) throw new Error('customer start must be a grid cell');
  return Object.freeze({ id, x: start.x, y: start.y, state: CUSTOMER_STATES.ENTERING, route: Object.freeze([{ x: start.x, y: start.y }]), routeIndex: 0, target: null });
}

export function planCustomerTo(customer, goal, map) {
  const route = findPath(customer, goal, map);
  if (!route || route.length < 1) throw new Error(`${customer.id} cannot reach target ${goal.x},${goal.y}`);
  return Object.freeze({
    ...customer,
    state: route.length === 1 ? CUSTOMER_STATES.SEATED : CUSTOMER_STATES.WALKING,
    route: Object.freeze(route.map((point) => Object.freeze({ ...point }))),
    routeIndex: 0,
    target: Object.freeze({ x: goal.x, y: goal.y }),
  });
}

export function advanceCustomer(customer) {
  if (customer.state !== CUSTOMER_STATES.WALKING) return customer;
  const nextIndex = Math.min(customer.routeIndex + 1, customer.route.length - 1);
  const point = customer.route[nextIndex];
  const arrived = nextIndex === customer.route.length - 1;
  return Object.freeze({
    ...customer,
    x: point.x,
    y: point.y,
    routeIndex: nextIndex,
    state: arrived ? CUSTOMER_STATES.SEATED : CUSTOMER_STATES.WALKING,
  });
}
