export const BLOG_CONTENT: Record<
  string,
  { blocks: Array<{ type: "h2" | "p" | "ul"; text?: string; items?: string[] }> }
> = {
  "helsinki-airport-credit-card-deposit-hold": {
    blocks: [
      { type: "p", text: "If you’re renting a car at Helsinki Airport (HEL), there’s one thing that surprises travelers more than snow or darkness: the credit card deposit hold." },
      { type: "p", text: "You may have paid online. You may have “full insurance”. And still, at the counter, your card can get blocked for a large amount." },

      { type: "h2", text: "What is a deposit hold?" },
      { type: "p", text: "A deposit hold is not a charge. It’s a temporary authorization placed on your card at pickup. The money is blocked, not taken." },
      { type: "ul", items: ["Money isn’t spent", "Your available limit/balance shrinks", "It is released after return (timing depends on your bank)"] },
      { type: "p", text: "At Helsinki Airport, deposit holds often range from €300–€600 with strong coverage and can exceed €2,500 with basic coverage or higher car classes." },

      { type: "h2", text: "Why paying online doesn’t remove the hold" },
      { type: "p", text: "Online payment covers rental days and selected extras. The deposit covers risk: damage, fuel, late return, and admin fees. They are different." },

      { type: "h2", text: "Credit card vs debit card at HEL" },
      { type: "p", text: "Credit cards are preferred because preauthorizations are predictable. Debit cards are sometimes accepted, often refused at airports due to policy restrictions and balance limitations." },

      { type: "h2", text: "Airport vs city pickup" },
      { type: "p", text: "Airport locations tend to enforce stricter rules. City pickup can be more flexible, especially for non-standard cases (debit card, late arrival, limited documents)." },

      { type: "h2", text: "Quick checklist before booking" },
      { type: "ul", items: ["Use a credit card in the main driver’s name", "Verify the deposit amount (not just insurance)", "Check airport-specific card rules", "Screenshot the rules before checkout"] },

      { type: "p", text: "Next: read the full guide: /car-rental-helsinki" },
      { type: "p", text: "Or send your offer for a sanity-check: /get-help" },
    ],
  },

  "finland-car-rental-debit-card-when-it-fails": {
    blocks: [
      { type: "p", text: "Many sites say debit cards are accepted for car rental in Finland. That statement is technically true and practically misleading." },

      { type: "h2", text: "When debit cards may work" },
      { type: "ul", items: ["City pickup locations", "Lower deposits", "Clear written policy that specifically allows debit", "Physical (non-virtual) card in driver’s name"] },

      { type: "h2", text: "When debit cards often fail" },
      { type: "ul", items: ["Airport pickups", "Late-night arrivals", "Premium vehicles", "High deposits", "Virtual/app-only cards"] },

      { type: "h2", text: "The fine print that matters" },
      { type: "p", text: "If terms say airport locations may require a credit card, assume debit will be refused at the counter." },

      { type: "h2", text: "How to reduce refusal risk" },
      { type: "ul", items: ["Choose city pickup", "Ensure available funds exceed deposit + buffer", "Screenshot acceptance terms", "Avoid vague ‘debit accepted’ claims without details"] },

      { type: "p", text: "Related guide: /car-rental-helsinki" },
    ],
  },

  "helsinki-airport-vs-city-pickup-real-costs": {
    blocks: [
      { type: "p", text: "Airport pickup in Helsinki looks convenient. City pickup looks cheaper. The real difference is often rules, deposits, and flexibility." },

      { type: "h2", text: "Why airport pickup is stricter" },
      { type: "ul", items: ["Higher fraud controls", "Rotating staff", "Less flexibility", "Stricter card requirements"] },

      { type: "h2", text: "Why city pickup can be safer" },
      { type: "ul", items: ["More flexible documentation handling", "Debit acceptance more likely", "Deposits can be lower", "Less last-minute refusal risk"] },

      { type: "h2", text: "What to compare" },
      { type: "ul", items: ["Deposit amount", "Card rules (credit vs debit)", "Pickup time window", "Out-of-hours rules/fees"] },

      { type: "p", text: "Full guide: /car-rental-helsinki" },
    ],
  },

  "winter-campervan-finland-heating-power-costs": {
    blocks: [
      { type: "p", text: "Winter camper travel in Finland depends on heating and power, not vibes. Cold and short days punish weak setups." },

      { type: "h2", text: "Heating types that matter" },
      { type: "ul", items: ["Diesel heater: usually best", "Gas heater: situational", "Electric-only heating: risky in real winter"] },

      { type: "h2", text: "Power reality in winter" },
      { type: "ul", items: ["Cold reduces battery performance", "Short days reduce solar usefulness", "Hookups become a real cost driver"] },

      { type: "h2", text: "Questions to ask before booking" },
      { type: "ul", items: ["Heater type and fuel", "Battery capacity", "Insulation and winter rating", "Water system freeze protection"] },

      { type: "p", text: "Guide: /camper-rental-finland" },
    ],
  },

  "camper-rental-finland-mileage-caps-overage-fees": {
    blocks: [
      { type: "p", text: "The cheapest camper listings often hide strict kilometer limits. In Finland, distances add up fast, so this matters." },

      { type: "h2", text: "The math trap" },
      { type: "p", text: "Overage fees can quietly add hundreds of euros. Always estimate your route distance and calculate worst-case overage." },

      { type: "h2", text: "How to avoid surprises" },
      { type: "ul", items: ["Plan route first", "Check included km/day", "Check overage price per km", "Compare with unlimited mileage offers"] },

      { type: "p", text: "Guide: /camper-rental-finland" },
    ],
  },

  "camper-winterised-meaning-finland-checklist": {
    blocks: [
      { type: "p", text: "“Winterised” is often used loosely. In Finland, it should mean specific equipment and protections, not marketing." },

      { type: "h2", text: "Minimum winterised checklist" },
      { type: "ul", items: ["Insulated living space", "Reliable heater", "Protected water system", "Battery capacity suitable for cold"] },

      { type: "h2", text: "Common omissions" },
      { type: "ul", items: ["No freeze protection for pipes", "Weak batteries", "Heater present but not strong enough for real winter nights"] },

      { type: "p", text: "Guide: /camper-rental-finland" },
    ],
  },

  "lapland-northern-lights-tours-cancellation-rules": {
    blocks: [
      { type: "p", text: "Aurora tours sell hope. Weather decides reality. The biggest misunderstanding: no lights does not automatically mean a refund." },

      { type: "h2", text: "What usually qualifies for cancellation/refund" },
      { type: "ul", items: ["Provider cancels the tour", "Safety-related cancellation", "Severe conditions that prevent operation"] },

      { type: "h2", text: "What usually does not qualify" },
      { type: "ul", items: ["Cloudy skies", "Weak aurora activity", "You personally didn’t see much"] },

      { type: "h2", text: "How to protect yourself" },
      { type: "ul", items: ["Read cancellation/reschedule terms before paying", "Prefer clear reschedule policy", "Avoid vague ‘guarantee’ language"] },

      { type: "p", text: "Guide: /lapland-tours" },
    ],
  },

  "lapland-tour-inclusions-vs-paid-extras": {
    blocks: [
      { type: "p", text: "Two Lapland tours can cost the same and include very different things. Compare inclusions, not marketing names." },

      { type: "h2", text: "Usually included" },
      { type: "ul", items: ["Transport", "Guide", "Core activity"] },

      { type: "h2", text: "Often extra" },
      { type: "ul", items: ["Thermal suits/boots", "Photo packages", "Meals/snacks", "Extended pickup zones", "Drop-off fees"] },

      { type: "h2", text: "How to compare quickly" },
      { type: "ul", items: ["List inclusions side-by-side", "Check pickup window and meeting points", "Check cancellation terms", "Check what costs extra at checkout"] },

      { type: "p", text: "Guide: /lapland-tours" },
    ],
  },
};
