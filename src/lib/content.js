import { load as loadYaml } from 'js-yaml';
import { z } from 'zod';
import { parseFrontmatter } from '@/src/lib/frontmatter.mjs';

const technologySources = import.meta.glob('content/technologies/*.yml', {
  base: '../../',
  eager: true,
  import: 'default',
  query: '?raw',
});
const workSources = import.meta.glob('content/work/**/*.mdx', {
  base: '../../',
  eager: true,
  import: 'default',
  query: '?raw',
});

const frontmatterSchema = z.object({
  coverImage: z.string().min(1),
  date: z.string().regex(/^\d{4}-\d{2}$/),
  path: z.string().startsWith('/work/'),
  role: z.string().min(1),
  technologies: z.array(z.string().min(1)),
  title: z.string().min(1),
  summary: z.string().min(1),
  style: z.object({
    screenshot_offset: z.string().min(1),
    screenshot_shadow: z.string().min(1),
  }),
});

function normalizePath(rawPath) {
  let normalized = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

  if (normalized.length > 1 && normalized.endsWith('/')) {
    normalized = normalized.slice(0, -1);
  }

  return normalized;
}

function trailingPath(rawPath) {
  const normalized = normalizePath(rawPath);
  return normalized.endsWith('/') ? normalized : `${normalized}/`;
}

function normalizeAssetPath(assetPath) {
  const normalized = assetPath.trim();
  return normalized.replace(/^\.?\//, '');
}

function dateSortValue(yyyyMm) {
  return Date.parse(`${yyyyMm}-01T00:00:00.000Z`);
}

function sourcePathSegment(sourcePath, offsetFromEnd) {
  return sourcePath.split('/').at(-offsetFromEnd);
}

function loadTechnologyMap() {
  const entries = Object.entries(technologySources).map(
    ([sourcePath, source]) => {
      const parsed = loadYaml(source);
      const title = parsed?.title;
      const iconImage = parsed?.iconImage;

      if (!title || !iconImage) {
        throw new Error(`Invalid technology file: ${sourcePath}`);
      }

      return [
        title,
        {
          id: sourcePathSegment(sourcePath, 1).replace(/\.yml$/, ''),
          title,
          iconImageUrl: `/technologies/${iconImage}`,
        },
      ];
    }
  );

  return new Map(entries);
}

const technologyMap = loadTechnologyMap();

function parseWorkFile(sourcePath, source) {
  const { data, content } = parseFrontmatter(source, sourcePath);
  const frontmatter = frontmatterSchema.parse(data);
  const normalizedPath = normalizePath(frontmatter.path);
  const routePath = trailingPath(normalizedPath);
  const slugSegments = normalizedPath.split('/').filter(Boolean).slice(1);

  const technologies = frontmatter.technologies.map(technologyName => {
    const technology = technologyMap.get(technologyName);

    if (!technology) {
      return {
        id: technologyName.toLowerCase().replace(/\s+/g, '-'),
        title: technologyName,
        iconImageUrl: '',
      };
    }

    return technology;
  });

  const project = {
    id: sourcePathSegment(sourcePath, 2),
    title: frontmatter.title,
    summary: frontmatter.summary,
    role: frontmatter.role,
    date: frontmatter.date,
    routePath,
    normalizedPath,
    slugSegments,
    coverImageUrl: `${routePath}${normalizeAssetPath(frontmatter.coverImage)}`,
    style: frontmatter.style,
    technologies,
    body: content,
  };

  return project;
}

function loadWorkProjects() {
  return Object.entries(workSources)
    .map(([sourcePath, source]) => parseWorkFile(sourcePath, source))
    .sort((a, b) => dateSortValue(b.date) - dateSortValue(a.date));
}

const allWorkProjects = loadWorkProjects();

export function getAllTechnologies() {
  return Array.from(technologyMap.values());
}

export function getAllWorkProjects() {
  return allWorkProjects;
}

export function getRecentWorkProjects(limit = 3) {
  return allWorkProjects.slice(0, limit);
}

export function getWorkProjectBySlug(slugSegments) {
  if (!Array.isArray(slugSegments) || slugSegments.length === 0) {
    return null;
  }

  const requestedPath = normalizePath(`/work/${slugSegments.join('/')}`);
  return (
    allWorkProjects.find(project => project.normalizedPath === requestedPath) ??
    null
  );
}

export function getAllWorkParams() {
  return allWorkProjects.map(project => ({ slug: project.slugSegments }));
}
