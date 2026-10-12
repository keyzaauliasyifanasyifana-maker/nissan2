 // Memastikan semua elemen halaman web selesai dimuat dengan aman
document.addEventListener("DOMContentLoaded", function() {

    // hamburger //
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const backdrop = document.getElementById("nav-backdrop");

    if (hamburger && navMenu) {
        const closeMenu = function() {
            navMenu.classList.remove("open");
            hamburger.classList.remove("active");
            hamburger.setAttribute("aria-expanded", "false");
            document.documentElement.classList.remove("nav-open");
            if (backdrop) backdrop.classList.remove("show");
        };

        hamburger.addEventListener("click", function() {
            const isOpen = navMenu.classList.toggle("open");
            hamburger.classList.toggle("active", isOpen);
            hamburger.setAttribute("aria-expanded", String(isOpen));
            document.documentElement.classList.toggle("nav-open", isOpen);
            if (backdrop) backdrop.classList.toggle("show", isOpen);
        });

        if (backdrop) backdrop.addEventListener("click", closeMenu);

        navMenu.querySelectorAll("a").forEach(function(link) {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", function(e) {
            if (e.key === "Escape") closeMenu();
        });

        window.addEventListener("resize", function() {
            if (window.innerWidth > 991) closeMenu();
        });
    }

    // Mengambil semua elemen tombol tab navigasi
    const tabButtons = document.querySelectorAll(".tab-btn");
    // Mengambil semua elemen panel konten tab
    const tabPanels = document.querySelectorAll(".tab-panel");

    // Memasang fungsi klik otomatis ke setiap tombol tab
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            
           
            tabButtons.forEach(btn => btn.classList.remove("active"));
            
           
            tabPanels.forEach(panel => panel.classList.remove("active"));

            
            this.classList.add("active");

            
            const targetId = this.getAttribute("data-target");
            

            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add("active");
            }
        });
    });
});