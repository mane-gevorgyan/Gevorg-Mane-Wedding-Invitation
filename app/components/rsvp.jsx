'use client'

import { useState } from "react";
import { supabase } from "@/app/lib/supabase";

export default function RSVP({ translation, language }) {
    const [attendance, setAttendance] = useState("");
    const [name, setName] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!attendance || !name) return;

        const { error } = await supabase
            .from("wedding_rsvp")
            .insert([
                {
                    name,
                    attendance,
                },
            ]);

        if (error) {
            console.error("Supabase error:", error.message);
            return;
        }

        setAttendance("");
        setName("");
        setSubmitted(true);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-6 z-20 text-black">
            <div className="flex flex-col gap-4 w-full max-w-md">

                <label className={`${language === 'ru' ? 'russianFont' : 'handwrittenFont'} text-2xl`}>
                    {translation.attendance}
                </label>

                <div className="flex flex-col gap-2">
                    <label className={`${language === 'ru' ? 'russianFont' : 'handwrittenFont'} flex items-center gap-2 cursor-pointer text-2xl`}>
                        <input
                            type="radio"
                            name="attendance"
                            value="yes"
                            checked={attendance === "yes"}
                            onChange={(e) => setAttendance(e.target.value)}
                            className="accent-[#fdcdea]"
                            required
                        />
                        {translation.yes}
                    </label>

                    <label className={`${language === 'ru' ? 'russianFont' : 'handwrittenFont'} flex items-center gap-2 cursor-pointer text-2xl`}>
                        <input
                            type="radio"
                            name="attendance"
                            value="no"
                            checked={attendance === "no"}
                            onChange={(e) => setAttendance(e.target.value)}
                            className="accent-[#fdcdea]"
                            required
                        />
                        {translation.no}
                    </label>
                </div>

                <input
                    placeholder={translation.nameSurname}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border-b-2 border-[#fdcdea] bg-[#fffcfd] h-12 placeholder-[#d3cdcd] p-2 outline-none"
                />

                <button
                    type="submit"
                    className={`${language === 'ru' ? 'russianFont' : 'handwrittenFont'} rounded-4xl py-4 px-6 bg-gradient-to-r from-[#fdcdea] via-[#ffe5eb] to-[#efe6eb] cursor-pointer text-2xl`}
                >
                    {translation.send}
                </button>

                {submitted && (
                    <p className={`${language === 'ru' ? 'russianFont' : 'handwrittenFont'} text-center text-pink-500`}>
                        {translation.thanks} 💕 {translation.respondSent}
                    </p>
                )}

            </div>
        </form>
    );
}