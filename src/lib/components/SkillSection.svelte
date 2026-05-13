<script>
    import { skills } from '$lib/portfolioData';
    import MeepleIcon from './MeepleIcon.svelte';
</script>

<section id="skills" class="reveal">
    <div class="header">
        <h2 class="text-gradient">Technical Mastery</h2>
        <p>A specialized stack honed for complex ecosystems and industry precision.</p>
    </div>

    <div class="skills-grid">
        {#each skills as skill}
            <div class="skill-card glass">
                <div class="skill-info">
                    <div class="name-container">
                        <MeepleIcon size={18} color="var(--primary)" />
                        <span class="name">{skill.name}</span>
                    </div>
                    <span class="level">{skill.level}%</span>
                </div>
                <div class="progress-bg">
                    <div class="progress-bar" style="width: {skill.level}%"></div>
                </div>
                <p class="description">{skill.description}</p>
                <div class="category-tag">{skill.category}</div>
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

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
        gap: 24px;
    }

    .skill-card {
        padding: 30px;
        position: relative;
        overflow: hidden;
        transition: var(--transition);
    }

    .skill-card:hover {
        transform: translateY(-5px);
        border-color: var(--primary);
        box-shadow: 0 10px 30px rgba(0, 245, 255, 0.05);
    }

    .skill-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
    }

    .name-container {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .name {
        font-weight: 700;
        font-size: 1.1rem;
    }

    .level {
        font-family: var(--font-mono);
        color: var(--primary);
        font-weight: 700;
    }

    .progress-bg {
        height: 6px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        margin-bottom: 16px;
        position: relative;
        overflow: hidden;
    }

    .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, var(--primary), #00d4ff);
        border-radius: 10px;
        box-shadow: 0 0 10px var(--primary-glow);
    }

    .description {
        font-size: 0.9rem;
        color: var(--text-muted);
        line-height: 1.4;
    }

    .category-tag {
        position: absolute;
        top: 0;
        right: 0;
        padding: 4px 12px;
        background: var(--glass-border);
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        border-bottom-left-radius: 12px;
        color: var(--text-muted);
    }
</style>
