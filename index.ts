// @cv/index.ts
import resumeEs from './resume.json';
import resumeEn from './resume_en.json';

function getData(lang: string) {
  if (lang === 'en') {
    return resumeEn;
  } else {
    return resumeEs; // spanish default
  }
}

export { getData };