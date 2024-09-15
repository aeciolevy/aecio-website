import { Letter, Post } from "content-collections";

export function parseDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split("-").map(Number);
  return new Date(year, month - 1, day); // month - 1 because months are zero-indexed
}

export function sortAscending(a: Letter | Post, b: Letter | Post): number {
  const dateA = parseDate(a.date);
  const dateB = parseDate(b.date);
  return dateA.getTime() - dateB.getTime();
}

export function sortDescending(a: Letter | Post, b: Letter | Post): number {
  return sortAscending(b, a);
}

