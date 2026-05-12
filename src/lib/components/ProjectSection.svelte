<script>
    import { projects } from '$lib/portfolioData';
    import { ExternalLink, Box } from 'lucide-svelte';
</script>

<section id="projects" class="reveal">
    <div class="header">
        <h2 class="text-gradient">Featured Ecosystems</h2>
        <p>Complex solutions for publishing, manufacturing, and real-time engagement.</p>
    </div>

    <div class="projects-list">
        {#each projects as project}
            <div class="project-container glass">
                <div class="project-visual">
                    <div class="floating-icon">
                        <Box size={48} color="var(--primary)" />
                    </div>
                </div>
                
                <div class="project-content">
                    <div class="project-header">
                        <h3>{project.title}</h3>
                        <span class="subtitle">{project.subtitle}</span>
                    </div>
                    
                    <p class="description">{project.description}</p>
                    
                    <div class="highlights">
                        {#each project.highlights as highlight}
                            <div class="highlight">
                                <span class="dot"></span>
                                {highlight}
                            </div>
                        {/each}
                    </div>

                    <div class="tech-stack">
                        {#each project.stack as tech}
                            <span class="tech-tag">{tech}</span>
                        {/each}
                    </div>

                    <div class="project-footer">
                        <a href={project.link} target="_blank" class="link-btn">
                            Explore Project <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>

<style>
    .header {
        margin-bottom: 60px;
    }

    h2 {
        font-size: 2.5rem;
        margin-bottom: 12px;
    }

    .projects-list {
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    .project-container {
        display: grid;
        grid-template-columns: 300px 1fr;
        overflow: hidden;
        min-height: 400px;
    }

    .project-visual {
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.05) 0%, transparent 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        border-right: 1px solid var(--glass-border);
    }

    .project-content {
        padding: 40px;
        display: flex;
        flex-direction: column;
    }

    .project-header h3 {
        font-size: 2rem;
        margin-bottom: 4px;
    }

    .subtitle {
        display: block;
        color: var(--primary);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 0.1em;
        margin-bottom: 20px;
    }

    .description {
        font-size: 1.1rem;
        margin-bottom: 24px;
        color: var(--text-muted);
    }

    .highlights {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
        margin-bottom: 32px;
    }

    .highlight {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 0.9rem;
        color: var(--text-main);
    }

    .dot {
        width: 6px;
        height: 6px;
        background: var(--primary);
        border-radius: 50%;
        box-shadow: 0 0 8px var(--primary);
    }

    .tech-stack {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-bottom: 40px;
    }

    .tech-tag {
        padding: 4px 12px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--glass-border);
        border-radius: 6px;
        font-size: 0.8rem;
        font-family: var(--font-mono);
    }

    .link-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--primary);
        font-weight: 700;
        font-size: 1rem;
    }

    .link-btn:hover {
        gap: 12px;
    }

    @media (max-width: 900px) {
        .project-container {
            grid-template-columns: 1fr;
        }
        .project-visual {
            height: 200px;
            border-right: none;
            border-bottom: 1px solid var(--glass-border);
        }
        .highlights {
            grid-template-columns: 1fr;
        }
    }
</style>
