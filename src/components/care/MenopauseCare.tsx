import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Heart, 
  Flame, 
  Moon, 
  Activity, 
  Droplet, 
  Bone, 
  Copy, 
  Check, 
  AlertCircle,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { 
  MENOPAUSE_TIMELINE, 
  MENOPAUSE_SYMPTOMS_TOOLKIT, 
  HEALTH_CHECKS_ROADMAP, 
  DOCTOR_QUESTIONS 
} from '../../data/careGuides/menopause-care';

export const MenopauseCare: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'symptoms' | 'checks' | 'questions'>('timeline');

  // 1. Timeline state
  const [selectedStageId, setSelectedStageId] = useState<string>('perimenopause');

  // 2. Symptoms state
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>('hot-flushes');

  // 3. Question copy state
  const [checkedQuestions, setCheckedQuestions] = useState<string[]>([]);
  const [copiedToast, setCopiedToast] = useState(false);

  const activeStage = MENOPAUSE_TIMELINE.find(s => s.id === selectedStageId) || MENOPAUSE_TIMELINE[1];
  const activeSymptom = MENOPAUSE_SYMPTOMS_TOOLKIT.find(s => s.id === selectedSymptomId) || MENOPAUSE_SYMPTOMS_TOOLKIT[0];

  const handleToggleQuestion = (q: string) => {
    setCheckedQuestions(prev =>
      prev.includes(q) ? prev.filter(item => item !== q) : [...prev, q]
    );
  };

  const handleCopyQuestions = () => {
    const listToCopy = checkedQuestions.length > 0 ? checkedQuestions : DOCTOR_QUESTIONS;
    const text = "🌸 My Menopause Questions for Doctor:\n\n" + listToCopy.map((q, i) => `${i + 1}. ${q}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* 4-Tab Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal shadow-2xs">
        {[
          { id: 'timeline', label: '1. Timeline Explorer' },
          { id: 'symptoms', label: '2. Symptom Care Toolkit' },
          { id: 'checks', label: '3. Health Checks Roadmap' },
          { id: 'questions', label: '4. Questions for My Doctor' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-raspberry text-white shadow-soft-pink'
                : 'text-plum/80 dark:text-pink-200 hover:bg-petal/40'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Timeline Explorer */}
      {activeTab === 'timeline' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Roadmap • Midlife Hormonal Evolution
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Timeline Explorer: Navigating Midlife with Grace
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Explore the natural progression from your 40s onward. Median menopause age in India is ~46.2 years.
              </p>
            </div>

            {/* Stepper Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              {MENOPAUSE_TIMELINE.map(stage => (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStageId(stage.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all text-center ${
                    selectedStageId === stage.id
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : 'bg-white/80 dark:bg-plum-deep text-plum border-petal hover:border-raspberry/40'
                  }`}
                >
                  <span className="block">{stage.title.split('.')[1]}</span>
                  <span className="text-[10px] opacity-80 font-normal block mt-0.5">{stage.ageRange.split('(')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Stage Presentation Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal max-w-2xl mx-auto text-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold text-raspberry uppercase block mb-1">Biological Shift</span>
                <p className="text-plum/90 leading-relaxed text-xs sm:text-sm font-medium">{activeStage.biologicalChange}</p>
              </div>

              <div className="p-4 rounded-xl bg-petal/30 border border-petal/60">
                <span className="font-bold text-plum block mb-2">Common Signs in This Phase:</span>
                <ul className="space-y-1.5 text-[11px] text-plum/80">
                  {activeStage.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-raspberry font-bold">•</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <span className="font-bold text-emerald-900 block mb-2">What Helps Most Right Now:</span>
                <ul className="space-y-1.5 text-[11px] text-emerald-900/90">
                  {activeStage.whatHelps.map((h, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 2: Symptom Care Toolkit */}
      {activeTab === 'symptoms' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Comfort Dashboard • Evidence-Based Care
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Symptom Care Toolkit
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Practical ways to ease midlife changes and clear guidelines on when to consult a specialist.
              </p>
            </div>

            {/* Symptom Selectors */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-6">
              {MENOPAUSE_SYMPTOMS_TOOLKIT.map(symp => (
                <button
                  key={symp.id}
                  onClick={() => setSelectedSymptomId(symp.id)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all text-center flex flex-col items-center gap-1.5 ${
                    selectedSymptomId === symp.id
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : 'bg-white/80 dark:bg-plum-deep text-plum border-petal hover:border-raspberry/40'
                  }`}
                >
                  <span className="text-xl">{symp.icon}</span>
                  <span className="leading-tight">{symp.title.split('&')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Symptom Deep Dive */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal max-w-2xl mx-auto text-xs space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{activeSymptom.icon}</span>
                <h4 className="font-bold text-base text-plum dark:text-pink-100">{activeSymptom.title}</h4>
              </div>

              <div className="p-3.5 rounded-xl bg-petal/30 border border-petal/60 text-[11px] text-plum/90 leading-relaxed">
                <strong>Why It Happens:</strong> {activeSymptom.mechanism}
              </div>

              <div className="p-4 rounded-xl bg-white border border-petal">
                <span className="font-bold text-plum block mb-2">Self-Care Strategies:</span>
                <ul className="space-y-1.5 text-[11px] text-plum/80">
                  {activeSymptom.selfCareOptions.map((opt, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-raspberry font-bold">✓</span>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 rounded-xl bg-lavender/40 border border-lavender text-[11px] text-plum leading-relaxed">
                <strong>When to Consult a Gynaecologist:</strong> {activeSymptom.whenToConsultDoctor}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Health Checks Roadmap */}
      {activeTab === 'checks' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Preventative Health • Screenings
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Midlife Health Checks Roadmap
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Routine health checks that safeguard your bone strength, heart elasticity, and long-term vitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {HEALTH_CHECKS_ROADMAP.map(check => (
                <div
                  key={check.id}
                  className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-plum dark:text-pink-100">{check.name}</h4>
                    <span className="px-2 py-0.5 rounded-md bg-petal/60 text-plum font-bold text-[10px]">
                      {check.targetOrgans}
                    </span>
                  </div>

                  <p className="text-[11px] text-orchid dark:text-pink-300 leading-relaxed">
                    <strong>Schedule:</strong> {check.frequencyGuidance}
                  </p>

                  <p className="text-[11px] text-plum/80 dark:text-pink-200 leading-relaxed border-t border-petal/60 pt-2">
                    <strong>Why It Matters:</strong> {check.whyItMatters}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 4: Questions for My Doctor */}
      {activeTab === 'questions' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-petal/60">
              <div>
                <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                  Checklist & Clipboard • Clinical Consultation
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                  Questions for My Doctor
                </h3>
                <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                  Tick the questions you want to ask, or copy the entire list to your phone notes for your appointment.
                </p>
              </div>

              <button
                onClick={handleCopyQuestions}
                className="px-4 py-2 rounded-xl bg-raspberry text-white font-bold text-xs shadow-soft-pink flex items-center gap-1.5 shrink-0 self-start sm:self-center"
              >
                {copiedToast ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedToast ? 'Copied to Clipboard!' : 'Copy Selected Questions'}</span>
              </button>
            </div>

            {/* Questions Checklist */}
            <div className="space-y-2.5 max-w-2xl mx-auto mb-6 text-xs">
              {DOCTOR_QUESTIONS.map((q, idx) => {
                const isChecked = checkedQuestions.includes(q);
                return (
                  <div
                    key={idx}
                    onClick={() => handleToggleQuestion(q)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-petal/60 border-raspberry text-plum font-semibold'
                        : 'bg-white/80 dark:bg-plum-night/50 border-petal text-plum/80 hover:border-raspberry/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 ${
                      isChecked ? 'bg-raspberry text-white' : 'border border-plum/30 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="leading-relaxed">{q}</span>
                  </div>
                );
              })}
            </div>

            {/* Absolute Red Flag Banner */}
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-950 flex items-start gap-3 max-w-2xl mx-auto">
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-rose-900 block text-xs">
                  Critical Medical Rule: Post-Menopausal Bleeding
                </span>
                <p className="text-[11px] text-rose-900/90 mt-0.5 leading-relaxed">
                  Any vaginal bleeding or spotting occurring after menopause (12 full months with zero periods) must be promptly evaluated by a gynaecologist with a pelvic ultrasound or biopsy. Bleeding is never a sign of "youth returning" and warrants immediate medical review.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};
