interface Props {
  total: number;
  onTrack: number;
  needAttention: number;
  interactionsThisMonth: number;
}

export default function SummaryCards({
  total,
  onTrack,
  needAttention,
  interactionsThisMonth,
}: Props) {
  const cards = [
    { value: total, label: 'Total Friends' },
    { value: onTrack, label: 'On Track' },
    { value: needAttention, label: 'Need Attention' },
    { value: interactionsThisMonth, label: 'Interactions This Month' },
  ];

  return (
    <section className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm"
        >
          <div className="text-4xl font-bold text-emerald-900">{card.value}</div>
          <div className="mt-3 text-lg text-slate-500">{card.label}</div>
        </div>
      ))}
    </section>
  );
}