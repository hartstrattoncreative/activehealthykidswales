import defaultResolve, {
  PublishAction,
} from 'part:@sanity/base/document-actions';

export const corePages = ['home', 'reports', 'about', 'overallPhysicalActivity', 'communityAndBuiltEnvironment', 'school', 'activeTransportation', 'sedentaryBehaviours', 'outdoorAndActivePlay', 'policiesAndInvestments', 'familyAndPeer', 'organisedSports', 'physicalLiteracy', 'physicalFitness'];

export const coreNotifications = ['cookieNotification'];

export const coreErrorMessages = ['defaultErrorMessage'];

export default function resolveDocumentActions(props: any) {
  return defaultResolve(props).filter((Action: any) => {
    const publishOnly =
      (props.type === 'page' && corePages.includes(props.id)) ||
      (props.type === 'notification' && coreNotifications.includes(props.id)) ||
      (props.type === 'error' && coreErrorMessages.includes(props.id));

    if (publishOnly) {
      return Action === PublishAction;
    }
    return true;
  });
}
