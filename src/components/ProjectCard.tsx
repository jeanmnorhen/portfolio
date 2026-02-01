
import Link from 'next/link';

export interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectProps) {
    const CardContent = (
        <div className="glass project-card-inner" style={{
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
            cursor: 'pointer',
            border: '1px solid var(--border-subtle)'
        }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '12px', color: 'var(--text-primary)' }}>
                {title}
            </h3>
            <p style={{ marginBottom: '24px', flexGrow: 1, color: 'var(--text-secondary)' }}>
                {description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                {tags.map(tag => (
                    <span key={tag} style={{
                        fontSize: '0.85rem',
                        padding: '4px 12px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '100px',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-subtle)'
                    }}>
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );

    if (link && link !== "#") {
        return (
            <Link href={link} target="_blank" style={{ textDecoration: 'none', color: 'inherit' }}>
                {CardContent}
            </Link>
        );
    }

    return CardContent;
}
