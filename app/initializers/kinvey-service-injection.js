export function initializeKinveyService(container, application) {
   application.inject('controller:index', 'kinveyService', 'service:kinvey-service');
   application.inject('route', 'kinveyService', 'service:kinvey-service');
}

export default {
  name: 'kinvey-service-injection',
  initialize: initializeKinveyService
};
