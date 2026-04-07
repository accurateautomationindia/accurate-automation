import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        ironSteel: "Iron & Steel",
        heavyVehicles: "Heavy Vehicles",
        gallery: "Gallery",
        aboutUs: "About Us",
        contact: "Get Quote",
        admin: "Admin",
      },
      hero: {
        badge: "Strength × Performance",
        ironTitle: "Iron, Steel & Welding",
        ironSubtitle: "Industrial Fabrication",
        ironDesc: "Engineered structural frameworks, immense sliding gates, and professional high-precision welding. Accurate Automation: Built to outlast.",
        ironCta: "Explore Welding & Fabrication",
        autoTitle: "Heavy Vehicle Maintenance",
        autoSubtitle: "Workshop in Kerala",
        autoDesc: "Industrial-grade workshop for heavy vehicle maintenance, structural chassis repair, and expert welding services.",
        autoCta: "Book Service"
      },
      home: {
        whyTitle: "WHY CHOOSE ACCURATE AUTOMATION?",
        whyDesc: "As a premier workshop in Kerala, we guarantee uncompromising quality across welding, iron and steel works, and heavy vehicle maintenance. Two specialties. One standard of excellence.",
        feat1Title: "Certified Quality",
        feat1Desc: "Expert operations ensuring rigorous adherence to industry standards in every weld and tune.",
        feat2Title: "Precision Delivered",
        feat2Desc: "From structural beams to engine blocks, our tolerances are measured in fractions of a millimeter.",
        feat3Title: "Rapid Efficiency",
        feat3Desc: "Rapid turnaround times on both fabrication projects and performance maintenance.",
        estimationTitle: "Interactive Estimation",
        estimationDesc: "Get an immediate baseline for your next project or secure your spot in our service bay.",
        fabLink: "View Fabrication Details",
        autoLink: "View Automotive Services"
      },
      services: {
        title: "Our Services",
        heavyTitle: "Heavy Vehicle Maintenance",
        heavyDesc: "Comprehensive diagnostics, engine repair, and structural welding workshop for transport fleets and heavy machinery.",
        ironTitle: "Welding, Iron & Steel Works",
        ironDesc: "Accurate Automation specializes in professional welding services (Arc, MIG, TIG), custom structural frameworks, and iron works.",
        estimatorTitle: "Service Estimator",
        ironSelected: "Iron Works",
        steelSelected: "Steel Works",
        alloySelected: "Custom Alloy",
        estimatedCost: "Estimated Cost",
        appointmentCta: "Schedule Service"
      },
      estimator: {
        title: "Fabrication Estimator",
        subtitle: "Get an instant baseline estimate for your structural project.",
        length: "Length (Meters)",
        width: "Width (Meters)",
        material: "Material Type",
        calcBtn: "Calculate Estimate",
        baseCost: "Estimated Base Cost",
        note: "*Estimate is for raw material area coverage only. Labor and complex joining are calculated post-consultation."
      },
      appointments: {
        successTitle: "Request Received",
        successDesc: "Our master mechanic will contact you shortly to confirm your slot.",
        bookAnother: "Book Another Service",
        title: "Book Automotive Service",
        subtitle: "Schedule priority bay time for maintenance or performance tuning.",
        vehicleLabel: "Vehicle Details (Make/Model/Year)",
        emailLabel: "Email Address",
        serviceLabel: "Service Type",
        heavyBody: "Heavy Vehicles Body Maintenance",
        dateLabel: "Preferred Date",
        timeLabel: "Preferred Time",
        timeMorning: "Morning (8AM - 12PM)",
        timeAfternoon: "Afternoon (1PM - 5PM)",
        submitBtn: "Request Appointment"
      },
      gallery: {
        title: "Project Gallery",
        subtitle: "Visualizing Precision and Performance.",
        all: "All Projects",
        iron: "Iron & Steel",
        heavy: "Heavy Vehicles"
      },
      contact: {
        title: "Request a Consultation",
        subtitle: "Contact our experts for precise quotes on complex fabrication projects or automotive diagnostics.",
        directLines: "Direct Lines",
        fabDesk: "Fabrication Desk",
        availability: "Available Sun-Sat, 08:00 AM - 06:00 PM",
        heavyDesk: "Heavy Vehicles Desk",
        emailDesk: "Electronic Mail",
        hq: "Headquarters",
        mapPin: "Facility Located",
        successTitle: "Message Transmitted",
        successDesc: "Our team will process your request and return contact within 1 business day.",
        submitAnother: "Submit Another Inquiry",
        inquiryType: "Inquiry Type",
        fullName: "Full Name",
        company: "Company (Optional)",
        emailLabel: "Email Address",
        phone: "Phone Number",
        projectDetails: "Project Details / Requirements",
        transmitBtn: "Transmit Request"
      },
      about: {
        title: "About",
        titleAccurate: "Accurate",
        titleAuto: "Automation",
        subtitle: "A premier workshop in Kerala where engineering discipline meets professional welding, iron and steel works.",
        legacyTitle: "Our Legacy",
        certifiedTitle: "Certified Excellence"
      },
      automotive: {
        title: "Heavy Vehicle Maintenance",
        subtitle: "Body Maintenance & Welding Workshop",
        coreTitle: "Heavy Vehicle Maintenance & Welding Kerala",
        professionalTitle: "Expert Welding Workshop Kerala"
      },
      ironSteel: {
        title: "Welding, Iron &",
        titleSteel: "Steel Works",
        titleDiv: "Division",
        subtitle: "Professional welding services, heavy-duty iron and steel works, gates, and grills. Forged with precision.",
        whatIs: "What are Welding and Steel Works?",
        coreSpec: "Our Core Specialties",
        quoteTitle: "Need a Custom Quote?"
      },
      footer: {
        tagline: "Precision Engineering since 2024. Tvm, Kerala.",
        rights: "All rights reserved. Accurate Automation India."
      }
    }
  },
  ml: {
    translation: {
      nav: {
        home: "ഹോം",
        ironSteel: "ഇരുമ്പ് & സ്റ്റീൽ",
        heavyVehicles: "ഹെവി വാഹനങ്ങൾ",
        gallery: "ഗാലറി",
        aboutUs: "ഞങ്ങളെക്കുറിച്ച്",
        contact: "ക്വൊട്ടേഷൻ",
        admin: "അഡ്മിൻ",
      },
      hero: {
        badge: "കരുത്ത് × മികച്ച പ്രവർത്തനം",
        ironTitle: "ഇരുമ്പ്, സ്റ്റീൽ & വെൽഡിങ്ങ്",
        ironSubtitle: "വ്യാവസായിക നിർമ്മാണം",
        ironDesc: "ഘടനാപരമായ ഫ്രെയിമുകൾ, വലിയ സ്ലൈഡിംഗ് ഗേറ്റുകൾ, പ്രൊഫഷണൽ വെൽഡിങ്ങ് സേവനങ്ങൾ. ഈട് നിൽക്കുന്നവ.",
        ironCta: "കൂടുതൽ വിവരങ്ങൾ",
        autoTitle: "ഹെവി വാഹനങ്ങൾ",
        autoSubtitle: "ബോഡി അറ്റകുറ്റപ്പണികൾ",
        autoDesc: "കൊമേഴ്‌സ്യൽ ട്രക്കുകളുടെ ബോഡി നിർമ്മാണം, ഷാസി റിപ്പയർ, വിദഗ്ദ്ധമായ വെൽഡിങ്ങ്.",
        autoCta: "സർവീസ് ബുക്ക് ചെയ്യുക"
      },
      home: {
        whyTitle: "എന്തുകൊണ്ട് ആക്യുറേറ്റ് ഓട്ടോമേഷൻ?",
        whyDesc: "ഒരു പ്രമുഖ സ്ഥാപനം എന്ന നിലയിൽ, വെൽഡിങ്ങ്, ഇരുമ്പ് & സ്റ്റീൽ വർക്ക്, ഹെവി വാഹന അറ്റകുറ്റപ്പണികളിൽ മികച്ച സേവനം ഞങ്ങൾ ഉറപ്പുനൽകുന്നു.",
        feat1Title: "സർട്ടിഫൈഡ് ഗുണനിലവാരം",
        feat1Desc: "ഓരോ നിർമ്മാണത്തിലും വ്യവസായിക നിലവാരം ഉറപ്പുവരുത്തുന്നു.",
        feat2Title: "കൃത്യതയോടുള്ള സേവനം",
        feat2Desc: "ഘടനാപരമായ ബീമുകൾ മുതൽ എഞ്ചിൻ ബ്ലോക്കുകൾ വരെ ഞങ്ങൾ കൃത്യതയോടെ നൽകുന്നു.",
        feat3Title: "വേഗത്തിലുള്ള കാര്യക്ഷമത",
        feat3Desc: "നിർമ്മാണ പ്രോജക്റ്റുകളിലും അറ്റകുറ്റപ്പണികളിലും വേഗത്തിലുള്ള സേവനം.",
        estimationTitle: "ഓൺലൈൻ എസ്റ്റിമേഷൻ",
        estimationDesc: "നിങ്ങളുടെ അടുത്ത പ്രോജക്റ്റിനായി എസ്റ്റിമേറ്റ് നേടുക അല്ലെങ്കിൽ സർവീസ് ബുക്ക് ചെയ്യുക.",
        fabLink: "ഫാബ്രിക്കേഷൻ വിവരങ്ങൾ കാണുക",
        autoLink: "സർവീസ് വിവരങ്ങൾ കാണുക"
      },
      services: {
        title: "ഞങ്ങളുടെ സേവനങ്ങൾ",
        heavyTitle: "ഹെവി വാഹന അറ്റകുറ്റപ്പണി",
        heavyDesc: "ട്രാൻസ്പോർട്ട് ഫ്ലീറ്റുകൾക്കും ഹെവി മെഷിനറികൾക്കുമുള്ള സമഗ്രമായ പരിശോധന, എഞ്ചിൻ റിപ്പയർ, എന്നിവ.",
        ironTitle: "ഇരുമ്പ്, സ്റ്റീൽ നിർമ്മാണം",
        ironDesc: "ഘടനാപരമായ ഫ്രെയിമുകൾ, ഗേറ്റുകൾ, പടികൾ, വാണിജ്യ അലോയ് വർക്കുകൾ എന്നിവയുടെ നിർമ്മാണം.",
        estimatorTitle: "സർവീസ് എസ്റ്റിമേറ്റർ",
        ironSelected: "ഇരുമ്പ് വർക്ക്",
        steelSelected: "സ്റ്റീൽ വർക്ക്",
        alloySelected: "കസ്റ്റം അലോയ്",
        estimatedCost: "എസ്റ്റിമേറ്റ് തുക",
        appointmentCta: "ബുക്ക് ചെയ്യുക"
      },
      estimator: {
        title: "ഫാബ്രിക്കേഷൻ എസ്റ്റിമേറ്റർ",
        subtitle: "നിങ്ങളുടെ പ്രോജക്റ്റിനായുള്ള എസ്റ്റിമേറ്റ് നേടുക.",
        length: "നീളം (മീറ്റർ)",
        width: "വീതി (മീറ്റർ)",
        material: "മെറ്റീരിയൽ",
        calcBtn: "എസ്റ്റിമേറ്റ് കണക്കാക്കുക",
        baseCost: "അടിസ്ഥാന ചിലവ്",
        note: "*അസംസ്കൃത വസ്തുക്കളുടെ അടിസ്ഥാനത്തിലുള്ള ചിലവാണ് മുകളിൽ നൽകിയിരിക്കുന്നത്. ലേബർ ചാർജ് ഇതിൽ ഉൾപ്പെടുന്നില്ല."
      },
      appointments: {
        successTitle: "അപേക്ഷ ലഭിച്ചു",
        successDesc: "സമയം സ്ഥിരീകരിക്കുന്നതിനായി ഞങ്ങളുടെ പ്രതിനിധി നിങ്ങളെ ബന്ധപ്പെടുന്നതാണ്.",
        bookAnother: "മറ്റൊരു സർവീസ് ബുക്ക് ചെയ്യുക",
        title: "ഓട്ടോമോട്ടീവ് സർവീസ് ബുക്ക് ചെയ്യുക",
        subtitle: "വാഹനങ്ങളുടെ സർവീസ് സമയം മുൻകൂട്ടി ബുക്ക് ചെയ്യുക.",
        vehicleLabel: "വാഹനത്തിന്റെ വിവരങ്ങൾ (കംബനി/വർഷം)",
        emailLabel: "ഇമെയിൽ വിലാസം",
        serviceLabel: "സർവീസ് തരം",
        heavyBody: "ഹെവി വാഹനങ്ങളുടെ ബോഡി വർക്കുകൾ",
        dateLabel: "തീയതി",
        timeLabel: "സമയം",
        timeMorning: "രാവിലെ (8AM - 12PM)",
        timeAfternoon: "ഉച്ചയ്ക്ക് ശേഷം (1PM - 5PM)",
        submitBtn: "സർവീസ് ബുക്ക് ചെയ്യുക"
      },
      gallery: {
        title: "പ്രോജക്റ്റ് ഗാലറി",
        subtitle: "കൃത്യതയോടെ പൂർത്തിയാക്കിയ മികച്ച പ്രോജക്റ്റുകൾ.",
        all: "എല്ലാ പ്രോജക്റ്റുകളും",
        iron: "ഇരുമ്പ് & സ്റ്റീൽ",
        heavy: "ഹെവി വാഹനങ്ങൾ"
      },
      contact: {
        title: "ഞങ്ങളെ ബന്ധപ്പെടുക",
        subtitle: "വ്യാവസായിക നിർമ്മാണങ്ങൾക്കും വാഹനങ്ങളുടെ സർവീസിനുമായി ഞങ്ങളുടെ വിദഗ്ധരുമായി സംസാരിക്കുക.",
        directLines: "നേരിട്ട് വിളിക്കാൻ",
        fabDesk: "ഫാബ്രിക്കേഷൻ ഡെസ്ക്",
        availability: "സമയം: ഞായർ-ശനി, 08:00 AM - 06:00 PM",
        heavyDesk: "ഹെവി വാഹന കോൺടാക്റ്റ്",
        emailDesk: "ഇമെയിൽ വിലാസം",
        hq: "ആസ്ഥാനം",
        mapPin: "സ്ഥാപനം സ്ഥിതിചെയ്യുന്ന സ്ഥലം",
        successTitle: "സന്ദേശം ലഭിച്ചു",
        successDesc: "ഞങ്ങളുടെ പ്രതിനിധി ഏറ്റവും വേഗത്തിൽ നിങ്ങളെ ബന്ധപ്പെടുന്നതാണ്.",
        submitAnother: "മറ്റൊരു സന്ദേശം അയക്കുക",
        inquiryType: "സന്ദേശത്തിന്റെ സ്വഭാവം",
        fullName: "മുഴുവൻ പേര്",
        company: "സ്ഥാപനത്തിന്റെ പേര്",
        emailLabel: "ഇമെയിൽ വിലാസം",
        phone: "ഫോൺ നമ്പർ",
        projectDetails: "പ്രോജക്റ്റ് വിവരങ്ങൾ",
        transmitBtn: "സന്ദേശം അയക്കുക"
      },
      about: {
        title: "ഞങ്ങളെക്കുറിച്ച്",
        titleAccurate: "ആക്യുറേറ്റ്",
        titleAuto: "ഓട്ടോമേഷൻ",
        subtitle: "എഞ്ചിനീയറിംഗ് മികവും വ്യാവസായിക നിർമ്മാണവും സംഗമിക്കുന്ന ഇടം.",
        legacyTitle: "ഞങ്ങളുടെ പാരമ്പര്യം",
        certifiedTitle: "സാക്ഷ്യപ്പെടുത്തിയ മികവ്"
      },
      automotive: {
        title: "ഹെവി വാഹനങ്ങൾ",
        subtitle: "ബോഡി അറ്റകുറ്റപ്പണികളും നിർമ്മാണവും",
        coreTitle: "പ്രത്യേകമായ ബോഡി മെയിന്റനൻസ്",
        professionalTitle: "കൃത്യതയാർന്ന സേവനം"
      },
      ironSteel: {
        title: "ഇരുമ്പ് &",
        titleSteel: "സ്റ്റീൽ",
        titleDiv: "വിഭാഗം",
        subtitle: "സ്റ്റീൽ ഫാബ്രിക്കേഷൻ, വലിയ ഗേറ്റുകൾ, ഗ്രില്ലുകൾ. കൃത്യതയോടെ നിർമ്മിച്ചവ.",
        whatIs: "എന്താണ് ഹെവി മെറ്റൽ ഫാബ്രിക്കേഷൻ?",
        coreSpec: "ഞങ്ങളുടെ പ്രത്യേകതകൾ",
        quoteTitle: "ക്വൊട്ടേഷൻ ആവശ്യമുണ്ടോ?"
      },
      footer: {
        tagline: "2024 മുതൽ കൃത്യതയോടെയുള്ള നിർമ്മാണം. തിരുവനന്തപുരം, കേരളം.",
        rights: "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം. ആക്യുറേറ്റ് ഓട്ടോമേഷൻ ഇന്ത്യ."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safeguards from xss
    }
  });

export default i18n;
