import { ScheduleForm } from "./schedule-form";

export const Schedule = () => {
  return (
    <div className="max-w-6xl mx-auto px-2 py-8">
      <h4 className="tracking-wider text-center font-semibold text-red-900 text-sm uppercase">
        ready for a dare
      </h4>
      <h3 className="font-semibold text-center text-2xl py-2 text-red-900">
        Schedule A Call
      </h3>
      <ScheduleForm />
    </div>
  );
};
