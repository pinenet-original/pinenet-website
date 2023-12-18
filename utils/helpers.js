import {
  dimaStoriesData,
  gogaStoriesData,
  mariusStoriesData,
} from "@/data/storiesData";

const listOfStories = [
  ...dimaStoriesData,
  ...mariusStoriesData,
  ...gogaStoriesData,
];

export const recomendedStories = listOfStories.filter(
  (story) => story.recomended === true
);
