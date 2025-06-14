'use client';

import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LanguageSelectPage() {

  const router = useRouter();
  const [selectedLang, setSelectedLang] = useState<string | null>('hi');

  const languages = [
    { label: 'English', code: 'A', value: 'en' },
    { label: 'हिंदी', subLabel: 'Hindi', code: 'HI', value: 'hi' },
  ];

  const handleLanguageChange = (lang: any) => {
    setSelectedLang(lang);
    localStorage.setItem('language', lang);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-between">
      {/* Back Arrow */}
      <div className="w-full flex justify-start">
        <ArrowLeft onClick={() => router.back()} className="h-6 w-6" />
      </div>

      {/* Language Icon */}
      <div className="flex flex-col items-center mt-6">
        <img src="/profile/language.png" alt="language" className="h-20 w-20 mb-4" />
        <p className="font-bold text-lg">भाषा चुनें</p>
        <p className="text-sm text-gray-500">Please Select Language</p>
      </div>

      {/* Language Options */}
      <div className="w-full max-w-md mt-4 space-y-4">
        {languages.map((lang) => (
          <div
            key={lang.value}
            onClick={() => handleLanguageChange(lang.value)}
            className={`flex justify-between items-center px-4 py-4 rounded-xl border cursor-pointer transition-all ${
              selectedLang === lang.value
                ? 'bg-pink-400 text-white'
                : 'bg-white border-pink-200 text-black'
            }`}
          >
            <div>
              <p className="font-semibold text-lg">{lang.label}</p>
              {lang.subLabel && <p className="text-sm text-gray-600">{lang.subLabel}</p>}
            </div>
            <span className="text-xl font-bold">{lang.code}</span>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <button
        disabled={!selectedLang}
        className={`w-full max-w-md py-3 rounded-full mt-6 mb-10 text-white font-semibold text-center text-lg ${
          selectedLang
            ? 'bg-gradient-to-r from-yellow-300 to-pink-400'
            : 'bg-gradient-to-r from-yellow-100 to-pink-100 cursor-not-allowed'
        }`}
      >
        जारी रखें
      </button>
    </div>
  );
}
