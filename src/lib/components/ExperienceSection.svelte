<script>
    import { experience } from '$lib/portfolioData';
    import { Calendar, Briefcase } from 'lucide-svelte';
</script>

<section id="experience" class="reveal">
    <div class="header">
        <h2 class="text-gradient">Industry Journey</h2>
        <p>A timeline of immersion, creation, and leadership in the tabletop ecosystem.</p>
    </div>

    <div class="timeline">
        {#each experience as item}
            <div class="timeline-item glass">
                <div class="timeline-marker">
                    <div class="marker-dot"></div>
                    <div class="marker-line"></div>
                </div>
                
                <div class="content">
                    <div class="period-badge">
                        <Calendar size={14} />
                        {item.period}
                    </div>
                    <h3>{item.role}</h3>
                    <div class="company">
                        <Briefcase size={16} color="var(--primary)" />
                        {item.company}
                    </div>
                    <p>{item.description}</p>
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

    .timeline {
        display: flex;
        flex-direction: column;
        gap: 30px;
        position: relative;
    }

    .timeline-item {
        display: grid;
        grid-template-columns: 40px 1fr;
        gap: 20px;
        padding: 40px;
        position: relative;
        transition: var(--transition);
    }

    .timeline-item:hover {
        transform: translateX(10px);
        background: rgba(0, 245, 255, 0.05);
    }

    .timeline-marker {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 10px;
    }

    .marker-dot {
        width: 12px;
        height: 12px;
        background: var(--primary);
        border-radius: 50%;
        box-shadow: 0 0 10px var(--primary);
        z-index: 2;
    }

    .marker-line {
        flex: 1;
        width: 2px;
        background: linear-gradient(to bottom, var(--primary), transparent);
        margin-top: 10px;
        opacity: 0.3;
    }

    .timeline-item:last-child .marker-line {
        display: none;
    }

    .period-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 4px 12px;
        background: var(--glass-border);
        border-radius: 100px;
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--text-muted);
        margin-bottom: 16px;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 8px;
    }

    .company {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        color: var(--primary);
        margin-bottom: 16px;
        text-transform: uppercase;
        font-size: 0.9rem;
        letter-spacing: 0.05em;
    }

    p {
        color: var(--text-muted);
        line-height: 1.6;
    }

    @media (max-width: 600px) {
        .timeline-item {
            padding: 30px 20px;
        }
    }
</style>
