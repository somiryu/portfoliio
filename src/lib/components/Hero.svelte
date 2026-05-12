<script>
    import { profile } from '$lib/portfolioData';
    import { Terminal, Gamepad2, Award } from 'lucide-svelte';
</script>

<section class="hero reveal">
    <div class="badge-container">
        <span class="badge glass">
            <Award size={14} class="icon-primary" />
            4x Gamicon Award Winner
        </span>
    </div>
    
    <h1 class="text-gradient">{profile.title}</h1>
    <p class="summary">{profile.summary}</p>
    
    <div class="actions">
        <a href="#projects" class="glow-button">View Ecosystems</a>
        <a href="#contact" class="secondary-button glass">Get in Touch</a>
    </div>

    <div class="stats-grid">
        <div class="stat glass">
            <span class="value">15+</span>
            <span class="label">Years Industry Immersion</span>
        </div>
        <div class="stat glass">
            <span class="value">3+</span>
            <span class="label">Primary Mastery Techs</span>
        </div>
        <div class="stat glass">
            <span class="value">∞</span>
            <span class="label">Passion for Games</span>
        </div>
    </div>
</section>

<style>
    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding-top: 140px;
        min-height: 80vh;
    }

    .badge-container {
        margin-bottom: 24px;
    }

    .badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 16px;
        border-radius: 100px;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--primary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    h1 {
        font-size: clamp(2.5rem, 8vw, 4.5rem);
        margin-bottom: 24px;
        max-width: 900px;
    }

    .summary {
        font-size: 1.2rem;
        color: var(--text-muted);
        max-width: 700px;
        margin-bottom: 40px;
    }

    .actions {
        display: flex;
        gap: 16px;
        margin-bottom: 80px;
    }

    .secondary-button {
        padding: 12px 24px;
        border-radius: 8px;
        font-weight: 700;
        border: 1px solid var(--glass-border);
    }

    .secondary-button:hover {
        background: var(--glass-border);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        width: 100%;
        max-width: 800px;
    }

    .stat {
        padding: 24px;
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .value {
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary);
    }

    .label {
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--text-muted);
    }

    @media (max-width: 768px) {
        .stats-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
