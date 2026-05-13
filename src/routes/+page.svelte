<script>
    import { Header, Hero, SkillSection, ExperienceSection, ProjectSection, GallerySection, WorkflowSection } from '$lib/components';
    import { Mail, Terminal, Users } from 'lucide-svelte';
    import { profile } from '$lib/portfolioData';
</script>

<svelte:head>
    <title>{profile.name} | Senior Full Stack & Tabletop Specialist</title>
    <meta name="description" content="Portfolio of {profile.name}, a Senior Full Stack Developer specializing in tabletop industry ecosystems, gamification, and high-performance web applications.">
</svelte:head>

<Header />

<main>
    <Hero />
    <SkillSection />
    <ExperienceSection />
    <ProjectSection />
    <GallerySection />
    <WorkflowSection />

    <section id="contact" class="reveal">
        <div class="contact-card glass">
            <h2 class="text-gradient">Start a Mission</h2>
            <p>Looking for a Full Stack Developer who understands the tabletop lifecycle? Let's connect.</p>
            
            <div class="social-links">
                <a href={profile.socials.email} class="social-btn glass">
                    <Mail size={20} /> Email
                </a>
                <a href={profile.socials.github} target="_blank" class="social-btn glass">
                    <Terminal size={20} /> Github
                </a>
                <a href={profile.socials.linkedin} target="_blank" class="social-btn glass">
                    <Users size={20} /> LinkedIn
                </a>
            </div>
        </div>
    </section>
</main>

<footer>
    <div class="container">
        <p>© 2026 {profile.name}. Built with SvelteKit & The Antigravity Method.</p>
    </div>
</footer>

<style>
    .contact-card {
        text-align: center;
        padding: 80px 40px;
    }

    h2 {
        font-size: 3.5rem;
        margin-bottom: 16px;
    }

    p {
        color: var(--text-muted);
        font-size: 1.2rem;
        margin-bottom: 40px;
    }

    .social-links {
        display: flex;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
    }

    .social-btn {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 24px;
        font-weight: 700;
        transition: var(--transition);
    }

    .social-btn:hover {
        background: var(--primary);
        color: var(--bg-dark);
        border-color: var(--primary);
    }

    footer {
        padding: 40px 20px;
        border-top: 1px solid var(--glass-border);
        text-align: center;
        color: var(--text-muted);
        font-size: 0.9rem;
    }
</style>
