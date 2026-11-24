import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  MessageCircle, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  Clock, 
  ShieldCheck, 
  Phone,
  BookOpen,
  ArrowRight,
  Check
} from 'lucide-react';
import { 
  SCRIPTED_CONVERSATIONS, 
  WASH_SETUP_ITEMS, 
  SESSION_PLANNER_TOPICS, 
  DISCLOSURE_PROTOCOL, 
  ScriptedConversation,
  SessionPlanTopic 
} from '../../data/careGuides/educator-care';

export const EducatorCare: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'conversations' | 'setup' | 'referrals' | 'planner' | 'disclosure'>('conversations');

  // 1. Scripted conversations state
  const [selectedAgeGroupId, setSelectedAgeGroupId] = useState<'8-10' | '11-13' | '14-17'>('11-13');

  // 2. WASH setup checklist state
  const [checkedWashIds, setCheckedWashIds] = useState<string[]>(['wash-01', 'wash-02']);

  // 3. 30-min planner selected topics
  const [selectedTopicIds, setSelectedTopicIds] = useState<string[]>([
    'topic-bio', 'topic-hygiene', 'topic-myths', 'topic-support'
  ]);

  const activeConversation: ScriptedConversation = 
    SCRIPTED_CONVERSATIONS.find(s => s.ageGroup === selectedAgeGroupId) || SCRIPTED_CONVERSATIONS[1];

  const handleToggleWashItem = (id: string) => {
    setCheckedWashIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleToggleTopic = (id: string) => {
    setSelectedTopicIds(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    );
  };

  const selectedTopics = SESSION_PLANNER_TOPICS.filter(t => selectedTopicIds.includes(t.id));
  const totalPlannerMinutes = selectedTopics.reduce((acc, t) => acc + t.durationMinutes, 0);

  return (
    <div className="space-y-6">
      
      {/* 5-Tab Navigation Bar */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-white/70 dark:bg-plum-night/50 border border-petal shadow-2xs">
        {[
          { id: 'conversations', label: '1. What Would You Say?' },
          { id: 'setup', label: '2. School & Home Setup' },
          { id: 'referrals', label: '3. Red Flags & Referrals' },
          { id: 'planner', label: '4. 30-Min Session Planner' },
          { id: 'disclosure', label: '5. Safe Disclosure Protocol' },
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

      {/* Tab 1: "What Would You Say?" Scripted Helpers */}
      {activeTab === 'conversations' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Dialogue Scripts • Age-Appropriate Conversations
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                What Would You Say?
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Practical sentence starters and empathetic phrasing for parents, teachers, and didis.
              </p>
            </div>

            {/* Age Tier Selector */}
            <div className="flex gap-2 mb-6">
              {[
                { id: '8-10', label: 'Ages 8–10 (Preparation)' },
                { id: '11-13', label: 'Ages 11–13 (First Period)' },
                { id: '14-17', label: 'Ages 14–17 (Teens & Boundaries)' },
              ].map(group => (
                <button
                  key={group.id}
                  onClick={() => setSelectedAgeGroupId(group.id as any)}
                  className={`py-2 px-3.5 rounded-xl border text-xs font-bold transition-all ${
                    selectedAgeGroupId === group.id
                      ? 'bg-raspberry text-white border-raspberry shadow-soft-pink'
                      : 'bg-white/80 dark:bg-plum-deep text-plum border-petal'
                  }`}
                >
                  {group.label}
                </button>
              ))}
            </div>

            {/* Active Dialogue Helper Card */}
            <div className="p-6 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal max-w-2xl mx-auto text-xs space-y-4">
              <div>
                <span className="text-[10px] font-bold text-orchid uppercase block mb-1">Context</span>
                <p className="text-plum dark:text-pink-100 font-semibold">{activeConversation.context}</p>
              </div>

              {/* Starter Phrase Callout */}
              <div className="p-4 rounded-xl bg-petal/40 border border-petal text-plum italic text-xs sm:text-sm leading-relaxed">
                <span className="font-bold not-italic text-raspberry block mb-1">Recommended Opening Sentence:</span>
                {activeConversation.starterPhrase}
              </div>

              {/* Dos and Don'ts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-[11px]">
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="font-bold text-emerald-900 flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Helpful Phrases (Dos)</span>
                  </span>
                  <ul className="space-y-1.5 text-emerald-950">
                    {activeConversation.dos.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                  <span className="font-bold text-rose-900 flex items-center gap-1.5 mb-2">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Phrases to Avoid (Don'ts)</span>
                  </span>
                  <ul className="space-y-1.5 text-rose-950">
                    {activeConversation.donts.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-rose-600 font-bold">✗</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 2: School & Home Setup Checklist */}
      {activeTab === 'setup' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Infrastructure & Supplies • WASH Standards
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                School & Community Period-Friendly Checklist
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Low-cost, high-impact sanitation and dignity standards that dramatically reduce female student absenteeism.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
              {WASH_SETUP_ITEMS.map(item => {
                const isChecked = checkedWashIds.includes(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleToggleWashItem(item.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isChecked
                        ? 'bg-emerald-50/70 border-emerald-300'
                        : 'bg-white/80 dark:bg-plum-night/50 border-petal hover:border-raspberry/50'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 shrink-0 ${
                      isChecked ? 'bg-emerald-600 text-white' : 'border border-plum/30 bg-white'
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div>
                      <h4 className="font-bold text-plum dark:text-pink-100 mb-0.5">{item.title}</h4>
                      <p className="text-[11px] text-plum/70 dark:text-pink-200 leading-snug">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Red Flags & When to Refer */}
      {activeTab === 'referrals' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Clinical Referral Triggers • Non-Diagnostic Guide
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                Red Flags: When to Involve a Healthcare Professional
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Educators and caregivers should never diagnose or give prescription drugs. Connect learners to a paediatrician or gynaecologist when these signs appear:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal space-y-2">
                <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-bold text-[10px]">
                  Debilitating Pain
                </span>
                <h4 className="font-bold text-sm text-plum dark:text-pink-100">Missing School or Exams Monthly</h4>
                <p className="text-[11px] text-plum/80 leading-relaxed">
                  Cramping that causes fainting, vomiting, or keeps a student confined to bed despite heating pads and mild analgesics is not normal. Refer to a gynaecologist for dysmenorrhea and endometriosis screening.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal space-y-2">
                <span className="px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 font-bold text-[10px]">
                  Heavy Bleeding
                </span>
                <h4 className="font-bold text-sm text-plum dark:text-pink-100">Soaking a Pad Every 1–2 Hours</h4>
                <p className="text-[11px] text-plum/80 leading-relaxed">
                  Bleeding that saturates thick pads every hour for consecutive hours, passing blood clots larger than a coin, or chronic breathlessness/anaemia signs warrant urgent clinical evaluation for menorrhagia.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal space-y-2">
                <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[10px]">
                  Developmental Milestones
                </span>
                <h4 className="font-bold text-sm text-plum dark:text-pink-100">Delayed Puberty After Age 14–15</h4>
                <p className="text-[11px] text-plum/80 leading-relaxed">
                  No breast budding by age 13, or no menstrual period by age 15 (primary amenorrhea). A paediatrician or endocrinologist can evaluate nutrition, thyroid function, and hormone levels gently.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/80 dark:bg-plum-night/60 border border-petal space-y-2">
                <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-800 font-bold text-[10px]">
                  Mental Health Drops
                </span>
                <h4 className="font-bold text-sm text-plum dark:text-pink-100">Severe Premenstrual Despair (PMDD)</h4>
                <p className="text-[11px] text-plum/80 leading-relaxed">
                  Intense panic attacks, hopelessness, or self-harm thoughts occurring strictly during the week before periods. This points to Premenstrual Dysphoric Disorder, a treatable neurobiological condition.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 4: 30-Minute Session Planner */}
      {activeTab === 'planner' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-petal/60">
              <div>
                <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                  Interactive Lesson Builder • 30-Minute Session
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                  Build a 30-Minute Menstrual Health Workshop
                </h3>
                <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                  Select key topics to assemble a structured, stigma-free lesson agenda with quiz links.
                </p>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-petal/60 border border-petal text-plum font-bold text-xs shrink-0 self-start sm:self-center">
                Total Allocated Time: <span className="text-raspberry font-extrabold">{totalPlannerMinutes} mins</span>
              </div>
            </div>

            {/* Topic Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs">
              {SESSION_PLANNER_TOPICS.map(topic => {
                const isSelected = selectedTopicIds.includes(topic.id);
                return (
                  <div
                    key={topic.id}
                    onClick={() => handleToggleTopic(topic.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-petal/40 border-raspberry ring-2 ring-raspberry/30 text-plum'
                        : 'bg-white/80 dark:bg-plum-night/50 border-petal text-plum/70 hover:border-violet/40'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-bold text-sm text-plum dark:text-pink-100">{topic.title}</h4>
                        <span className="px-2 py-0.5 rounded-md bg-white text-raspberry font-bold text-[10px]">
                          {topic.durationMinutes} mins
                        </span>
                      </div>
                      <p className="text-[11px] text-orchid mb-2">{topic.learningGoal}</p>
                      <ul className="space-y-1 text-[10px] text-plum/80 list-disc list-inside">
                        {topic.talkingPoints.map((tp, i) => (
                          <li key={i}>{tp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 pt-2 border-t border-petal/60 flex items-center justify-between text-[10px] font-bold text-raspberry">
                      <span>Linked Quiz: {topic.suggestedQuizId}</span>
                      <Link to="/quiz" className="hover:underline flex items-center gap-0.5">
                        <span>Open Quiz</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 5: Safe Disclosure Protocol */}
      {activeTab === 'disclosure' && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="rounded-2xl glass-card p-6 sm:p-8 border border-petal shadow-soft-purple">
            <div className="mb-6">
              <span className="text-[11px] font-bold text-raspberry uppercase tracking-wider block">
                Safeguarding Protocol • Trauma-Informed Response
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-plum dark:text-pink-100">
                If a Child Confides Something Worrying
              </h3>
              <p className="text-xs text-orchid dark:text-pink-300 mt-1">
                Standard guidelines for educators, mentors, and community workers when an adolescent reports boundary violations or distress.
              </p>
            </div>

            <div className="space-y-3.5 max-w-2xl mx-auto text-xs">
              {DISCLOSURE_PROTOCOL.map(step => (
                <div
                  key={step.step}
                  className="p-4 rounded-xl bg-white/80 dark:bg-plum-night/60 border border-petal space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-raspberry text-white font-extrabold flex items-center justify-center text-xs shrink-0">
                      {step.step}
                    </span>
                    <h4 className="font-bold text-sm text-plum dark:text-pink-100">{step.action}</h4>
                  </div>
                  <p className="text-[11px] text-plum/90 leading-relaxed">{step.detail}</p>
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-900 text-[10px] font-semibold">
                    ⚠️ {step.criticalDoNot}
                  </div>
                </div>
              ))}
            </div>

            {/* Helplines Box */}
            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 max-w-2xl mx-auto">
              <div>
                <span className="font-bold text-emerald-900 block text-xs">
                  India Childline Protection Helpline: 1098
                </span>
                <p className="text-[11px] text-emerald-900/80 mt-0.5">
                  Toll-free 24/7 dedicated helpline for child emergency rescue, counseling, and legal support under the Ministry of Women & Child Development.
                </p>
              </div>
              <span className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white font-extrabold text-xs shrink-0 flex items-center gap-1">
                <Phone className="w-3.5 h-3.5" />
                <span>Call 1098</span>
              </span>
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};
