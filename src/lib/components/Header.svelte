<script>
    import { Dices } from 'lucide-svelte';
    import { profile } from '$lib/portfolioData';
</script>

<header class="glass">
    <div class="container">
        <a href="/" class="logo">
            <Dices size={24} color="var(--primary)" />
            <span>{profile.name}</span>
        </a>
        
        <nav>
            <a href="#skills">Skills</a>
            <a href="#experience">Journey</a>
            <a href="#projects">Ecosystems</a>
            <a href="#gallery">Gallery</a>
            <a href="#workflow">Workflow</a>
            <a href="#contact" class="contact-link">Contact</a>
        </nav>
    </div>
</header>

<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;
        border-radius: 0;
        border-top: none;
        border-left: none;
        border-right: none;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 800;
        font-size: 1.2rem;
        letter-spacing: -0.02em;
    }

    nav {
        display: flex;
        gap: 32px;
        align-items: center;
    }

    nav a {
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 0.05em;
    }

    nav a:hover {
        color: var(--primary);
    }

    .contact-link {
        color: var(--primary) !important;
    }

    @media (max-width: 600px) {
        nav {
            display: none;
        }
    }
</style>
