<script>
    let { size = 20, color = "currentColor" } = $props();
</script>

<svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
    class="meeple-icon"
>
    <!-- Classic Carcassonne Meeple Shape -->
    <path d="M50 5C41.7 5 35 11.7 35 20C35 26.1 38.7 31.4 44 33.7V35C33.4 36.4 24.1 40.5 18 45C10 51 5 62 5 72V78C5 81.3 7.7 84 11 84H35C35 84 35 74 42 74C49 74 50 84 50 84C50 84 51 74 58 74C65 74 65 84 65 84H89C92.3 84 95 81.3 95 78V72C95 62 90 51 82 45C75.9 40.5 66.6 36.4 56 35V33.7C61.3 31.4 65 26.1 65 20C65 11.7 58.3 5 50 5Z" />
</svg>

<style>
    .meeple-icon {
        display: inline-block;
        vertical-align: middle;
        filter: drop-shadow(0 0 5px var(--primary-glow));
    }
</style>
