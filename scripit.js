document.addEventListener("DOMContentLoaded", () => {
  const whatsappNumber = "5521967447488";

  const msgMensal = encodeURIComponent(
    "Olá! Quero ativar o Plano Mensal da OmniTag por R$ 14,99/mês. Vi que é sem adesão e com pagamento após 30 dias. Como funciona?"
  );

  const msgAnual = encodeURIComponent(
    "Olá! Quero ativar o Plano Anual da OmniTag por R$ 149,99/ano. Vi que é sem adesão e com pagamento após 30 dias. Como funciona?"
  );

  const openWhats = (text) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  };

  document.querySelectorAll(".cta-mensal").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (typeof fbq !== "undefined") {
        fbq('track', 'Lead', { plan: 'mensal' });
      }

      openWhats(msgMensal);
    });
  });

  document.querySelectorAll(".cta-anual").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (typeof fbq !== "undefined") {
        fbq('track', 'Lead', { plan: 'anual' });
      }

      openWhats(msgAnual);
    });
  });
});