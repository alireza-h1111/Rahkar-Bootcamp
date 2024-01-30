import { CanDeactivateFn } from '@angular/router';

export const formDeactivateGuard: CanDeactivateFn<unknown> = (component:any, currentRoute, currentState, nextState) => {
  console.log(component)
  if(component && component.formData && component?.formData?.dirty){
    const confirmaton =confirm( " You have some unsaved datails. Are You sure to go back?")
    if(confirmaton){
      return true;
    }else {
      return false;
    }
  }
  return true;
};
