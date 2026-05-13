<script>
    import { workflow } from '$lib/portfolioData';
    import { Puzzle, ShieldCheck, Microscope } from 'lucide-svelte';
    
    const icons = [Puzzle, ShieldCheck, Microscope];
</script>

<section id="workflow" class="reveal">
    <div class="header">
        <h2 class="text-gradient">{workflow.title}</h2>
        <p>A precision-led AI workflow that balances speed with architectural integrity.</p>
    </div>

    <div class="workflow-grid">
        {#each workflow.steps as step, i}
            {@const Icon = icons[i]}
            <div class="step-card glass">
                <div class="step-num">{i + 1}</div>
                <div class="icon-box">
                    <Icon size={32} color="var(--primary)" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
            </div>
        {/each}
    </div>
</section>

<style>
    .header {
        text-align: center;
        margin-bottom: 80px;
    }

    h2 {
        font-size: 3rem;
        margin-bottom: 16px;
    }

    .workflow-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
        position: relative;
    }

    /* Connecting lines for desktop */
    @media (min-width: 1024px) {
        .workflow-grid::before {
            content: '';
            position: absolute;
            top: 50px;
            left: 20%;
            right: 20%;
            height: 2px;
            background: linear-gradient(90deg, transparent, var(--primary), transparent);
            z-index: 0;
            opacity: 0.3;
        }
    }

    .step-card {
        padding: 40px;
        text-align: center;
        position: relative;
        z-index: 1;
        transition: var(--transition);
    }

    .step-card:hover {
        background: rgba(0, 245, 255, 0.05);
        border-color: var(--primary);
    }

    .step-num {
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 40px;
        background: var(--bg-dark);
        border: 2px solid var(--primary);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        color: var(--primary);
        box-shadow: 0 0 15px var(--primary-glow);
    }

    .icon-box {
        margin-bottom: 24px;
        margin-top: 10px;
    }

    h3 {
        font-size: 1.5rem;
        margin-bottom: 16px;
    }

    p {
        color: var(--text-muted);
        font-size: 1rem;
        line-height: 1.6;
    }

    @media (max-width: 1023px) {
        .workflow-grid {
            grid-template-columns: 1fr;
            gap: 60px;
        }
    }
</style>
