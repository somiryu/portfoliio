<script>
    import { projects } from '$lib/portfolioData';
    
    // Flatten all images into a single array with project context
    const allScreenshots = projects.reduce((acc, project) => {
        if (project.images && project.images.length > 0) {
            project.images.forEach(img => {
                acc.push({
                    src: img,
                    project: project.title,
                    subtitle: project.subtitle
                });
            });
        }
        return acc;
    }, []);
</script>

<section id="gallery" class="reveal">
    <div class="header">
        <h2 class="text-gradient">Visual Command Center</h2>
        <p>A deep dive into the interfaces and architectures powering the tabletop ecosystem.</p>
    </div>

    <div class="masonry-grid">
        {#each allScreenshots as shot}
            <div class="shot-card glass">
                <img src={shot.src} alt={shot.project} loading="lazy" />
                <div class="overlay">
                    <span class="project-name">{shot.project}</span>
                    <span class="project-sub">{shot.subtitle}</span>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .header {
        text-align: center;
        margin-bottom: 60px;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 12px;
    }

    .masonry-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 24px;
        padding-bottom: 60px;
    }

    .shot-card {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        aspect-ratio: 16/10;
        cursor: crosshair;
        border: 1px solid var(--glass-border);
    }

    .shot-card img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 24px;
        background: linear-gradient(to top, rgba(0, 10, 20, 0.9), transparent);
        transform: translateY(20px);
        opacity: 0;
        transition: var(--transition);
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .shot-card:hover img {
        transform: scale(1.08);
    }

    .shot-card:hover .overlay {
        transform: translateY(0);
        opacity: 1;
    }

    .project-name {
        font-weight: 800;
        color: var(--primary);
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    .project-sub {
        font-size: 0.8rem;
        color: var(--text-muted);
    }

    @media (max-width: 768px) {
        .masonry-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
