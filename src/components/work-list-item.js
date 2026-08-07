import Image from 'next/image';
import AppLink from '@/src/components/app-link';

export default function WorkListItem({ preload = false, project }) {
  return (
    <AppLink
      className="block bg-brand-fog text-brand-ink no-underline transition hover:bg-white"
      href={project.routePath}
    >
      <div className="relative min-h-[170px] overflow-hidden">
        <Image
          alt={project.title}
          className="object-cover"
          fill
          preload={preload}
          sizes="(max-width: 669px) calc(100vw - 40px), (max-width: 1039px) calc((100vw - 56px) / 2), 492px"
          src={project.coverImageUrl}
        />
        <div
          className="absolute inset-0 opacity-70"
          style={{ backgroundColor: project.style.screenshot_offset }}
        />
      </div>
      <div className="p-3">
        <h3
          className="mb-3 font-semibold"
          style={{ color: project.style.screenshot_offset }}
        >
          {project.title}
        </h3>
        <p className="text-sm">{project.summary}</p>
      </div>
    </AppLink>
  );
}
