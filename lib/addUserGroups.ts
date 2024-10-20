import { LoopUserGroups } from "@/app/[lang]/enums/loopsUserGroups";
function addUserGroups(...args: string[]) {
  return args.join(',');
}

export const portugueseUserGroup = addUserGroups(LoopUserGroups.PORTUGUESE);

export const englishUserGroup = addUserGroups(LoopUserGroups.ENGLISH);

